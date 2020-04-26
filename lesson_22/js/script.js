/* Создайте select(heml элемент выбоа) в котором можно выбрать разные валюты(EUR,UAH и тд) 
После выбора в блоке ниже отображается курс по данной валюте, к гривне: 
Название валюты, курс покупки, курс продажи. Курс можете взять на https://api.privatbank.ua/#p24/exchange */

"use strict"

function loadExchangeRate(infoCurrency) {
  const currency = document.querySelector("select");
  const name = document.querySelector(".name");
  const buy = document.querySelector(".buy");
  const sale = document.querySelector(".sale"); 
  infoCurrency.forEach(element => {
    if(currency.value === element.ccy) {
      name.innerText = element.ccy;
      buy.innerText = element.buy;
      sale.innerText = element.sale;
    }
  });
}

function loadData(url) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.onload = () => {
      if(xhttp.status >= 400) {
        reject(xhttp.status);
      } else {
        resolve(xhttp.response);
      }
    }    
    xhttp.send();
  });
}

function createCurrency() {
  const container = document.querySelector(".container");
  const caption = document.createElement("h1");
  caption.innerText = "Курс Валют";

  const currency = document.createElement("select");
  const text = document.createElement("span");
  text.innerText = "Выбирите валюту: ";

  const table = document.createElement("table");
  const tableCaption = document.createElement("tr");
  const string = document.createElement("tr");
  const nameText = document.createElement("td");
  nameText.innerText = "Валюта";
  const buyText = document.createElement("td");
  buyText.innerText = "Покупка";
  const saleText = document.createElement("td");
  saleText.innerText = "Продажа";
  const name = document.createElement("td");
  name.setAttribute("class", "name");
  const buy = document.createElement("td");
  buy.setAttribute("class", "buy");
  const sale = document.createElement("td");
  sale.setAttribute("class", "sale");

  container.append(caption);
  container.append(text);
  container.append(currency);
  
  currency.after(table);
  table.append(tableCaption,string);
  tableCaption.append(nameText,buyText,saleText);
  string.append(name,buy,sale);

  let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  loadData(url)
  .then( infoCurrency => {
    infoCurrency = JSON.parse(infoCurrency);
    infoCurrency.forEach(element => {
      const option = document.createElement("option");
      option.innerText = element.ccy;
      currency.append(option);      
    });
    loadExchangeRate(infoCurrency); 
    currency.addEventListener("change", () => loadExchangeRate(infoCurrency));
  })
  .catch(err => console.error(`Connection Error:${err}`));   
}

document.addEventListener("DOMContentLoaded", () => {
  createCurrency();
});

