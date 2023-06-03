function CheckBtn(){
TestedApps.Orders.Run(1)

 Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
aqObject.CheckProperty(Aliases.Orders.OrderForm, "Enabled", cmpEqual, true);
aqObject.CheckProperty(Aliases.Orders.OrderForm, "Visible", cmpEqual, true);
aqObject.CheckProperty(Aliases.Orders.OrderForm, "VisibleOnScreen", cmpEqual, true);
aqObject.CheckProperty(Aliases.Orders.OrderForm, "WndCaption", cmpEqual, "Order");
}

module.exports.CheckBtn=new CheckBtn()

