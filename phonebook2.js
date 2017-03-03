var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};
// makes key a variable
var personName = 'Elizabeth';
// adds Kareem and prints
phonebookDict.Kareem = "1-800-6767";
console.log(phonebookDict);
// deletes alice and prints
delete phonebookDict.Alice;
console.log(phonebookDict);
// changes Bob's number and prints
phonebookDict.Bob = "325802750543";
console.log(phonebookDict);
// prints elizabeth
console.log(phonebookDict[personName]);
// prints all the entries with a loop
for (var i in phonebookDict) {
  var number = phonebookDict[i];
  console.log(i + ": " + number);
}
