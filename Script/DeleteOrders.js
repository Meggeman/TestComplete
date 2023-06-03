class DeleteOrder {
  constructor() {
    this.orderForm = Aliases.Orders.MainForm.OrdersView.wItemCount;
  }

  checkAndDeleteOrder() {
    while (this.orderForm > 0) {
      Aliases.Orders.MainForm.OrdersView.Click();
      Aliases.Orders.MainForm.OrdersView.ClickItem(0, "MyMoney");
      Aliases.Orders.MainForm.ToolBar.ClickItem(6, false);
      Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
      this.orderForm = Aliases.Orders.MainForm.OrdersView.wItemCount;
    }
  }
}

module.exports.DeleteOrder = new DeleteOrder();
