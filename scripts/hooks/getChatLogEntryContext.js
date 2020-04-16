/**
 * Add right click option to damage chat cards to allow application of damage
 */
Hooks.on("getChatLogEntryContext", (html, options) => {
  let canApply = li => li.find(".opposed-card").length;
  options.push(
    {
      name: "Apply Damage",
      icon: '<i class="fas fa-user-minus"></i>',   
      condition: canApply,   
      callback: li => {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWNG.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.NORMAL)
        OpposedWNG.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    },
    {
      name: "Apply Damage (Ignore AP)",
      icon: '<i class="fas fa-user-shield"></i>',
      condition: canApply,   
      callback: li =>  {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWNG.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.IGNORE_AP)
        OpposedWNG.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    },
    {
      name: "Apply Damage (Ignore TB)",
      icon: '<i class="fas fa-fist-raised"></i>',
      condition: canApply,   
      callback: li =>  {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWNG.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.IGNORE_TB)
        OpposedWNG.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    },
    {
      name: "Apply Damage (Ignore TB and AP)",
      icon: '<i class="fas fa-skull-crossbones"></i>',
      condition: canApply,   
      callback: li =>  {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWNG.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.IGNORE_ALL)
        OpposedWNG.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    })
  })