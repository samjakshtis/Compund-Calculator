function compute()
{
    var principal = document.getElementById("Principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("year").value;
    var compound = document.getElementById("num_compound").value
    var interest = principal * (1 + (rate/100)/compound)**(years*compound);
    var year = new Date().getFullYear()+parseInt(years);
    if (principal == "" || principal == 0) {
        alert("Not a Valid Input for principal");
        principal.focus();
        return false;
    }
    var initial_amount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    document.getElementById("result").innerHTML="If you deposit "+ "<span style='text-decoration: underline'>" + initial_amount.format(principal) + "</span>"+" at an interest rate of "+ "<span style='text-decoration: underline'>" +rate + "</span>"+"% You will receive an amount of "+"<span style='text-decoration: underline'>" + initial_amount.format(interest) + "</span>"+" in the year "+"<span style='text-decoration: underline'>" + year + "</span>"+"\<br\>"
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function updateYears() 
{
    var rateval = document.getElementById("year").value;
    document.getElementById("year_val").innerText=rateval+" "+"Years";
}

function updateCompound() 
{
    var compoundval = document.getElementById("num_compound").value;
    document.getElementById("comp_val").innerText=compoundval+" "+"Times";
}

