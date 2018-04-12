var json = [{r : 4, c : 4, values : [["milk", "coke", "wine", "whiskey"], ["rugby", "volleyball",
 "ballet", "basketball"], ["graduation", "feathered", "cowboy", "baseball"], ["frog", "elephant", 
"cat", "dog"]], clues : ["The drinker of milk plays basketball", "The drinker of coke has a baseball cap",
"The drinker of whiskey plays volleyball", "The one that has a feathered hat plays basketball", "The one that has a frog doesnt have a cowboy hat", 
"The one that has a graduation hat doesnt drink wine", "The one that has a frog plays rugby", "The one that has a graduation hat doesnt have an elephant",
"The one that has a dog dances ballet", "The one that has a graduation hat plays volleyball", "The one that has an elephant doesnt have a cowboy hat",
"The one that has a dog also has a cowboy hat", "The player of volleyball doesnt drink coke", "The one that has a cowboy hat doesnt drink coke",
"The one that has a frog doesnt drink milk", "The one that has a cowboy hat drinks wine"]}];
loadGame();

function loadGame(){
	var random = Math.floor(Math.random(json.length));
	var obj = json[random];
	form(obj);
}