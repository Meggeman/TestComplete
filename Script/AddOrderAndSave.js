﻿function AddOrderAndSave()
{
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
 
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
  
  Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit.Drag(17, 8, -18, 0);
  
  Aliases.Orders.OrderForm.Group.Quantity.wValue = 2;

  Aliases.Orders.OrderForm.Group.Price.Drag(26, 12, -34, -1);
 
  Aliases.Orders.OrderForm.Group.Price.SetText("$50");
 
  Aliases.Orders.OrderForm.Group.Click(398, 68);
 
  Aliases.Orders.OrderForm.Group.Discount.Drag(22, 15, -39, 0);
 
  Aliases.Orders.OrderForm.Group.Discount.SetText("5%");
 
  Aliases.Orders.OrderForm.Group.groupBox1.Total.Drag(37, 13, -86, -5);

  Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText("125");
  
  Aliases.Orders.OrderForm.Group.DblClick(122, 127);

  Aliases.Orders.OrderForm.Group.Date.wDate = "06/02/2005";
 
  Aliases.Orders.OrderForm.Group.Date.Keys("[Tab]");
 
  Aliases.Orders.OrderForm.Group.Date.wDate = "07/02/2020";
  
  Aliases.Orders.OrderForm.Group.Customer.Click(74, 13);
  
  Aliases.Orders.OrderForm.Group.Customer.SetText("Test");

  Aliases.Orders.OrderForm.Group.Street.Click(95, 11);
  
  Aliases.Orders.OrderForm.Group.Street.SetText("Street");
  
  Aliases.Orders.OrderForm.Group.State.Click(57, 13);
 
  Aliases.Orders.OrderForm.Group.State.SetText("State");
  
  Aliases.Orders.OrderForm.Group.City.Click(64, 10);
  
  Aliases.Orders.OrderForm.Group.City.SetText("NY");
 
  Aliases.Orders.OrderForm.Group.Zip.Click(72, 14);
  
  Aliases.Orders.OrderForm.Group.Zip.SetText("0101");
  
  Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
 
  Aliases.Orders.OrderForm.Group.CardNo.Click(158, 5);
  
  Aliases.Orders.OrderForm.Group.CardNo.SetText("1232123212545");
 
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}


module.exports.AddOrderAndSave= AddOrderAndSave