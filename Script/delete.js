function Test1()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.OrdersView.ClickItem(0, "MyMoney");
  mainForm.ToolBar.ClickItem(6, false);
  orders.dlgConfirmation.btnYes.ClickButton();
}