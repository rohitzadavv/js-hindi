const accountId = 3456789;
console.log(accountId);
//  accountId = 2222222; NOt allowed
let accountEmail = "rohityadav@gmail.com";
var accountPassword = "12345";
/*  prefer to  not used var  because of issue regarding functional scope and  block scope*/
accountCity="jaipur"; /* it is also possible without variable name beause bad practice */
accountCity= "bangluru";
console.table([accountEmail,accountId,accountPassword,accountCity]) // print value in the form of tables
