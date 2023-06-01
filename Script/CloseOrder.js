class Close{
 closeOrder() {
  let orders = Aliases.Orders;
  orders.OrderForm.ButtonCancel.ClickButton();
  orders.MainForm.Close();
   
  }
  }

module.exports.Close= new Close()


