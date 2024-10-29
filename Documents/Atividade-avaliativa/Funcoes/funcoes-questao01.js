function inverterNum(num) {

    let numStr = num.toString();
   
    let numInvertidoStr = " ";

    for (let i = numStr.length - 1; i >= 0; i--) {
       
        let d = numStr[i];

        switch (d) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                numInvertidoStr += d; 
                break;
            default:
                break;
        }
    }

    return parseInt(numInvertidoStr, 10);
}

let num1 = 12356;

let numInvertido = inverterNum(num1);

console.log(`O número ${num1} invertido é: ${numInvertido}`);