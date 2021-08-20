//Get the starting and ending values from the page
//Validate to make sure all numbers are integers
function getValues(){
    
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        
        //Call generateNumber()
        let numbers = generateNumbers(startValue, endValue);

        //Call displaynumbers()
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }

}  

//Generate numbers from the startValue to the endValue
//Store all numbers in an array
function generateNumbers(sValue, eValue){
    
    let numbers = [];
    
    for(let index = sValue; index <= eValue; index++){
        
        numbers.push(index);
    }

    return numbers;
}

//Display the numbers and mark even numbers to make them bold
function displayNumbers(numbers){
    
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }

        templateRows += `<tr><td class = "${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}