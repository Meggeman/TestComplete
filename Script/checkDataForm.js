
class checkDataForm{
  constructor(){
this.window=Aliases.Orders.OrderForm.Group.Date
}

 DataForm()
{
  let dateTimePicker = Aliases.Orders.OrderForm.Group.Date;
  dateTimePicker.wDate = "5555-02-06";
  dateTimePicker.Keys("[Tab]");
  dateTimePicker.Click(81, 9);
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
 aqObject.CheckProperty(Aliases.Orders.dlgWarning.Static, "WndCaption", cmpEqual, "The specified date is not valid.\r\nThe date is changed to the current one.");
}

}

module.exports.checkDataForm= new checkDataForm()