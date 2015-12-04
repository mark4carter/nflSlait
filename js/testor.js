var test1 = "test"
var passcode = "FEKAGN#A$GI$JO"
var encryptedA = Tea.encrypt(test1, passcode);

console.log("encrypted = " + encryptedA);

var decryptedA = Tea.decrypt(encryptedA, passcode);

console.log("decrypted = " + decryptedA);