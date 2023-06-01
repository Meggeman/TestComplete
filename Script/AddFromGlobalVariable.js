let order = Aliases.Orders;
let mainForm = Aliases.Orders.MainForm;
let orderForm = Aliases.Orders.OrderForm;
let groupBox = orderForm.Group;
let customer = groupBox.Customer;
let city = groupBox.City;
let street = groupBox.Street;
let zip = groupBox.Zip;
let state = groupBox.State;
let cardNum = groupBox.CardNo;

function open(){TestedApps.Orders.Run(1)}

function AddFromGlobalVariable(){
TestedApps.Orders.Run(1)
let orders =Aliases.Orders;
orders.MainForm.MainMenu.Click("Orders|New order...");


orderForm.Group.Customer.SetText(Project.Variables.CustomerName)

aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer,"wText",cmpEqual, Project.Variables.CustomerName)

orderForm.Group.Street.Keys(Project.Variables.Street);
orderForm.Group.City.Keys(Project.Variables.City);
orderForm.Group.State.Keys(Project.Variables.State);
orderForm.Group.Zip.Keys(Project.Variables.Zip);
orderForm.Group.MasterCard.Click();
aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "Enabled", cmpEqual, true);
aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "WndCaption", cmpEqual, "MasterCard");
orderForm.Group.CardNo.Keys(Project.Variables.CardNo);
aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.CardNo, "wText", cmpEqual, "1234567891");
order.OrderForm.ButtonOK.Click();


  let mainForm = orders.MainForm;
  mainForm.OrdersView.ClickItem(0, "MyMoney");
  mainForm.ToolBar.ClickItem(6, false);
  orders.dlgConfirmation.btnYes.ClickButton();

  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 0);
 
  
  Aliases.Orders.MainForm.MainMenu.Click("File|Exit");
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
  Aliases.Orders.dlgConfirmSaveAs.Confirm_Save_As.CtrlNotifySink.btnYes.ClickButton();
}


module.exports.AddFromGlobalVariables=AddFromGlobalVariable