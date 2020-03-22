/* 2) Пользователь вводит пароль через prompt(пароль придумайте сами)
Создайте 2 класса: Первый принимает "пароль", проверяет его и если пароль верный, 
дергает метод showCorrect второго класса, которые выводит в консоль "Пароль верный",
если пароль не верный, дергает метод второго класса showIncorrect и выводит "Пароль неверный". 
Методы второго класса лучше сделать статическими. Используйте ES6 для красоты) */

class Password {

    constructor(password) {
        this.password = password;
    }

    validation() {

        this.password === "123" ? Show.showCorrect() : Show.showIncorrect();

    }           

}

class Show {

    static showCorrect() {

        console.log('Password is correct');

    }

    static showIncorrect() {

        console.log('Password is incorrect');

    }
    
}

let firstUser = new Password(prompt('Enter your password:'));

//console.log(firstUser);
//console.log(Password);

firstUser.validation();


