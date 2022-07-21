class Lavoratore {
    tasse:number
    reddito:number
    constructor(reddito:number){
        this.reddito=reddito


        this.tasse = this.reddito * this.getPercentualeTasse()
    }

    private getPercentualeTasse():number {
        let percentaule
        if(this.reddito < 5000) {
            percentaule = .1
        } else {
            percentaule = .2
        }
        return percentaule
    }

    getRedditoAnnuo():number {
        return this.reddito - this.tasse
    }
}
// class Lavoratore {
//     // tasse:number
//     saldo: number
//     constructor(saldo: number) {
//         this.saldo = saldo


//         // this.tasse = this.saldo * this.getPercentualeTasse()
//     }

//     bonifico(n: number) {
//         this.saldo -= n
//     }

//     private getPercentualeTasse(): number {
//         let percentaule
//         if (this.saldo < 5000) {
//             percentaule = .1
//         } else {
//             percentaule = .2
//         }
//         return percentaule
//     }

//     private get tasse(): number {
//         let tasse = this.saldo * this.getPercentualeTasse()
//         return tasse
//     }

//     getConversione(): number {
//         //calcolare le tasse
//         return this.saldo - this.tasse
//     }
// }

export class Lavoratore {
    tasse:number
    private _reddito:number
    // reddito:number
    constructor(reddito:number){
        this.reddito=reddito
    
    }

    bonifico(n:number) {
        this.reddito -= n
    }

    set reddito(r:number) {
        this._reddito = r
        this.calcolaTasse()
    }

    get reddito(){
        return this._reddito
    }

    private calcolaTasse(){
        this.tasse = this.reddito * this.getPercentualeTasse()
    }

    private getPercentualeTasse():number {
        let percentaule
        if(this.reddito < 5000) {
            percentaule = .1
        } else {
            percentaule = .2
        }
        return percentaule
    }

    getRedditoAnnuo():number {
        return this.reddito - this.tasse
    }
}

function test(){
    return 10
}

export function venti() {
    return test()*2
}

export let tasse = 100

// let l = new Lavoratore(6000)
// // l.bonifico(2000)
// console.log(l.reddito)
// l.getRedditoAnnuo()