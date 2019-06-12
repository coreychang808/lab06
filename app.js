'use strict';

// var time = ['6am','7am','8am','9am','10am','11am','12am','1am','2am','3am','4am','5am','6am','7am','8am'];




function SalmonCookies(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  SalmonCookies.list.push(this);
//   sumCookies = 0;
}
SalmonCookies.list = [];

SalmonCookies.prototype.render = function(){
  console.log(`rendering...${this.minCust}`);
  var tableBody = document.getElementById('famiyBody');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);
  cell= document.createElement('td');
  cell.textContent = this.minCust;
  tableRow.appendChild(cell);
  cell= document.createElement('td');
  cell.textContent = this.maxCust;
  tableRow.appendChild(cell);
  cell= document.createElement('td');
  cell.textContent = this.avgCookieSale;
  tableRow.appendChild(cell);
  cell= document.createElement('td');
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
};


new SalmonCookies('1st and Pike', '23', '65', '6.3');
new SalmonCookies('SeaTac Airport', '23', '65', '6.3');
new SalmonCookies('Seattle Center', '23', '65', '6.3');
new SalmonCookies('Capitol Hill', '23', '65', '6.3');
new SalmonCookies('Alki', '23', '65', '6.3');

for (var i = 0; i < SalmonCookies.list.length; i++) {
  SalmonCookies.list[i].render();
}
console.log(SalmonCookies.list);


// var pike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   sumCookies: 0,
//   render: function() {
//     var cookie = document.getElementById('pikeCookieList');
//     for (let i=0; i<time.length; i++) {
//       var newItem = document.createElement('li');
//       var cookieHours = this.cookiesPerHour();
//       newItem.textContent = `${time[i]} : ${cookieHours} cookies`;
//       cookie.appendChild(newItem);
//       this.sumCookies += cookieHours;
//     }
//     var total = document.createElement('li');
//     total.textContent = ` ${this.sumCookies} cookies total`;
//     cookie.appendChild (total);
//   },

//   generateRandom:function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookiesPerHour:function () {
//     return Math.floor(this.generateRandom(this.minCust,this.maxCust)*this.avgCookieSale);
//   }
// };

// pike.render();
// console.log(pike.generateRandom(pike.minCust,pike.maxCust),'generate random');
// console.log(pike.cookiesPerHour(),'cookies per hour');


// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   sumCookies: 0,
//   render: function() {
//     var cookie = document.getElementById('seaTacCookieList');
//     for (let i=0; i<time.length; i++) {
//       var newItem = document.createElement('li');
//       var cookieHours = this.cookiesPerHour();
//       newItem.textContent = `${time[i]} : ${cookieHours} cookies`;
//       cookie.appendChild(newItem);
//       this.sumCookies += cookieHours;
//     }
//     var total = document.createElement('li');
//     total.textContent = ` ${this.sumCookies} cookies total`;
//     cookie.appendChild (total);
//   },

//   generateRandom:function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookiesPerHour:function () {
//     return Math.floor(this.generateRandom(this.minCust,this.maxCust)*this.avgCookieSale);
//   }
// };

// seaTac.render();
// console.log(seaTac.generateRandom(seaTac.minCust,seaTac.maxCust),'seaTac generate random');
// console.log(seaTac.cookiesPerHour(),'seaTac cookies per hour');

// var seaCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   sumCookies: 0,
//   render: function() {
//     var cookie = document.getElementById('seaCenter');
//     for (let i=0; i<time.length; i++) {
//       var newItem = document.createElement('li');
//       var cookieHours = this.cookiesPerHour();
//       newItem.textContent = `${time[i]} : ${cookieHours} cookies`;
//       cookie.appendChild(newItem);
//       this.sumCookies += cookieHours;
//     }
//     var total = document.createElement('li');
//     total.textContent = ` ${this.sumCookies} cookies total`;
//     cookie.appendChild (total);
//   },

//   generateRandom:function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookiesPerHour:function () {
//     return Math.floor(this.generateRandom(this.minCust,this.maxCust)*this.avgCookieSale);
//   }
// };

// seaCenter.render();
// console.log(seaCenter.generateRandom(seaCenter.minCust,seaCenter.maxCust),'seaCenter generate random');
// console.log(seaCenter.cookiesPerHour(),'seaCenter cookies per hour');

// var capitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   sumCookies: 0,
//   render: function() {
//     var cookie = document.getElementById('capitolHill');
//     for (let i=0; i<time.length; i++) {
//       var newItem = document.createElement('li');
//       var cookieHours = this.cookiesPerHour();
//       newItem.textContent = `${time[i]} : ${cookieHours} cookies`;
//       cookie.appendChild(newItem);
//       this.sumCookies += cookieHours;
//     }
//     var total = document.createElement('li');
//     total.textContent = ` ${this.sumCookies} cookies total`;
//     cookie.appendChild (total);
//   },

//   generateRandom:function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookiesPerHour:function () {
//     return Math.floor(this.generateRandom(this.minCust,this.maxCust)*this.avgCookieSale);
//   }
// };

// capitolHill.render();
// console.log(capitolHill.generateRandom(capitolHill.minCust,capitolHill.maxCust),'capitolHill-generate random');
// console.log(capitolHill.cookiesPerHour(),'capitolHill-cookies per hour');

// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   sumCookies: 0,
//   render: function() {
//     var cookie = document.getElementById('alki');
//     for (let i=0; i<time.length; i++) {
//       var newItem = document.createElement('li');
//       var cookieHours = this.cookiesPerHour();
//       newItem.textContent = `${time[i]} : ${cookieHours} cookies`;
//       cookie.appendChild(newItem);
//       this.sumCookies += cookieHours;
//     }
//     var total = document.createElement('li');
//     total.textContent = ` ${this.sumCookies} cookies total`;
//     cookie.appendChild (total);
//   },

//   generateRandom:function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookiesPerHour:function () {
//     return Math.floor(this.generateRandom(this.minCust,this.maxCust)*this.avgCookieSale);
//   }
// };

// alki.render();
// console.log(alki.generateRandom(alki.minCust,alki.maxCust),'alki-generate random');
// console.log(alki.cookiesPerHour(),'alki-cookies per hour');
// };