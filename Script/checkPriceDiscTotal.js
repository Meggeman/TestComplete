var open_order = require("open_order");


function checkPriceDiscTotal()
{
  let field =Aliases.Orders.OrderForm.Group;
  let v=Project.Variables;
  field.Price.SetText(v.PricePerUnit);
  aqObject.CheckProperty(field.Price, "wText", cmpEqual, v.PricePerUnit);
  field.Discount.SetText(v.Discount);
  aqObject.CheckProperty(field.Discount, "wText", cmpEqual, v.Discount);
   Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText(v.Total);
//  filed.groupBox1.Total.wText.SetText(v.Total);
//Aliases.Orders.OrderForm.Group.groupBox1.Total.WndCaption.SetText(v.Total);
  aqObject.CheckProperty(field.groupBox1.Total, "wText", cmpEqual, v.Total);
   
  
}


