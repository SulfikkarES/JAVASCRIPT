function clear(){
document.getElementById("result").value = "";
}

function add()
{
    console.log("Addition");

    var firstnNmber = parseInt(document.getElementById("numone").value);
    var secondNumber = parseInt(document.getElementById("numtwo").value);
    console.log(firstnNmber);
    console.log(secondNumber);

    var sum = firstnNmber + secondNumber;
    console.log(sum);
    document.getElementById("result").innerHTML = sum;

    

}

function substraction()
{
    var firstnNmber = parseInt(document.getElementById("numone").value);
    var secondNumber = parseInt(document.getElementById("numtwo").value);

    var sub = firstnNmber - secondNumber;
    document.getElementById("result").innerHTML = sub;


}

function division()
{
    console.log("hello");
    var firstnNmber = parseInt(document.getElementById("numone").value);
    var secondNumber = parseInt(document.getElementById("numtwo").value);
    console.log(firstnNmber);
    console.log(secondNumber);

    var div = firstnNmber / secondNumber;
    document.getElementById("result").innerHTML = div;

}

function mutiplication()
{
    var firstnNmber = parseInt(document.getElementById("numone").value);
    var secondNumber = parseInt(document.getElementById("numtwo").value);

    var mul = firstnNmber * secondNumber;
    document.getElementById("result").innerHTML = mul;
}

