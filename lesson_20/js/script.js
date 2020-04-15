/* На экране input и кнопка добавить. После нажатия на кнопку добавить, появляется блок. 
Еще раз - еще один блок. Можно добавить бесконечное кол-во блоков. 
Если написать что-то в инпуте , этот текст отобразиться во всех блоках. */

"use strict"

class EventObserver {
    constructor () {
      this.observers = [];
    }
  
    subscribe (newBlock) {
      this.observers.push(newBlock);
      console.log(this.observers);
    }
 
    broadcast (text) {
      this.observers.forEach(subscriber => subscriber.block.innerText = text);
    }
}

class Subscriber {
      addBlock(text) {
        const container = document.body.querySelector(".container");
        const block = document.createElement("div");   
        block.setAttribute("class", "block");
        block.innerText = text;
        this.block = block;    
        container.append(block);        
      }
}  

document.addEventListener("DOMContentLoaded", function() {

    const observer = new EventObserver();
    
    const addButton = document.body.querySelector("button");
    const input = document.body.querySelector("input");

    function addSubscriber(text) {
        const subscriber = new Subscriber();
        subscriber.addBlock(text);        
        observer.subscribe(subscriber);
    }

    addButton.addEventListener("click", () => addSubscriber(input.value));

    input.addEventListener("input", () => observer.broadcast(input.value));

    
});
