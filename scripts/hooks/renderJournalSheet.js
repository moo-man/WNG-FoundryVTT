/**
 * Adds tooltips to journal sheet buttons and adds listeners for pseudo entities
 */
Hooks.on("renderJournalSheet", (obj, html, data) => {
    $(html).find(".close").attr("title", "Close");
    $(html).find(".entry-image").attr("title", "Image");
    $(html).find(".entry-text").attr("title", "Text");
    $(html).find(".share-image").attr("title", "Show Image");

    // ---- Listen for custom entity links -----
    html.find(".chat-roll").click(ev => {
      WNG_Utility.handleRollClick(ev)
    })

    html.find(".symptom-tag").click(ev => {
      WNG_Utility.handleSymptomClick(ev)
    })

    html.find(".condition-chat").click(ev => {
      WNG_Utility.handleConditionClick(ev)
    })

    html.find('.table-click').mousedown(ev => {
      WNG_Utility.handleTableClick(ev)
    })
  })
  