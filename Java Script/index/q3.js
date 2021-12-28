function myFunction() {
  const inpObj = document.getElementById("digit");
  if (!inpObj.checkValidity()) {
    document.getElementById("word").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("word").innerHTML = "Input OK";
  } 
}
function convert()
{
    var number = parseInt(document.getElementById("digit").value);
    switch(number)
    {
      case 1: 
          document.write("One");
          break;
      case 2:
            document.write("Two");
            break;
      case 3:
            document.write("Three");
            break;
      case 4: 
          document.write("Four");
          break;
      case 5: 
          document.write("Five");
          break;
      case 6: 
          document.write("Six");
          break;
      case 7: 
          document.write("Seven");
          break;
      case 8: 
          document.write("Eight");
          break;
      case 9: 
          document.write("Nine");
          break;
      case 0: 
          document.write("Zero");
          break;
      default:
          document.write("invalid");
          break;

    }

    document.getElementById("word").innerHTML = div;

}