// get = bind an object property to a function when that property is accessed
// benefits of getter is increase data security and
// dev. can perform some additional logic when accessing property directly

// set = bind an object property to a function when that proerty is assigned a value      

class Car{

  constructor(power){
    this._power = power;  // (property) Car.power : any // _power is a protected property
    this._fuel = 25;      // (property) Car.fuel : any   // _fuel is a protected property
  };

  get power(){ // (getter) Car.power: string
    return `${this._power} hp`;
  };

  get fuel(){ // (getter) Car.fuel: string
    // this line will take the fuel value and calculate the percentage left
    return `${this._fuel}L (${this._fuel / 50 * 100}%)`;
  }

  set fuel(volume){ // (setter) Car.fuel: string
    
    if(volume > 50){ // if volume is more than 50, print 50
      volume = 50;
    }
    else if (volume < 0){ // if volume is less than 0, print 0
      volume = 0;
    }

    this._fuel = volume //set the fuel volume 
  }
}

const car = new Car(390);

car.fuel = 100000 // will return 0L because of the negative value
                   // car.fuel can be reset since it use setter method

car.power = 400    // will not return 400hp because of the getter method (this._power)

console.log(car.power); // 390hp
console.log(car.fuel);  // 0L (0%)

/*
this._power is a private or protected property, indicated by the 
underscore prefix, and is set within the constructor of the Car class. 
It is intended to be used within the class itself or by subclasses but 
not directly accessible from outside the class.
*/

/* getter is read only, while setter is mean to be changed */