
function temperatureBug()
{
    var num = document.project1.input1.value;


    if (num > 9939)
    {
        document.getElementById('weather').src = "img/sun.jpg";
        return  "How are you writing this. You are LITERALLY on the SUN.";
    }
    if (num == 30)
    {
        document.getElementById('weather').src = "img/winter.jpg";
        return "Welcome to Chicago's Spring. :)";
    }
    if (num < -455)
    {
        document.getElementById('weather').src = "img/space.jpg";
        return "That's COLDER than space. Go get a blanket!! Or a fire!";
    }
    if (num < -19)
    {
        document.getElementById('weather').src = "img/antarctica.jpg";
        return "Your season is Winter. If you live in Antarctica!";

    }
    if (num > 85)
    {
        document.getElementById('weather').src = "img/beach.jpg";
        return "Summer";
    }
    if (num > 40)
    {
        document.getElementById('weather').src = "img/spring.jpg";
        return "Your season is Spring";
    }
    if (num > -20)
    {
        document.getElementById('weather').src = "img/winter.jpg";
        return "Your season is Winter";
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


