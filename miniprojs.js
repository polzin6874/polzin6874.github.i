
function temperatureBug()
{
    var num = document.project1.input1.value;


    if (num > 9939)
    {
        return "How are you writing this. You are LITERALLY on the SUN."
    }
    if (num == 30)
    {
        return "Welcome to Chicago's Spring. :)"
    }
    if (num < -455)
    {
        return "That's COLDER than space. Go get a blanket!! Or a fire!"
    }
    if (num < -19)
    {
        return "Your season is Winter. If you live in Antarctica!"

    }
    if (num > 85)
    {
        return "Summer"
    }
    if (num > 40)
    {
        return "Your season is Spring"
    }
    if (num > -20)
    {
        return "Your season is Winter"
    }



}

function calorieCounter()
{

        var activity = document.getElementById('workList').value;
        var time = Number(document.project3.input2.value);

        
        if (activity == "swimming")
        {
            return 11 * time;
        }

        else if(activity == "jogging")
        {
            return 7 * time;
        }

    else if(activity == "tv")
        {
            return 2 * time;
        }

        else if(activity == "running")
        {
            return 10 * time;
        }

else if(activity == "programming")
        {
            return 5 * time;
        }

         else if (activity == "sleeping")
        {
            return 63 * time;
        }

else if(activity == "tennis")
        {
            return 50 * time;
        }

}

function xToY()
{
        num = Number(document.project4.input1.value);
        base = Number(document.project4.input2.value);
        baseEnd = Number(document.project4.input3.value);
        endNum="";
        tenNum = 0;
        numLength = num.toString().length

        /*
        hexConvert =

         */

        while (numLength > 0)

        {
            var denominator = Math.pow(10,(numLength-1));
            var currentDigit = Math.floor(num/denominator);
            tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
            num = num%denominator;
            numLength--;
        }

        while (tenNum > 0)
        {
            endNum = tenNum%baseEnd + endNum ;
            tenNum = Math.floor(tenNum/baseEnd);
        }

    return endNum;
}

