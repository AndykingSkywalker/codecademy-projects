const menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[]
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  }, 
  set mains(mains) {
    this._courses.mains = mains;
  }, 
  set desserts(desserts) {
    this._courses.desserts = desserts;
  }, 
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.deserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
     }; return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  }, 
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total is £${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'garlic mushrooms', 3.95);
menu.addDishToCourse('appetizers', 'bruschetta', 3.50);
menu.addDishToCourse('appetizers', 'meatballs', 3.00);

menu.addDishToCourse('mains', 'pizza', 6.95);
menu.addDishToCourse('mains', 'spaghetti bolognese', 5.89);
menu.addDishToCourse('mains', 'calzone', 8.00);

menu.addDishToCourse('desserts', 'gelado', 2.69);
menu.addDishToCourse('desserts', 'cake', 2.85);
menu.addDishToCourse('desserts', 'coffee', 2.00);

const meal = menu.generateRandomMeal();
console.log(meal);

 