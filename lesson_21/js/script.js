/* Продолжите игру, которую мы делали. Добавьте еще одного персонажа: пусть управление одним будет на буквах(a,w,d,x), 
а управление вторым на стрелках. Когда персонажи сталкиваются, появляется картинка со взрываом. По желанию, сделайте анимацию для взрыва.*/

const $mikki = $('.mikki');
const $jerry = $('.jerry');
const $boom = $('.boom');
const $bang = $('.bang');
const $textOfBang = $('.textOfBang');

$(document).keydown( (key) => {

  switch(parseInt(key.which)) {
    case 39:
      $mikki.animate({
        left: "+=150px"
      },'fast');
      break;
    case 37:
      $mikki.animate({
        left: "-=150px"
      },'fast');
      break;
    case 38:
      $mikki.animate({
        top: "-=150px"
      },'fast');
      break;
    case 40:
      $mikki.animate({
        top: "+=150px"
      },'fast');
      break;
    case 65:
      $jerry.animate({
        right: "+=150px"
      },'fast');
      break;
    case 68:
      $jerry.animate({
        right: "-=150px"
      },'fast');
      break;
    case 87:
      $jerry.animate({
        top: "-=150px"
      },'fast');
      break;
    case 88:
      $jerry.animate({
        top: "+=150px"
      },'fast');
      break;        
  }
  
})

$(document).keyup(() => {
  let topPositionMikki = $mikki[0].getBoundingClientRect().top; 
  let leftPositionMikki = $mikki[0].getBoundingClientRect().left;
  let botomPositionMikki = $mikki[0].getBoundingClientRect().bottom;
  let rightPositionMikki = $mikki[0].getBoundingClientRect().right;

  let widthMikki = $mikki[0].getBoundingClientRect().width/2;
  let heightMikki = $mikki[0].getBoundingClientRect().height/2;


  let topPositionJerry = $jerry[0].getBoundingClientRect().top;
  let leftPositionJerry = $jerry[0].getBoundingClientRect().left;
  let bottomPositionJerry = $jerry[0].getBoundingClientRect().bottom;
  let rightPositionJerry = $jerry[0].getBoundingClientRect().right;
  

  if( topPositionMikki < bottomPositionJerry 
    && botomPositionMikki > topPositionJerry
    && rightPositionMikki > leftPositionJerry 
    && leftPositionMikki < rightPositionJerry) {

      $boom.show();

      let widthBoom = $boom[0].getBoundingClientRect().width/3;
      let heightBoom = $boom[0].getBoundingClientRect().height;

      rightPositionMikki > rightPositionJerry ? 
      $boom.css("left",leftPositionMikki-widthMikki-widthBoom) :
      $boom.css("left",rightPositionMikki-widthMikki-widthBoom);

      topPositionMikki < bottomPositionJerry*0.4 ?
      $boom.css("top",botomPositionMikki-heightMikki-heightBoom/2) :
      topPositionMikki < topPositionJerry ? 
      $boom.css("top",botomPositionMikki-heightMikki-heightBoom/3) :
      $boom.css("top",topPositionMikki-heightMikki-heightBoom/3); 

      setTimeout( () => {
        $boom.hide();

        $jerry.animate({
          top: "0",
          right: "0"
        },'slow');
  
        $mikki.animate({
          top: "0",
          left: "0"
        },'slow');

      } ,1000);     
      
      $bang.show(50);
      $textOfBang.show(100);         
  }  
});