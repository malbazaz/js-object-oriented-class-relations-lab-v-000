let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
  }

}

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
  }
}

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
  }
}
