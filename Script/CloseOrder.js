﻿
function closeOrder() {
//  TestedApps.Orders.Close()
  Aliases.Orders.MainForm.MainMenu.Click("File|Exit");
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
  Aliases.Orders.dlgConfirmSaveAs.Confirm_Save_As.CtrlNotifySink.btnYes.ClickButton();
   
  }

module.exports.closeOrder= CloseOrder