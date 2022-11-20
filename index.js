// Write your code here

class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.soup = soup 
        this.salad = salad
        this.drink = drink
    }
}
const newLunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')

class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert){
        this.soup = soup
        this.salad = salad
        this.entree = entree
        this.#dessert = dessert
    }
 }

 const newDinner = new Dinner ('consomme' , 'balsamic salad', 'filet mignon', 'cheesecake')
