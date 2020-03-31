'use strict'

const infoForm = document.createElement('form');
document.body.append(infoForm);

const titleOfForm = document.createElement('h1');
titleOfForm.innerText = "Форма заявки на работу в зоопарке";
infoForm.append(titleOfForm);

const subtitleOfForm = document.createElement('p');
subtitleOfForm.innerText = "Пожалуйста, заполните форму. Обязательные поля отмеченны ";
infoForm.append(subtitleOfForm);

const starOfSubtitle = document.createElement('span');
starOfSubtitle.innerText = "*";
subtitleOfForm.append(starOfSubtitle);

//Contact information

const contactInfo = document.createElement('fieldset');
infoForm.append(contactInfo);

const contactLegend = document.createElement('legend');
contactLegend.innerText = "Контактная информация";
contactInfo.append(contactLegend);

const contactTable = document.createElement('table');
contactInfo.append(contactTable);

const stringName = document.createElement('tr');
contactTable.append(stringName);

const nameLabel = document.createElement('td');
nameLabel.innerText = "Имя"
stringName.append(nameLabel);

const starName = document.createElement('span');
starName.innerText = "*";
nameLabel.append(starName);

const nameInput = document.createElement('td');
stringName.append(nameInput);

const nameOfUser = document.createElement('input');
nameOfUser.setAttribute("type","text");
nameOfUser.setAttribute("required","required");
nameOfUser.setAttribute("name","nameOfUser");
nameInput.append(nameOfUser);

const stringPhone = document.createElement('tr');
contactTable.append(stringPhone);

const phoneLabel = document.createElement('td');
phoneLabel.innerText = "Телефон";
stringPhone.append(phoneLabel);

const phoneInput = document.createElement('td');
stringPhone.append(phoneInput);

const phoneOfUser = document.createElement('input');
phoneOfUser.setAttribute("type","text");
phoneOfUser.setAttribute("name","phoneOfUser");
phoneInput.append(phoneOfUser);

const stringEmail = document.createElement('tr');
contactTable.append(stringEmail);

const emailLabel = document.createElement('td');
emailLabel.innerText = "Email";
stringEmail.append(emailLabel);

const starEmail = document.createElement('span');
starEmail.innerText = "*";
emailLabel.append(starEmail);

const emailInput = document.createElement('td');
stringEmail.append(emailInput);

const emailOfUser = document.createElement('input');
emailOfUser.setAttribute("type","text");
emailOfUser.setAttribute("required","required");
emailOfUser.setAttribute("name","emailOfUser");
emailInput.append(emailOfUser);

//Personal information

const personalInfo = document.createElement('fieldset');
infoForm.append(personalInfo);

const personalLegend = document.createElement('legend');
personalLegend.innerText = "Персональная информация";
personalInfo.append(personalLegend);

const personalTable = document.createElement('table');
personalInfo.append(personalTable);

const stringAge = document.createElement('tr');
personalTable.append(stringAge);

const ageLabel = document.createElement('td');
ageLabel.innerText = "Возраст";
stringAge.append(ageLabel);

const starAge = document.createElement('span');
starAge.innerText = "*";
ageLabel.append(starAge);

const ageInput = document.createElement('td');
stringAge.append(ageInput);

const ageOfUser = document.createElement('input');
ageOfUser.setAttribute("type","text");
ageOfUser.setAttribute("required","required");
ageOfUser.setAttribute("name","ageOfUser");
ageInput.append(ageOfUser);

const stringGender = document.createElement('tr');
personalTable.append(stringGender);

const genderLabel = document.createElement('td');
genderLabel.innerText = "Пол";
stringGender.append(genderLabel);

const genderSelect = document.createElement('td');
stringGender.append(genderSelect);

const genderOfUser = document.createElement('select');
genderOfUser.setAttribute("name","genderOfUser");
genderSelect.append(genderOfUser);

const woman = document.createElement('option');
woman.innerText = "Женщина";
genderOfUser.append(woman);

const man = document.createElement('option');
man.innerText = "Мужчина";
genderOfUser.append(man);

const stringQualities = document.createElement('tr');
personalTable.append(stringQualities);

const qualitiesLabel = document.createElement('td');
qualitiesLabel.innerText = "Перечислите личные качества";
stringQualities.append(qualitiesLabel);

const qualitiesText = document.createElement('td');
stringQualities.append(qualitiesText);

const qualitiesOfUser = document.createElement('textarea');
qualitiesOfUser.setAttribute("name","qualitiesOfUser");
qualitiesText.append(qualitiesOfUser);

//Choose animals

const listOfAnimals = document.createElement('fieldset');
infoForm.append(listOfAnimals);

const animalsLegend = document.createElement('legend');
animalsLegend.innerText = "Выберите ваших любимых животных";
listOfAnimals.append(animalsLegend);

const zebraLabel = document.createElement('label');
zebraLabel.innerText = "Зебра";
listOfAnimals.append(zebraLabel);

const zebraCheck = document.createElement('input');
zebraCheck.setAttribute("type","checkbox");
zebraCheck.setAttribute("name","zebraCheck");
zebraLabel.prepend(zebraCheck);

const catLabel = document.createElement('label');
catLabel.innerText = "Кошак";
listOfAnimals.append(catLabel);

const catCheck = document.createElement('input');
catCheck.setAttribute("type","checkbox");
catCheck.setAttribute("name","catCheck");
catLabel.prepend(catCheck);

const anacondaLabel = document.createElement('label');
anacondaLabel.innerText = "Анаконда";
listOfAnimals.append(anacondaLabel);

const anacondaCheck = document.createElement('input');
anacondaCheck.setAttribute("type","checkbox");
anacondaCheck.setAttribute("name","anacondaCheck");
anacondaLabel.prepend(anacondaCheck);

const personLabel = document.createElement('label');
personLabel.innerText = "Человек";
listOfAnimals.append(personLabel);

const personCheck = document.createElement('input');
personCheck.setAttribute("type","checkbox");
personCheck.setAttribute("name","personCheck");
personLabel.prepend(personCheck);

const elephantLabel = document.createElement('label');
elephantLabel.innerText = "Слон";
listOfAnimals.append(elephantLabel);

const elephantCheck = document.createElement('input');
elephantCheck.setAttribute("type","checkbox");
elephantCheck.setAttribute("name","elephantCheck");
elephantLabel.prepend(elephantCheck);

const antelopeLabel = document.createElement('label');
antelopeLabel.innerText = "Антилопа";
listOfAnimals.append(antelopeLabel);

const antelopeCheck = document.createElement('input');
antelopeCheck.setAttribute("type","checkbox");
antelopeCheck.setAttribute("name","antelopeCheck");
antelopeLabel.prepend(antelopeCheck);

const doveLabel = document.createElement('label');
doveLabel.innerText = "Голубь";
listOfAnimals.append(doveLabel);

const doveCheck = document.createElement('input');
doveCheck.setAttribute("type","checkbox");
doveCheck.setAttribute("name","doveCheck");
doveLabel.prepend(doveCheck);

const crabLabel = document.createElement('label');
crabLabel.innerText = "Краб";
listOfAnimals.append(crabLabel);

const crabCheck = document.createElement('input');
crabCheck.setAttribute("type","checkbox");
crabCheck.setAttribute("name","crabCheck");
crabLabel.prepend(crabCheck);

//Sended button

const sendButton = document.createElement('button');
sendButton.innerText = "Отправить информацию"
infoForm.append(sendButton);