// function plus(quantity) {
//   // Get the field name
//   fieldName = quantity;
//   // Get its current value
//   var currentVal = parseInt($("input[name=" + fieldName + "]").val());
//   // If is not undefined
//   if (!isNaN(currentVal)) {
//     // Increment
//     $("input[name=" + fieldName + "]").val(currentVal + 1);
//   } else {
//     // Otherwise put a 0 there
//     $("input[name=" + fieldName + "]").val(0);
//   }
//
//   //這邊只要有按增減就會執行
//   calculateTotal(fieldName);
// }
//
// function minus(quantity) {
//   // Get the field name
//   fieldName = quantity;
//   // Get its current value
//   var currentVal = parseInt($("input[name=" + fieldName + "]").val());
//   // If it isn't undefined or its greater than 0
//   if (!isNaN(currentVal) && currentVal > 0) {
//     // Decrement one
//     $("input[name=" + fieldName + "]").val(currentVal - 1);
//   } else {
//     // Otherwise put a 0 there
//     $("input[name=" + fieldName + "]").val(0);
//   }
//
//   //這邊只要有按增減就會執行
//   calculateTotal(fieldName);
//   console.log(fieldName);
// }
//
// //先放這裡一開網頁就更新總價錢
// //現在改成按了才會知道是更新哪邊的假錢所以一開始不會更新
// calculateTotal();
//
// function calculateTotal(fieldName) {
//   //因為在增減按鈕的fieldName是VAR所以還可以傳遞過來
//   console.log(fieldName);
//   theNum = `${fieldName}`.match(/\d+/)[0];
//   console.log(theNum);
//   //第一項產品總價會即時更新Start
//   //把單價的錢符號拿掉
//   getNum = $(`#price${theNum}`).html().replace("$", "");
//   //單價轉成數字
//   toInt = parseInt(getNum);
//   //讀取目前購買的數量
//   pro1Qty = $(`#quantity${theNum}`).prop("value");
//   //把單價乘以數量
//   $(`#totalPrice${theNum}`).text("$" + getNum * pro1Qty);
//
//   //第一項產品總價會即時更新End
// }
