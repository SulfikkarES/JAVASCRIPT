const btnUp = document.getElementById("btn-up");
const btnDown = document.getElementById("btn-down");

const numberBoxes = document.querySelectorAll("input");
console.log(numberBoxes);

const arr = [];

function PutNumbersIntoArray()
{
    let counter = 0;

    numberBoxes.forEach(item => {

        arr[counter] = item.value;
        counter++;
    })
}

function DisplayNumbersFromArray()
{
    let counter = 0;

    numberBoxes.forEach(item => {

        item.value = arr[counter];
        counter++;
    })
}

function ShiftArrayForward()
{
    let i;
    const size = arr.length;
    let lastElement = arr[size - 1];

    for (i = size - 1; i > 0 ; i--)
    {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;
}

function ShiftArrayBackward()
{
    let i;
    const size = arr.length;
    let firstElement = arr[0];

    for (i = 0; i < size-1 ; i++)
    {
        arr[i] = arr[i + 1];
    }

    arr[size - 1] = firstElement;
}

btnUp.addEventListener('click', 
    PutNumbersIntoArray();
    ShiftArrayBackward();
    DisplayNumbersFromArray();
);

btnDown.addEventListener('click' , 
    PutNumbersIntoArray();
    ShiftArrayForward();
    DisplayNumbersFromArray();
)