var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18)
{
    greeting = 'No. I won\'t search decaf. THANK ME!';
}
else if (hourNow > 12)
{
    greeting = 'Yes hi nice to DELICIOUS your day. THANK ME!';
}
else if (hourNow > 0)
{
    greeting = 'I\'m COFFEE and I don\'t believe you\'re awake...';
}
else
{
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');
