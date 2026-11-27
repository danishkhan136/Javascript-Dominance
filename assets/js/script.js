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

// function createProduct(name, price) {
//     let stock = 10;
//     return {
//         name,
//         price,
//         checkStock(){
//             console.log(stock);
//         },

//         buy(qty) {
//             if (qty <= stock) {
//                 stock -= qty;
//                 console.log(`${qty} pieces booked - ${stock} piece left.`);
//             }
//             else {
//                 console.error(`out of stock we only have ${stock} in stock .`);
//             }
//             // if need more piece make and function which book order for future when stock comes we give all piece delivery at 
//             // that time either for now we not give them a any single piece
//         },

//         refill(qty) {
//             stock += qty;
//             console.log(`refill the stock - ${stock} pieces now.`)
//         },
//     };
// }

// let samsung = createProduct("samsung", 75252);
// let iphone = createProduct("iphone", 75252);


//Observer Pattern

// class YoutubeChannel {
//     constructor(name) {
//         this.subscribers = [];
//         this.name = name;
//     }

//     subscribe(user) {
//         this.subscribers.push(user);
//         user.update(`You have subscribed the channel.`);
//     }
//     unsubscribe(user) {
//         this.subscribers = this.subscribers.filter((sub) => sub !== user);
//         user.update(`You have un-subscribed the channel.`);
//     }
//     notify(message) {
//         this.subscribers.forEach((sub) => sub.update(message));
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     update(data) {
//         console.log(`${this.name} ${data}`);
//     }
// }

// let channel1 = new YoutubeChannel("techriv");
// let user1 = new User("Danish khan");
// let user2 = new User("wajahat khan");
// let user3 = new User("Mazz khan");



// channel1.subscribe(user1);
// channel1.subscribe(user2);
// channel1.subscribe(user3);

// channel1.notify(`New Task Arrived on ${channel1.name}.`);


//Observer Pattern with private variable

// class YoutubeChannel {
//     // 1. Private variables ko class ke start mein declare karna zaroori hai
//     #subscribers = [];
//     #name;

//     constructor(name) {
//         this.#name = name;
//     }

//     // 2. Channel ka naam bahar se read karne ke liye Getter
//     get name() {
//         return this.#name;
//     }

//     subscribe(user) {
//         this.#subscribers.push(user);
//         // Yahan user.name asal mein User  class ka 'get name()' chala raha hai
//         user.update(`${user.name} You have subscribed the channel.`);
//     }

//     unsubscribe(user) {
//         this.#subscribers = this.#subscribers.filter((sub) => sub !== user);
//         user.update(`${user.name} You have un-subscribed the channel.`);
//     }

//     notify(message) {
//         this.#subscribers.forEach((sub) => sub.update(message));
//     }
// }

// class User {
//     // 3. User ka naam bhi private kar diya
//     #name;

//     constructor(name) {
//         this.#name = name;
//     }

//     // 4. User ka naam bahar se read karne ke liye Getter
//     get name() {
//         return this.#name;
//     }

//     update(data) {
//         // Class ke andar hum direct private variable #name use kar sakte hain
//         console.log(`${this.#name} ${data}`);
//     }
// }

// // === Testing the Code ===

// let channel1 = new YoutubeChannel("techriv");

// let user1 = new User("Danish khan");
// console.log(user1.name);
// let user2 = new User("wajahat khan");
// console.log(user2.name);
// let user3 = new User("Mazz khan");
// console.log(user3.name);

// channel1.subscribe(user1);
// channel1.subscribe(user2);
// channel1.subscribe(user3);

// // Yahan channel1.name asal mein YoutubeChannel class ka 'get name()' chala raha hai
// channel1.notify(`New Task Arrived on ${channel1.name}.`);

// channel1.unsubscribe(user3);

//PERFORMANCE OPTIMIZATION 

//Debouncing
// aap koi action kar rahe hoo aur aap ya nahi chaahte har actionpe kuch hoo,
// jab bhi mera actions ka beech ma koi specfic gap aajaye to fir reaction perform ho.

// function debounce(fnc, delay,) {
//     let timer;
//     return function (...args) {//yaha ya rest kar raha ya js ma mean collect kar raha hai
//         clearTimeout(timer);
//         timer = setTimeout(()=> {
//             fnc(...args);//yaha yaa 
//         }, delay);
//     }

// }


// document.querySelector("input").addEventListener("input", function debounce(fnc, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             fnc(...args);
//         }, delay);
//     }

// }
// );
//ya kam pecha backend pa horaha hAI JO HUMA NAZAR NAHI A raha

// document.querySelector("input").addEventListener("input", debounce(function (dets) {
//     console.log(dets)
// }, 1000)
// );


//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             fnc(...args);
//         }, delay);
//     }

// }
// );
// debounce na  apna inner ko return kar dia hai ais lia hum inner function maa ards get kar raha hain 

// the real work of debounce

// function debounce(fnc, delay,) {
//     let timer;
//     return function (...args) {//yaha ya rest kar raha ya js ma mean collect kar raha hai
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fnc(...args);//yaha yaa spread kar raha mean kisi bhi kam ka lia wapis bage raha hai chaha print ya kisi aur kam 
//         }, delay);
//     }

// }

// document.querySelector("input").addEventListener("input", debounce(function (dets) {
//     console.log(dets)
// }, 1000)
// );

// ya meri delay ki value mana eventlistener ma dii wuhan sa wo debounce function ka pas gai debounce function return hua aus na delay ki value ko return function ko de dia


// Isko aise samjhein:

// Browser ne input event bheja.

// ...args ne ek delivery boy ka kaam kiya. Usne wo event pakda.

// Aur aapke function ko wohi event de diya jisko aapne dets ka naam diya hua hai.

// Toh technically: ...args = dets hi hai is specific case mein.

// Aapne bilkul sahi concept catch kiya hai!



// debounce -> ek delay bataaoge tum utna delay jab bhi aayega action ka reaction milega


// throttle -> joo time doo autna time ka interval ka bad chalunga phir autna time dubara intinzar kara gaa phir ya asi tara 
// repeat hota reha gaa jab tak tum ko bhi task tum 
// perform kar raha hoo mean tumara task ki duration maa har autha tum har given time stamp guzarna ka bad ya function dubara 
// dubara chala gaa 
// exp:task duration 1 mint and time stamp 2 second to ya throttle aus given functiion ko har 2 second ma chalai gaa 1 mint tak


// function throttle(fnc, delay) {
//     let timer = 0;
//     return function (...args) {
//         let now = Date.now();       
//         if (now - timer >= delay) {
//         // ex firw 17000000-0>=3000 =>17000000 true instant on fw 
//         // -> secw 17001000-17000000>=3000 => 1000>=3000 False so timer remain same 17000000 because we not go in if function 
//         // -> thiw 17002000-17000000>=3000 => 2000>=3000 False so timer remain same 17000000 because we not go in if function 
//         // -> fouw 17003000-17000000>=3000 => 3000>=3000 ture ab change hoga timer to 17003000 kune ab hum function ka andar 
//         //    gaya hain
//         // -> fivw 17004000-17003000>=3000 => 1000>=3000 False so timer remain same 17003000 because we not go in if function
//             timer = now;
//             // firw timer = 17000000 -> secw timer = 17000000 sw -> thiw timer = 17000000 
//             // -> fouw timer = 17003000 -> fivw timer = 17003000

//             fnc(...args);
//         }
//     }
// }

// document.querySelector("input").addEventListener("input", throttle((dets) => {
//     console.log(dets);
// }, 3000));


// let imgs = document.querySelectorAll("img");

// const observer = new IntersectionObserver(
//     function (entries, observer) {
//         entries.forEach(function (entry) {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.add("loaded",);
//                 observer.unobserve(img);
//             }
//         })
//     },
//     {
//         root: null,
//         threshold: 0.1,
//     }
// );

// imgs.forEach(function (img) {
//     observer.observe(img);
// })


// Code Splitting with Dynamic Data

const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
    let heavy = await import("./heavy.js");

    heavy.veryheavy();
})