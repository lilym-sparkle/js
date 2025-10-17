const accountId = 144556
let accountEmail = "lylix@goggle.com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "212546"
accountCity = "pune"
//accountId = 4

/*Prefer not to use var 
because of the issuse in block scope and functional scope */ 

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
