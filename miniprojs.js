
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

        var action = document.project3.input1.value.toLowerCase();
        var time = Number(document.project3.input2.value);

        if (action == 'swimming')
        {
            return 11 * time;
        }
        if (action == 'jogging')
        {
            return 7 * time;
        }
        if (action == 'tv')
        {
            return 2 * time;
        }
        if (action == 'running')
        {
            return 10 * time;
        }
        else
        {
            return "Not a valid action"
        }
}

