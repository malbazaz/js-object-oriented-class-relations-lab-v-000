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
    return passengers.filter(pass =>{
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

}

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
}
