'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];




function SalmonCookieStore(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.sumCookies = 0;
  this.sumCookiesArray=[];
  SalmonCookieStore.list.push(this);
  SalmonCookieStore.cookiesPerHour(this);
}
SalmonCookieStore.list = [];

SalmonCookieStore.prototype.generateRandom = function(min,max){
  return Math.random() * (max - min) + min;
};

SalmonCookieStore.cookiesPerHour = function(object) {
  for(var i = 0; i < time.length; i++){
    var totalCookiesPerHour = Math.floor(object.generateRandom(object.minCust,object.maxCust)*object.avgCookieSale);
    object.sumCookiesArray.push(totalCookiesPerHour);
    object.sumCookies += totalCookiesPerHour;
  }
  object.sumCookiesArray.push(object.sumCookies);
  console.log(object.sumCookiesArray);
};



//table head
SalmonCookieStore.render = function(){
  var tableBody = document.getElementById('tableHead');
  var tableRow = document.createElement('tr');

  var cell = document.createElement('td');
  tableBody.appendChild(tableRow);
  cell.textContent = ' ';
  tableRow.appendChild(cell);
  for(var i = 0; i < time.length; i++){
    cell = document.createElement('td');
    cell.textContent = time[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = 'totals';
  tableRow.appendChild(cell);
};

//table body
SalmonCookieStore.prototype.render = function(){
  var tableBody = document.getElementById('familyBody');
  var tableRow = document.createElement('tr');
  var cell =document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);
  for(var i = 0; i< this.sumCookiesArray.length; i++){
    cell = document.createElement('td');
    cell.textContent = this.sumCookiesArray[i];
    tableRow.appendChild(cell);
  }
  tableBody.appendChild(tableRow);
};


new SalmonCookieStore('1st and Pike', '23', '65', '6.3');
new SalmonCookieStore('SeaTac Airport', '3', '24', '1.2');
new SalmonCookieStore('Seattle Center', '11', '38', '3.7');
new SalmonCookieStore('Capitol Hill', '20', '38', '2.3');
new SalmonCookieStore('Alki', '2', '16', '4.6');


SalmonCookieStore.render();

for (var i=0; i < SalmonCookieStore.list.length; i++){
  SalmonCookieStore.list[i].render();
}

console.log(SalmonCookieStore.list);


//total hourly (footer)
function tFoot(){
  var tableFooter = document.getElementById('tableFoot');
  var tableRow = document.createElement('tr');
  cell = document.createElement('td');
  cell.textContent = 'total hourly';
  tableRow.appendChild(cell);
  var totalTotals = 0;
  for(var n = 0 ; n < time.length; n++){
    var footerTotal = 0;
    var cell = document.createElement('td');
    for(var a = 0; a < SalmonCookieStore.list.length; a++) {
      footerTotal += SalmonCookieStore.list[a].sumCookiesArray[n];
      totalTotals += SalmonCookieStore.list[a].sumCookiesArray[n];
    }
    cell.textContent = footerTotal;
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = totalTotals;
  tableRow.appendChild(cell);
  tableFooter.appendChild(tableRow);
}
tFoot();

//formssssss

// function addNewLocation(){
//   var theForm = event.target;
//   var 
// };
