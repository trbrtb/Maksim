$('#sync1').html($('#sync2').html());
$('.qwe1').addClass('list');
// $('.qwe1 > div').addClass('none');

function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
var pics = document.querySelectorAll('.list > div');
for (let i = 0; i < 3; ++i) {
    // let divIndex = getRandomValue[i];
    // (divIndex).show();
    getRandomValue(pics).style.display = 'block';
}


$(function () {

    $('#sync1').html($('#sync2').html());

    let divs = $('.qwe1 > div');
    let indexes = _.shuffle(_.range(divs.length));

    for (let i = 0; i < 3; ++i) {
      let divIndex = indexes[i];
      divs.eq(divIndex).show();
    }

});