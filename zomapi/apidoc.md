// page1

> (GET) List of all Cities
* http://localhost:9911/location

> (GET) List of all Restaurants
* http://localhost:9911/restaurants

> (GET) Restaurants wrt city
* http://localhost:9911/restaurants?stateId=2

> (GET) List of all meal Type
* http://localhost:9911/mealType

// page2
> (GET) Restaurants wrt to mealType
* http://localhost:9911/restaurants?mealId=2
* http://localhost:9911/restaurants?mealId=2&stateId=2

> (GET) filter wrt to mealType + cuisine
* http://localhost:9911/filters/3?cuisineId=4

> (GET) filter wrt to mealType + cost
* http://localhost:9911/filters/1?lcost=500&hcost=1000

> (GET) Sort on basis of price
* http://localhost:9911/filters/1?lcost=500&hcost=2000&sort=-1

> (GET) Pagination
* http://localhost:9911/filters/1?skip=6&limit=2


// Page3
* (GET) Details of the restaurant
>

* (GET) Menu wrt to restaurant
> 

// page4
> (POST) Details of selected menu
* 

> (POST) Place Order
* 

// Page5
> (GET) View all order/wrt to email
* 

> (PUT) Update order details
* 

> (DELETE) Delete Order
* 
