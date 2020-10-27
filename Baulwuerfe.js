var fr = new FileReader;
var karte0 = document.getElementById("karte0")
var karte0ByLine = fr.readAsText(karte0);
console.log(karte0ByLine);