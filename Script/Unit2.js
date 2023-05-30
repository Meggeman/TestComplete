function Test1()
{
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(44, 8);
  textBox.SetText("123");
  textBox = groupBox.Street;
  textBox.Click(46, 8);
  textBox.SetText("123");
  textBox = groupBox.State;
  textBox.Click(59, 13);
  textBox.SetText("123");
  textBox = groupBox.City;
  textBox.Click(47, 10);
  textBox.SetText("123");
  textBox = groupBox.Zip;
  textBox.Click(52, 10);
  textBox.SetText("123");
  groupBox.MasterCard.ClickButton();
  textBox = groupBox.CardNo;
  textBox.Click(53, 9);
  textBox.SetText("31");
  orderForm.ButtonOK.ClickButton();
}