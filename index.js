/*
const superHeroes = ["Catwoman", "Storm", "Jessica Jones"]
console.log(superHeroes.push("Wonder woman")) //adds to the end
console.log(superHeroes)
console.log(superHeroes.unshift("Johny KIng")) // adds to the front
console.log(superHeroes)

const cartoons = ["Batman", "Superman", "Spiderman"]
console.log(cartoons)

const combineSuperHeroesAndCartoons = ["These are the great legends:", ...superHeroes, ...cartoons] //combines arrays using spread operator
console.log(combineSuperHeroesAndCartoons)
*/
/*
const days =  ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
console.log(days)
console.log(days.pop())
console.log("Six days:", days, ": Shall thou labour.")
console.log(days.shift())
console.log("Five days:", days, ": The world has put for labour.")
*/
/*
const days =  ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
console.log(days.slice(2,5))
console.log(days.slice(0, days.length -2))
console.log(days.slice(2, -1))
*/
/*
const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
]
  
console.log(cards.splice(2, 1, "Ace of Clubs"))
  // => ["Nine of Clubs"]
  
console.log(cards)
console.log(cards.splice(2, 0, "two of Clubs", "Ace of Diamonds", "Queen of Hearts"))

console.log(cards)

cards[2] = "King of Clubs" //replace at index 2
console.log(cards)
*/

const menu = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
]
  
const newMenu = [
    ...menu.slice(0, 1),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu.slice(3),
]
  
console.log(menu)
// => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]
  
console.log(newMenu)
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]








