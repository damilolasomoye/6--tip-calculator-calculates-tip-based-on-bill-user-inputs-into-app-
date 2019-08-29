const dateElement = document.getElementById("date");
const clear = document.querySelector(".clear");

//show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
console.log(today);
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

let tipper = 
{
    bill: 0,
    tip:0,
    answer: 0,
    total: 0
}

function tip_calculator() 
{

    document.getElementById('results').innerHTML = 'Your Tip is: ';   // indirectly clears the screen 
    document.getElementById('tot_results').innerHTML = 'Your total bill is: ';   // indirectly clears the screen 
    //declaring variables such as bill which is the initial amount and also tip which the percentage of the initial amount
    let bill = document.getElementById('bill').value;       //obtains value using id   //remember to use let since the variable changes
    let tip = document.getElementById('tip').value;   //obtains value using id   //remember to use let since the variable changes
    
    // displays the keyed in values to the screen for inspection
    console.log(bill);
    console.log(tip);

    // calculates the amount that should be added based on the keyed in values as well as the total amount the user is going to pay
    let answer = bill * (tip/100); 
    console.log(`the calculated tip is ${answer}`); 
    let total = Number(bill) + answer;
    console.log(`the final total is ${total}`);

    // relays the values to the screen
    document.getElementById('results').append(answer);      //appends value using id
    document.getElementById('tot_results').append(total);


    tipper = 
    {
        bill: bill,
        tip: tip,
        answer: answer,
        total: total
    }   
    localStorage.setItem("Tipper", JSON.stringify(tipper));

}

// clear the local storage
    clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});