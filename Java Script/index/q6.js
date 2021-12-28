document.getElementById("btnclr").addEventListener("click",rgbprview);

function rgbprview()
{
    let rvalue = document.getElementById("htone").value; //prompt("Enter value for Red");
    let gvalue = document.getElementById("mttwo").value;//prompt("Enter value for Green");
    let bvalue = document.getElementById("stthree").value;//prompt("Enter value for Blue")



    let rgbString = "rgb(" + rvalue  + "," + gvalue + "," +bvalue + ")";

    alert(rgbString);
    document.getElementById("clrred").innerHTML =rgbString;
    document.getElementById("clrred").style.background=rgbString
}