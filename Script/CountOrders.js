function CountOrders() {
  var form = Aliases.Orders.MainForm.OrdersView;
  var orderCount = form.wItemCount;
  Log.Message("Total Orders: " + orderCount);
  return orderCount;
}

module.exports = CountOrders;

