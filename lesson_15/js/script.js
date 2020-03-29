'use strict'

const titleOfBody = document.createElement('h1');
titleOfBody.innerText = "Индекс Биг Мака";
document.body.append(titleOfBody);

const infoText = document.createElement('p');
infoText.innerText = `Индекс Биг Мака - это стоимость гамбургер в сети Мак Дональд. Биг мак содержит, мясо, овоши, сыр, хлеб и другие продукты. 
В ето стоимость так же входят аренда помешения и оборудования, рабочая сила и многие другие факторы. 
Если цена биг мака низкая то можно сказать что цены в стране низкие, если высокая то и цены относительно высокие.
Исследования проводятся журналом «The Economist».`;
document.body.append(infoText);


const tableOfIndex = document.createElement('table');
document.body.append(tableOfIndex);

const captionOfTable = document.createElement('caption');
captionOfTable.innerText = 'Индекс Биг Мака в разных странах';
tableOfIndex.append(captionOfTable);

const titleRowTable =  document.createElement('tr');
titleRowTable.className = 'titleRowTable';
tableOfIndex.append(titleRowTable);
const yearCell =  document.createElement('td');
yearCell.innerText = 'Год';
titleRowTable.append(yearCell);
const russiaCell =  document.createElement('td');
russiaCell.innerText = 'Россия';
titleRowTable.append(russiaCell);
const britianCell =  document.createElement('td');
britianCell.innerText = 'Великобритания';
titleRowTable.append(britianCell);
const usaCell =  document.createElement('td');
usaCell.innerText = 'США';
titleRowTable.append(usaCell);
const israelCell =  document.createElement('td');
israelCell.innerText = 'Израиль';
titleRowTable.append(israelCell);

const firstRowTable =  document.createElement('tr');
tableOfIndex.append(firstRowTable);
const firstYearCell =  document.createElement('td');
firstYearCell.innerText = '2012';
firstRowTable.append(firstYearCell);
const firstRussiaCell =  document.createElement('td');
firstRussiaCell.innerText = '2.62';
firstRowTable.append(firstRussiaCell);
const firstBritianCell =  document.createElement('td');
firstBritianCell.innerText = '4.5';
firstRowTable.append(firstBritianCell);
const firstUsaCell =  document.createElement('td');
firstUsaCell.innerText = '4.33';
firstRowTable.append(firstUsaCell);
const firstIsraelCell =  document.createElement('td');
firstIsraelCell.innerText = '3.99';
firstRowTable.append(firstIsraelCell);

const secondRowTable =  document.createElement('tr');
tableOfIndex.append(secondRowTable);
const secondYearCell =  document.createElement('td');
secondYearCell.innerText = '2013';
secondRowTable.append(secondYearCell);
const secondRussiaCell =  document.createElement('td');
secondRussiaCell.innerText = '2.64';
secondRowTable.append(secondRussiaCell);
const secondBritianCell =  document.createElement('td');
secondBritianCell.innerText = '4.51';
secondRowTable.append(secondBritianCell);
const secondUsaCell =  document.createElement('td');
secondUsaCell.innerText = '2.9';
secondRowTable.append(secondUsaCell);
const secondIsraelCell =  document.createElement('td');
secondIsraelCell.innerText = '4.15';
secondRowTable.append(secondIsraelCell);

const thirdRowTable =  document.createElement('tr');
tableOfIndex.append(thirdRowTable);
const thirdYearCell =  document.createElement('td');
thirdYearCell.innerText = '2014';
thirdRowTable.append(thirdYearCell);
const thirdRussiaCell =  document.createElement('td');
thirdRussiaCell.innerText = '2.6';
thirdRowTable.append(thirdRussiaCell);
const thirdBritianCell =  document.createElement('td');
thirdBritianCell.innerText = '4.66';
thirdRowTable.append(thirdBritianCell);
const thirdUsaCell =  document.createElement('td');
thirdUsaCell.innerText = '4.68';
thirdRowTable.append(thirdUsaCell);
const thirdIsraelCell =  document.createElement('td');
thirdIsraelCell.innerText = '4.18';
thirdRowTable.append(thirdIsraelCell);

const titleOfList = document.createElement('h4');
titleOfList.innerText = "Интересные факты:";
document.body.append(titleOfList);

const orderedList = document.createElement('ol');
document.body.append(orderedList);

const firstOrder = document.createElement('li');
firstOrder.innerText = 'По мнению экспертов журнала «The Economist» российский рубль, наряду с валютами таких стран, как Украина, Египет, Филиппины, Аргентина, Гонконг, Индонезия, Таиланд, Малайзия, недооценен примерно на 50 %';
orderedList.append(firstOrder);
const secondOrder = document.createElement('li');
secondOrder.innerText = 'В 2015 году самым дешевым Биг-Маком можно "полакомиться" в Венесуэле - за 0.67 доллара (недооценка на 86 %), потом идет Украина - 1.55 $ (-67.7 %), а за ними Индия, где цена за этот бутерброд 1.83 доллара (-61.7 %).';
orderedList.append(secondOrder);
const thirdOrder = document.createElement('li');
thirdOrder.innerText = 'Самый дорогой Биг-Мак можно купить в Швейцарии - за 6.83 доллара (+42.4 %), затем идут Норвегия - 5.65 $ (+17.9 %), Швеция - 5.13 $ (+7 %) и Дания - 5.08 $ (+6 %).';
orderedList.append(thirdOrder);





