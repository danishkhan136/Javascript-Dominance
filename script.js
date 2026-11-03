// design Pattern

// Module Pattern

// Module pattern ek design pattern  hai jisme hum apna code ek self executing function (IIFE) ke andar likhte hain, taki variable 
// aur function private rahen

// Iske andar se hum sirf wahi cheezain retrun karte hain jo bahar use karni hai

// Is pattern ka main faida hai data hiding (ensapsultion)aur clean sturcture hai, taaki code secure, resuable, and manageable 
// bana sake


// design--> a way to write a code

// IIFE--> (Immediately Invoked Function Expression)
// let function(){

// }(); iife function

//let bankbalance =12000 here it is public variable
// let Bank = (function () {
//     let bankbalance = 12000; // here it is private variable
//     //if we not want to change value we make it const

//     //use cases
//     //access the value and change the value

//     function checkBalance() {
//         console.log(bankbalance);
//     }

//     function setBalance(val) {
//         bankbalance = val;
//     }

//     function withdraw(val) {
//         if (val <= bankbalance) {
//             bankbalance -= val;
//             console.log(bankbalance);
//         }
//     }

//     // any thing you return here will go out and saved in Bank
//     return {
//         checkBalance,
//         setBalance,
//         withdraw,
//     };
//     //here now bank get an object;
// })();

// interstingly everything is in the iife fuction so we can not access any single thing because every thing is private

// this design pattern help you to build private things which you dont want any one to access outside the class


//now Bank get an object by return in side the iife function so bank became object of this iife function 
//so now we can access all function inside iife

// Bank.checkBalance()
// Bank.withdraw(12000);


//Revealling Design Pattern
//Revealling module pattern is very similar to module pattern


// iife
// let Bank = (function () {
//     let bankbalance = 12000;




//     function checkBalance() {
//         console.log(bankbalance);
//     }

//     function setBalance(val) {
//         bankbalance = val;
//     }

//     function withdraw(val) {
//         if (val <= bankbalance) {
//             bankbalance -= val;
//             console.log(bankbalance);
//         }
//     }


//     return {
//         check: checkBalance,
//         set: setBalance,
//         draw: withdraw,
//         //only difference in module pattern and revealling module pattern is you can set name in revealling module pattern
//     };

// })();

// Bank.set(50000);
// Bank.check();


// Factory Function Pattern
// ek function banate ho jo objects create karta hai (factory = object banane ki machine)

// Factory Function Pattern ek aisa design pattern hai jisme hum ek simple function likhte hain jo naye objects banakar return 
// karta hai, bina class ya new keyword use kiya.

// Is pattern ka main idea hai -> object creation ko ek function ke through control karna.

// Har baar jab tum factory function call karte ho, tumhe ek naya

function createProduct(name, price) {
    let stock = 10;
    return {
        name,
        price,
        checkStock(){
            console.log(stock);
        },

        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} piece left.`);
            }
            else {
                console.error(`out of stock we only have ${stock} in stock .`);
            }
            // if need more piece make and function which book order for future when stock comes we give all piece delivery at 
            // that time either for now we not give them a any single piece
        },

        refill(qty) {
            stock += qty;
            console.log(`refill the stock - ${stock} pieces now.`)
        },
    };
}

let samsung = createProduct("samsung", 75252);
let iphone = createProduct("iphone", 75252);