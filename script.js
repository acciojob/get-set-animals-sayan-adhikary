//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get(){
		return this.species;
	}
	makeSound(){
		return `The ${this.species} makes a sound`;
	}
}

class Dog extends Animal {
	constructor(abc){
		super(abc);
	}
	bark(){
		return `woof`;
	}
}

class Cat extends Animal {
	constructor(abc){
		super(abc);
	}
	purr(){
		return `purr`;
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
