  Number.prototype.isPrima = function (){
    let i;
    for(i = 2; i < this; i++){
        if(this % i == 0){
            return false;
        }
    }
    return true;
}

let N = 7;

console.log(N.isPrima());