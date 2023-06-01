function QtyType(){
  
Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit.SetText("A");
aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "Enabled", cmpEqual, true);
//aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "wText", cmpEqual, "1");
aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "wText", cmpNotContains, "1");

 
}