function searchReady() {
  var input = $('#search input');
  input.focus();

  input.keyup(function() {

    var inputVal = $(this).val(),
        strBank = 'directions to the nearest bank',
        strPizza = 'directions to make the best pizza';

    if (
      inputVal.indexOf("directions to the n") >= 0 &&
      strBank.indexOf(inputVal) >= 0
    ) {
      $('.ac').text(strBank).removeClass('ac-hidden');
      $('button').addClass('emoji emoji-bank');
     
    } else if (
      inputVal.indexOf("directions to make the b") >= 0 &&
      strPizza.indexOf(inputVal) >= 0
    ) {
      $('.ac').text(strPizza).removeClass('ac-hidden');
      $('button').addClass('emoji emoji-pizza');
      
    } else {
      $('.ac').addClass('ac-hidden').delay(300).text('');
      $('button').removeClass();
      
    }
  }); 
}

$(document).ready(searchReady);