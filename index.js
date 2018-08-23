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
      return pass.trip === this.trip;
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
    if (driver){
    this.driverId = driver.id;
    }
    if (passenger){
    this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }
  setDriver(driver){
    this.driverId = driver.id;
  }
  setPassenger(passenger){
    this.passengerId = passenger.id;
  }
  driver(){
    return store.drivers.filter(driver=>{
      return driver.id === this.driverId;
    })
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
