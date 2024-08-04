function play()//defines the function through JavaScript for play()
{
    var die1 = Math.ceil(Math.random() * 6);//gives die 1 value
    var die2 = Math.ceil(Math.random() * 6);//gives die 2 value

    document.getElementById("die1res").innerHTML = "Die 1 =" + die1;//links JS ID to HTML ID
    document.getElementById("die2res").innerHTML = "Die 2 =" + die2;//links JS ID to HTML ID

    var sum = die1 + die2;
    document.getElementById("sumres").innerHTML = "Sum = " + sum;//links JS ID to HTML ID

    if (sum ==7 || sum ==11)//defines rules for outcome of function
    {
    document.getElementById("finalres").innerHTML = "CRAPS YOU LOSE!!!";//links JS ID to HTML ID
    }
    else if (die1 == die2 && die1 % 2 == 0) //defines rules for outcome of function
    {
    document.getElementById("finalres").innerHTML = "Even Doubles - YOU WIN!!!";//links JS ID to HTML ID
    }
    else
    {
    document.getElementById("finalres").innerHTML = "Push";//links JS ID to HTML ID
    }
}
