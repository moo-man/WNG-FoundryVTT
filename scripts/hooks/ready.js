/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */
Hooks.on("ready", async () => {

    // Localize strings in the WNG object
    for (let obj in WNG)
    {
      for (let el in WNG[obj])
      {
        if (typeof WNG[obj][el] === "string")
        {
          WNG[obj][el] = game.i18n.localize(WNG[obj][el])
        }
      }
    }
  
    let activeModules = game.settings.get("core", "moduleConfiguration");
   
    // Load module tables if the module is active and if the module has tables
     for (let m in activeModules)
     {
       let module;
       if (activeModules[m])
       {
        
          try{
          await FilePicker.browse("data", `modules/${m}/tables`).then(resp => {

           if (resp.error || !resp.target.includes("tables"))
             throw ""
           for (var file of resp.files)
           {
             try {
               if (!file.includes(".json"))
                 continue
               let filename = file.substring(file.lastIndexOf("/")+1, file.indexOf(".json"));
   
               fetch(file).then(r=>r.json()).then(async records => {
                // If extension of a table, add it to the columns
                if(records.extend && WNG_Tables[filename])
                {
                  WNG_Tables[filename].columns = WNG_Tables[filename].columns.concat(records.columns)
                   WNG_Tables[filename].rows.forEach((obj, row) => {
                    for (let c of records.columns)
                      WNG_Tables[filename].rows[row].range[c] = records.rows[row].range[c]
                   })
                }
                else // If not extension, load table as its filename
                  WNG_Tables[filename] = records;
               })
             }
             catch(error) {
              console.error("Error reading " + file + ": " + error)
             }
           }
         })
          }
         catch {
         }
       }
     }

     // Load tables from world if it has a tables folder
     await FilePicker.browse("data", `worlds/${game.world.name}/tables`).then(resp => {
      try 
      {
      if (resp.error || !resp.target.includes("tables"))
        throw ""
      for (var file of resp.files)
      {
        try {
          if (!file.includes(".json"))
            continue
          let filename = file.substring(file.lastIndexOf("/")+1, file.indexOf(".json"));

          fetch(file).then(r=>r.json()).then(async records => {
            // If extension of a table, add it to the columns
            if(records.extend && WNG_Tables[filename])
            {
              WNG_Tables[filename].columns = WNG_Tables[filename].columns.concat(records.columns)
              WNG_Tables[filename].rows.forEach((obj, row) => {
                for (let c of records.columns)
                  WNG_Tables[filename].rows[row].range[c] = records.rows[row].range[c]
              })
            }
            else // If not extension, load table as its filename
              WNG_Tables[filename] = records;
          })
        }
        catch(error) {
         console.error("Error reading " + file + ": " + error)
        }
      }
    }
    catch
    {
      // Do nothing
    }   
  })

  // ***** FVTT functions with slight modification to include pseudo entities *****

 TextEditor._replaceContentLinks = function(match, entityType, id, name){

    // Match Compendium content
    if ( entityType === "Compendium" ) {
      return this._replaceCompendiumLink(match, id, name);
    }

    else if (PSEUDO_ENTITIES.includes(entityType))
    {
      return WNG_Utility._replaceCustomLink(match, entityType, id, name)
    }

    // Match World content
    else {
      return this._replaceEntityLink(match, entityType, id, name);
    }
  }

 TextEditor.enrichHTML = function(content, {secrets=false, entities=true, links=true, rolls=true}={}) {
  let html = document.createElement("div");
  html.innerHTML = content;

  // Strip secrets
  if ( !secrets ) {
    let elements = html.querySelectorAll("section.secret");
    elements.forEach(e => e.parentNode.removeChild(e));
  }

  // Match content links
  if ( entities ) {
    const entityTypes = CONST.ENTITY_LINK_TYPES.concat("Compendium").concat(PSEUDO_ENTITIES);;
    const entityMatchRgx = `@(${entityTypes.join("|")})\\[([^\\]]+)\\](?:{([^}]+)})?`;
    const rgx = new RegExp(entityMatchRgx, 'g');

    // Find and preload compendium indices
    const matches = Array.from(html.innerHTML.matchAll(rgx));
    if ( matches.length ) this._preloadCompendiumIndices(matches);

    // Replace content links
    html.innerHTML = html.innerHTML.replace(rgx, this._replaceContentLinks.bind(this));
  }

  // Replace hyperlinks
  if ( links ) {
    let rgx = /(?:[^\S]|^)((?:(?:https?:\/\/)|(?:www\.))(?:\S+))/gi;
    html.innerHTML = html.innerHTML.replace(rgx, this._replaceHyperlinks);
  }

  // Process inline dice rolls
  if ( rolls ) {
    const rgx = /\[\[(\/[a-zA-Z]+\s)?([^\]]+)\]\]/gi;
    html.innerHTML = html.innerHTML.replace(rgx, this._replaceInlineRolls);
  }

  // Return the enriched HTML
  return html.innerHTML;
};


   