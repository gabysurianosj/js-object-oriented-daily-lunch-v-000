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

meals(){
    return this.deliveries().reduce((list, delivery) => {
      list.push(delivery.meal())
      return [... new Set(list)]
    },[])
  }
};

class Customer {
  constructor(name, neighborhoodIds) {
    this.Id = ++customerIds
    this.name = name
    this.neighborhoodIds = neighborhoodIds
    store.customers.push(this)
  }

  deliveries()
  {return store.deliveries.filter(delivery => delivery.customerId === this.id)}

  meals()
  {return this.deliveries().map(delivery => delivery.meal())}

  totalSpent()
  {return this.meals().reduce((total, meal) => (total += meal.price), 0)}
};

class Meal {
  constructor(title, price){
    this.id = ++mealIds
    this.title = title
    this.price = price
    store.meals.push(this)
  }
}

}
