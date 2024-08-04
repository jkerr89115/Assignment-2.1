function play()
{
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    document.getElementById("die1res").innerHTML = "Die 1 =" + die1;
    document.getElementById("die2res").innerHTML = "Die 2 =" + die2;

    var sum = die1 + die2;
    document.getElementById("sumres").innerHTML = "Sum = " + sum;

    if (sum ==7 || sum ==11)  // || = or
    {
    document.getElementById("finalres").innerHTML = "CRAPS YOU LOSE!!!";
    }
    else if (die1 == die2 && die1 % 2 == 0) //&& = and, x %2 ==0 means even
    {
    document.getElementById("finalres").innerHTML = "Even Doubles - YOU WIN!!!";
    }
    else
    {
    document.getElementById("finalres").innerHTML = "Push";
    }
}
