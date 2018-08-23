let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers:[],passengers:[], trips:[]}

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(trip =>{
      return trip.driverId === this.id;
    })
  }
  passengers(){
    return store.passengers.filter(pass =>{
      return pass.trip.id === this.trip.id;
    })
  }
}

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(trip=>{
      return this.id === trip.passengerId
    })
  }
  drivers(){
    return store.drivers.filter(driver=>{
      return this.trip === driver.trip;
    })
  }
}

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId;
    })
  }
  passenger(){
    return store.passengers.find(function(pass){
      return pass.id === this.passengerId;
    })
  }

}
