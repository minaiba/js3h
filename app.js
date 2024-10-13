// const day = parseInt(prompt('12 ай'))
// switch (day) {
//     case 1:
//         console.log('январь');
//         break;
//     case 2:
//         console.log('февраль');
//         break;
//     case 3:
//         console.log('март');
//         break;
//     case 4:
//         console.log('апрель');
//         break;
//     case 5:
//         console.log('май');
//         break;
//     case 6:
//         console.log('июнь');
//         break;
//     case 7:
//         console.log('июль');
//         break;
//     case 8:
//         console.log('август');
//         break;
//     case 9:
//         console.log('сентябрь');
//         break;
//     case 10:
//         console.log('октябрь');
//         break;
//     case 11:
//         console.log('ноябрь');
//         break;
//     case 12:
//         console.log('декабрь');
//         break;

//     default:
//         console.log('мындай ай жок'); 
//         break;
// }


// const day = parseInt(prompt('4 мезгил'))
// switch (day) {
//     case 1:
//     case 2:
//     case 12:
//         alert('кыш');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('жаз');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('жай');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('куз');
//         break;
//     default:
//         alert('нет такого времени года')
//         break;
// }


let num1 = parseFloat (prompt ("Введите первое число:"));
let num2 = parseFloat (prompt ("Введите второе число:"));
let op = prompt ("Введите оператор (+, -, *, /):");
switch (op) {
        case '+':
           console.log(num1 + num2);
           break;
        case '-':
           console.log(num1 - num2);
           break;
        case '/':
           console.log(num1 / num2);
           break;
        case '*':
           console.log(num1 * num2);
           break;
        default:
            console.log('соз жазба');
            break;
}