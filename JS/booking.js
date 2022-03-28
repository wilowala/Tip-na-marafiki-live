const destination = document.querySelector("#travel");
const cost = document.querySelector("#cost");

destination.addEventListener("submit", showCost);
function showCost(ev) {
    ev.preventDefault();

    let buddies = document.querySelector(".number").value;
    let departure = document.querySelector(".depature").value;

    if (buddies === "") {
        alert("Please enter the number of passangers")
    }
    if (departure === "") {
        alert("Please select you depature time")
    }
    function randomPriceRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (buddies !=="" && departure !=="") {
        return cost.innerHTML =`Trip booked! Pay Ksh.${randomPriceRange(250,600)}`;
    }
    
}