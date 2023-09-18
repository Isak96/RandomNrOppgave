function myFunction() {
    idArray = new Array()
    idArray [1] = "Monday"
    idArray [2] = "Tuesday"
    idArray [3] = "Wednesday"
    idArray [4] = "Thursday"
    idArray [5] = "Friday"
    idArray [6] = "Saturday"
    idArray [7] = "Sunday"
  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*7);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
  }