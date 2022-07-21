// // // // // import {Lavoratore, venti as v, tasse as irpef} from "./recap"
// // // // import * as RECAP from "./recap"

// // // // let l = new RECAP.Lavoratore(1000)
// // // // // console.log(tasse);
// // // // // let x = venti()

// // // // type strNum = string | number;

// // // // type obj1 = { a:string, b:number }
// // // // type obj2 = { c:boolean, d:Date[]}
// // // // type OBJ = (obj1 & obj2)

// // // // let obj:OBJ = { a:"ciao", b:3, c:true, d:[new Date()]}

// // // // function test<T>(asd:<T>){

// // // //     if(typeof asd === "string"){
// // // //         return "ciao"
// // // //     } 
// // // //     return 10
// // // // }

// // // // let y:number = test<number>(3)
// // // // // test("3")
// // // // // test(true)

// // // // let x = []
// // // // x.push(3)
// // // // x.push("3")

// // // // fetch("").then(res=>res.json()).then((res:RECAP.Lavoratore[])=>{})


// // // // let n1 = "Fabio"
// // // // let c1 = "di Gloria"

// // // // // let nc = "Nome completo: " + n1 + " " + c1
// // // // let nc = `Nome completo: ${n1} ${c1}`;


// // // let arr = [1, 2]
// // // // let arr1 = ["a", "b", "c"]
// // // // let arrRes = [...arr, ...arr1] //spread operator
// // // function somma(a, b, c) {
// // //     return a+b+c
// // // }
// // // // function f(...params){ //rest operator
// // // //     console.log(params)
// // // // }
// // // // f(1, 2, 3, 4, 5)


// // // // let n1 = arr[0]
// // // // let n2 = arr[1]
// // // // let n3 = arr[2]

// // // // let [x, y, z] = [arr[0], arr[1], arr[2]]
// // // let [x, y, z] = arr
// // // // let [, , t] = arr
// // // // let [n, ...rest] = arr
// // // let [f, s="ciao", t=null] = arr //valori default se non ci sono gli elementi a quell'indice

// // // let [q, w, e] = arr.slice(2, 5);

// // // // console.log(f);
// // // // console.log(s);
// // // // console.log(t);
// // // let obj = { a:"ciao", b:3, c:true, d:[new Date()]}

// // // // let saluto = obj.a

// // // let {a:saluto, ...rest} = obj
// // // console.log(saluto);
// // // console.log(rest);





// // // let posizione:[number, number] = [120, 60]

// // // console.log(somma(x, y, z))
// // // somma(...arr) //1, 2, 3

// // //Functions
// // // function f(p){} //definizione di f -hoisting
// // // f(10) //esecuzione di f
// // // f //valore di f
// // // let f = function(p){} //definizione definizionnel flow di f
// // // function(p){
// // //     console.log("TEST")
// // // } //funzione anonima
// // // (p)=>{} //arrow function

// // // p=>p++ //return valore a destra della =>

// // // f
// // //sono entrambi modi di passare il valore di una funzione


// // //OVERLOAD - indichiamo come può essere usata la nostra funzione
// // // function concatena(a:number, b:number):number
// // // // function concatena(a:string, b:number):string
// // // // function concatena(a:string, b:string):string
// // // function concatena(a:string, b:number|string):string
// // // function concatena(a:number|string, b:string):string
// // // function concatena(a:any[], b:any[]):any[]
// // function concatena(a, b) {
// //     if(typeof a == "object" && typeof b == "object")
// //         return [...a, ...b]
// //     return a + b
// // }

// // let x:string = concatena("1", 2)
// // let y:number = concatena("a", "b")
// // let z:any[] = concatena("a", "b")
// // // concatena([1, 2, 3], 3)



// // function calcolaTempoDiEsecuzione(f) {
// //     let inizio = Date.now()
// //     f()
// //     return Date.now() - inizio
// // }
// // // function calcolaTempoDiOgniOperazione(f) {
// // //     let inizio = Date.now()
// // //     f()
// // //     return Date.now() - inizio
// // // }

// // calcolaTempoDiEsecuzione(concatena("1", 2))


// concatena(1, 2)

function TempoEsecuzione(target, propertyKey, descriptor) {
    let f = descriptor.value
    descriptor.value = (...p)=>{
        const inizio = Date.now()
        let res = f.apply(this, p)
        console.log("Tempo esecuzione: " + (Date.now()- inizio));
        return res
    }
    return descriptor
}

class Funzioni {

    constructor(){
        console.log("constructor");
    }

    @TempoEsecuzione
    metodo(){
        console.log("Eseguo i metodo....")
    }
}

let fn = new Funzioni();
fn.metodo();