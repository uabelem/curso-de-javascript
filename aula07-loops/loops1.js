for ( let index = 0; index < 10; index++) {
    console.log(index)
}

const cars = ["Ferrari", "Fiat", "Mercedes"]

for ( let i = 0; i < cars.length; i++){
    console.log(cars[i])
}

// for of

for ( let car of cars){
    console.log(car)
}

// forEach

cars.forEach(function(car, index){
    console.log(index)
    console.log(car)
})