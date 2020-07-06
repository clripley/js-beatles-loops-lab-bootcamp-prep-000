// add solution here
  var muscians = ["John Lennon", "Paul McCartney", "Ringo Starr"];
  
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArray = []; 
  for(var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
} 
  var facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function johnLennonfacts() {
   var newArray = [];
  while(i < facts.length){
    newArray.push(facts[i] + "!!!")
  }
}