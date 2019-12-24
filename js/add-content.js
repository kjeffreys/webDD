var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18)
{
    greeting = 'Yes hi nice to DELICIOUS your day.';
}
else if (hourNow > 12)
{
    greeting = 'Oh hi! We see your depravity. Order up!';
}
else if (hourNow > 0)
{
    greeting = 'Yes hi nice to delicious you!';
}
else
{
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');
