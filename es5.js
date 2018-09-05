



var animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
]

animalListing(animals, true);

function animalListing( animalArray, listFoods){
	if(listFoods===undefined){
		listFoods = true;
	}
	for(var animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
		var thisAnimal = animalArray[animalIndex];
		var name = thisAnimal.name;
		var height = thisAnimal.height;
		var weight = thisAnimal.weight;
		var type = thisAnimal.type;
		var foods = thisAnimal.top3Foods;
		var food1 = foods[0];
		var food2 = foods[1];
		var food3 = foods[2];
		var sentence = "Animal: "+name+" is a "+type+" and is "+height+" meters at "+weight+" kilograms";
		console.log(sentence);
		if(listFoods){
			var foodSentence = "   it likes to eat "+food1+", "+food2+", and "+food3;
		}
	}
}

function doubleNumber(number){
	return numner *2;
}

var doubleNumberES5 = function(number){
	return number *2;
}


//remove the function keyword
//add a far arrow => between the paramenter parens and the curly braces

var doubleNumberES6 = number => number *2;

//if there is only one parameter, you can remove the parenthesis 
//if the only thing the function does is return a value, you van remove the curly braces AND the return

var array = [1,2,3,4,5,6,7]
var doubleArray = array.map(doubleNumberES6)