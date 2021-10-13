// const dog = {
//   name: 'dog',
//   voice: 'woof',
//   say: function () {
//     console.log(this.name, 'goes', this.voice);
//   }
// }

// const cat = {
//   name: 'cat',
//   voice: 'woof',
//   say: function () {
//     console.log(this.name, 'goes', this.voice);
//   }
// }

// dog.say()
// cat.say()

// давайте вынесем функцию say в отдельный обьект

// 1. Object.setPrototypeOf

//Warning

// const animal = {
//   say: function () {
//     console.log(this.name, 'goes', this.voice);
//   }
// }

// const dog = {
//   name: 'dog',
//   voice: 'woof',
// }

// Object.setPrototypeOf(dog, animal) // теперь animal это прототип объекта dog (vs создаетм связь dog и animal)

// const cat = {
//   name: 'cat',
//   voice: 'woof',
// }

// Object.setPrototypeOf(cat, animal)

// dog.say()
// cat.say()


//Более удобный вариант 
// 2. Object.create


// const animal = {
//   say: function () {
//     console.log(this.name, 'goes', this.voice);
//   }
// }

// const dog = Object.create(animal); // dog это объкт прототипом которого является Animal
// dog.name = 'Dog'
// dog.voice = 'woof'

//.Object.setPrototypeOf(dog, animal) // теперь animal это прототип объекта dog (vs создаетм связь dog и animal)

// dog.say()

// А теперь мы вынесем логику создания животного и установку прототипной связи в отдельную функцию

// const animal = {
//   say: function () {
//     console.log(this.name, 'goes', this.voice);
//   }
// }

// function createAnimal(name, voice) {
//   const result = Object.create(animal);
//   result.name = name;
//   result.voice = voice;
//   return result;
// }

// const dog = createAnimal('Dog', 'woof')
// const cat = createAnimal('Cat', 'meow')

// dog.say();
// cat.say();



// 3. Using new


//функцию конструктор принято называть с большой буквы

function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function () {
  console.log(this.name, 'goes', this.voice);
}

Animal.prototype.sayHi = function () {
  console.log(this.name, 'say Hi');
}

const dog = new Animal('Dog', 'woof')
const cat = new Animal('Cat', 'meow')

dog.say()
cat.say()

dog.sayHi()
cat.sayHi()