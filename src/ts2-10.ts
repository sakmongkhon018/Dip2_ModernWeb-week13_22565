//Tple types
let arrtuple:any = [101,"Mark",50,"CEO"]
console.log(arrtuple)
let x:any
let arrTuple2:any = []
arrTuple2[0] = 102
arrTuple2[1] = "Elon"
arrTuple2[2] = 52
arrTuple2[3] = "CEO of AWS"


//for(x in arrtuple2){
//    console.log(arrtuple2[x])
//}

function displaytable(arrTu_value:any[]):void{
    for(x in arrTuple2){
       console.log(arrTuple2[x])
    }
}
displaytable(arrTuple2)