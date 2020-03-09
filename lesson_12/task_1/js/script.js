/*1. напишите 3 конструктора. В первом конструкторе есть три метода: run, go, say. 
Во втором два метода: run,go, но с другим функционалом. 
В третьем конструкторе только статический метод, который создает объекты из конструктора, имя которого указано в параметрах.*/

class FirstAction {

    go() {
        console.log('Go');
    }

    say() {
        console.log('Hi');
    }

    run() {
        console.log('Run');
    }

}

console.log(FirstAction.prototype);


class SecondAction extends FirstAction {

    go() {
        super.go();
        console.log('Go on');
    }

    run() {
        super.run();
        console.log('Run on');
    }

}

console.log(SecondAction.prototype);

class CreateAction {
    
    static action(GetAction) {
        return new GetAction();
    }

}

console.log(CreateAction.prototype);

let action = CreateAction.action(FirstAction);
let action2 = CreateAction.action(SecondAction);

console.log(action,action2);

/*function FirstAction() {

    
}

FirstAction.prototype.go = () => {
    console.log('Go');
}



console.log(FirstAction.prototype);


function SecondAction() {

}

SecondAction.prototype = Object.create(FirstAction.prototype);
SecondAction.prototype.constructor = SecondAction;

console.log(SecondAction.prototype);

class CreateAction {
    constructor(GetAction) {
        return new GetAction();
    }
}

console.log(CreateAction);*/