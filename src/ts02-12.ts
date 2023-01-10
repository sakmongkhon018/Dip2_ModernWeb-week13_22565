//1.Union Type with variable
let value: number|string
value = 120
value = "Mark"
console.log(value)
//2.Union Type with Function
function display(data:(number|string)){
    console.log(data)
}

display(123)
display("Mark")
//3.Union Type with Array 
let arrType:number[]|string[]
let z:number
arrType = [10,20,30]
for (z = 0; z< arrType.length; z++){
    console.log(arrType[z])
}

arrType = ["Thai", "Lao", "Malaysia"]
for (z = 0; z< arrType.length; z++){
    console.log(arrType[z])
}