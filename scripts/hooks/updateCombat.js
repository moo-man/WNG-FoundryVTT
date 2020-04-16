/**
 * Displays round/turn summaries as combat turns go by, also focuses on token whose turn is starting
 */
Hooks.on("updateCombat", (combat) => {
    if (game.user.isGM && combat.data.round != 0 && combat.turns && combat.data.active)
    {
      let turn = combat.turns.find(t => t.tokenId == combat.current.tokenId)
  
      if (game.settings.get("wng", "displayRoundSummary") && combat.current.turn == 0 && combat.current.round != 1)
        WNG_Utility.displayRoundSummary(combat)

      if (game.settings.get("wng", "statusOnTurnStart"))
        WNG_Utility.displayStatus(turn.token._id, combat.data.round);
  
      if (game.settings.get("wng", "focusOnTurnStart"))
      {
        canvas.tokens.get(turn.token._id).control();
        canvas.tokens.cycleTokens(1, true);  
      }
    }
  })