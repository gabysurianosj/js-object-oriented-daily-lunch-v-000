// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodIds = 0
let customerIds = 0
let mealIds = 0
let deliveryIds = 0

class Neighborhood {
  constructor(name){
    this.Id = ++neighborhoodIds
    this.name = name
    store.neighborhoods.push(this)
  }

deliveries()
{return store.deliveries.filter(delivery => neighborhoodIds === this.id)}

customers()
{return store.customers.filter(customer => neighborhoodIds === this.id)}

}
