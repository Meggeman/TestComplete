
class checkForm{
  constructor(){
    this.orderForm=Aliases.Orders.OrderForm
  
  }
  checkVisibility(){
    if (!this.orderForm.VisibleOnScreen){
      Log.Error("Window not visible")
          }
          aqObject.CheckProperty(this.orderForm, "Enabled", cmpEqual, true);
  }
}

module.exports.checkForm=new checkForm()