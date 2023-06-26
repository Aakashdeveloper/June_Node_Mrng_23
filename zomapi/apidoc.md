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
> http://localhost:9911/details/6288d22dbb17b75750d11cb0

* (GET) Menu wrt to restaurant
> http://localhost:9911/menu/5

// page4
* (POST) Details of selected menu
> http://localhost:9911/menuDetails
{"id":[4,7,2]}

* (POST) Place Order
> http://localhost:9911/placeOrder
{
	"orderId" : 2,
	"name" : "Nikita",
	"email" : "nikki@gmail.com",
	"address" : "Hom 25",
	"phone" : 8934645457,
	"cost" : 166,
	"menuItem" : [
		3,34,5
	],
	"status" : "Pending"
}

// Page5
* (GET) View all order/wrt to email
> http://localhost:9911/orders
> http://localhost:9911/orders?email=amit@gmail.com


* (PUT) Update order details
> 

* (DELETE) Delete Order
> 
