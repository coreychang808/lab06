'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12am','1am','2am','3am','4am','5am','6am','7am','8am'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  render: function() {
    var cookie = document.getElementById('pikeCookieList');
    for (let i=0; i<time.length; i++) {
      var newItem = document.createElement('li');
      newItem.textContent = time[i];
      cookie.appendChild(newItem);
    }

  },
  generateRandom:function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour:function () {
    return Math.floor(this.generateRandom(this.minCust,this.maxCust)*this.avgCookieSale);
  }
};

pike.render();

console.log(pike.generateRandom(pike.minCust,pike.maxCust),'generate random');

console.log(pike.cookiesPerHour(),'cookies per hour');

    
// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
// };

// var seattleCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
// };

// var capitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
// };

// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
// };
