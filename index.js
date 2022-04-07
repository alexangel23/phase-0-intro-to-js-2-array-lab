var cats = ["Milo", "Otis", "Garfield" ];

beforeEach(function () 
{
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(name)
{
    cats.push("Ralph");
}

function destructivelyPrependCat(name)
{
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat()
{
    cats.pop();
}

function destructivelyRemoveFirstCat()
{
    cats.shift();
}

function appendCat(name)
{
    var newArray = cats.slice();
    newArray.push(name);
    return newArray;
}

function prependCat(name)
{
    var newArray = cats.slice(0);
    newArray.unshift(name);
    return newArray;
}

function removeLastCat()
{
    var newArray = cats.slice(0,-1);
    return newArray;
}

function removeFirstCat()
{
    var newArray = cats.slice(1);
    return newArray;
}