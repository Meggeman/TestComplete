// Define the TestedApps section
function TestedApps()
{
  // Define the Orders application
  var OrdersApp = TestedApps.Orders;

  // Run the Orders application
  OrdersApp.Run();
}

// Function to open an order
function openOrder(orderId) {
  // Access the Orders application
  var ordersApp = TestedApps.Orders;

  // Perform the necessary steps to open an order
  // For example, if there is a button to open orders:
  ordersApp.MainWindow.OrdersButton.Click();

  // If there is an input field to enter the order ID:
  ordersApp.MainWindow.OrderIdInput.SetText(orderId);

  // If there is a button to confirm:
  ordersApp.MainWindow.ConfirmButton.Click();
}

// Function to add and save an order
function addOrderAndSave(orderDetails) {
  // Access the Orders application
  var ordersApp = TestedApps.Orders;

  // Perform the necessary steps to add and save an order
  // For example, if there is a button to add an order:
  ordersApp.MainWindow.AddOrderButton.Click();

  // If there are input fields to enter order details:
  ordersApp.MainWindow.OrderDetailsInput.SetText(orderDetails);

  // If there is a button to save the order:
  ordersApp.MainWindow.SaveOrderButton.Click();
}

// Function to close an order
function closeOrder() {
  // Access the Orders application
  var ordersApp = TestedApps.Orders;

  // Perform the necessary steps to close an order
  // For example, if there is a button to close the order:
  ordersApp.MainWindow.CloseOrderButton.Click();
}
