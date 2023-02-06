//TODO: 1. Ededden ozunun reqemleri cemini cix
// let a = prompt("enter a number");
// function sumOfNum(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum = sum + +a[i]
//     }

//     while (true) {
//         a = a - sum;
//         if (a % 2 !=0) {
//             return `cixdi cixdi ${a} tek edede qeder`;
//         }
//     }
// }
// console.log(sumOfNum(a))

//TODO: 2. Input ile daxil olunan ededin tersinin bolenlerini goster
// let num = +prompt("enter a number").split('').reverse().join("");
// function reverse(num) {
//     for(let i = 0; i <=num ; i++)
//     {
//         if(num % i == 0)
//         {
//             console.log(i)
//         }
//     }
// }
// reverse(num);

//TODO: 3. Input ile daxil olunan ededin tersinin bolenlerini goster
// let a = +prompt("nece eded daxil edessiz");
// function uomg(){
//  let sum=0;
//  for(let i=1; i<=a; i++){
//    let d = +prompt("davay daxil ele")
//    sum = (sum + d);
//   }
//  sum = sum/a;
//  return console.log(sum);
// }
// uomg();

//TODO: 4. Input ile daxil olunan ededden sonraki n sade ededi
// let num = prompt("eded daxil edin");
// function simpleNum(num) {
//     let i = +num + 1
//     while (true) {
//         let counter= 0;
//         for (let j = 1; j <= i; j++) {
//             if(i%j==0){
//                 counter++
//             }
//         }
//         if(counter==2){
//             return i;
//         }

//         i++
//     }
// }

// console.log(simpleNum(num))


//TODO: 5. Arraylarin hamisinin cut olub olmadigina baxin tek  ededlerincemi 
// let arr = [2,2,4,4,6,6,8]
// let counter = 0

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 != 0){
//        counter++;
//     }
//   }
//   if (counter == 0) {
//     console.log('hamisi cutdur')
//   }
//   else{
//     console.log('tekde var')

//   }


//TODO: 6. Arrayin icindeki tek ededlerin cemini tapin
// let arr = [2,3,11,32,17,48,5,52,7,21,41]
// let sumOfOdd=0;
// for(let i = 0; i < arr.length; i++){
//   if (arr[i] % 2 != 0) {
//     sumOfOdd = sumOfOdd + arr[i];
//   }

// }
// console.log(`Tek ededlerin cemi: ${sumOfOdd}`)

//TODO: 7. Arrayin ichinde nece element oldugunu tapin
// let arr = [2,3,11,32,17,48,5,52,7,21,41];
// let counter =0;
// for(let i = 0; i < arr.length; i++)
// {
//   counter++;
// }

// console.log(`arrayda olan elementlerin sayi : ${counter}`)

//TODO: 8. Arrayin ichinde olan ededlerin ededi ortasini tapin
// let arr = [2,3,10,5,3,6,4,8,4]
// let sum=0;
// let counter = 0;
// for(let i = 0; i < arr.length; i++)
// {
//   sum = sum + arr[i];
//   counter++;
// }

// let uomg = sum/counter
// console.log('ededlerin ededi ortasi : ' + uomg)

//TODO: 9. Arrayin ichinde a herfi ile baslayan sozleri tapin
// arr = ['salam', 'apple', 'nar', 'asif', 'banana']
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i].charAt(0) == 'a') {
//   console.log(`a herfi ile baslayan sozler : ${arr[i]}`)
//  }
// }

// //TODO: 10. Ededi sade vuruqlara ayirin

let number = +prompt("enter a number");
function simpleMul(number) {
  for (let i = 2; i <= number; i++) {
    let counter = 0;
    if (number % i == 0) {
      for (let b = 1; b <= i; b++) {
        if (i % b == 0) {
          counter++;
        }
      }
    }
    if (counter == 2) console.log(`sade vurugu ${i}`);
  }
 }

 simpleMul(number)
