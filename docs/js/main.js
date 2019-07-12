$('#a-toggle1').click(function(){
    $('#a-toggle1').toggleClass('toggle-li');
    $('#a-toggle2').removeClass('toggle-li');
    $('#a-toggle3').removeClass('toggle-li');
    $('#collapse2').removeClass('show');
    $('#collapse3').removeClass('show');
})
$('#a-toggle2').click(function(){
    $('#a-toggle2').toggleClass('toggle-li');
    $('#a-toggle3').removeClass('toggle-li');
    $('#a-toggle1').removeClass('toggle-li');
    $('#collapse1').removeClass('show');
    $('#collapse3').removeClass('show');
})
$('#a-toggle3').click(function(){
    $('#a-toggle3').toggleClass('toggle-li');
    $('#a-toggle2').removeClass('toggle-li');
    $('#a-toggle1').removeClass('toggle-li');
    $('#collapse1').removeClass('show');
    $('#collapse2').removeClass('show');
})
var div = $('.g').css('height');
$('.section4-img1').css({height: div});
$('.section4-img2').css({height: div});
var popBody = $('.pop-header').css('width');
$('.body-length').css({width: popBody});

$('#search-btn').click(function(){
    $('#search-text').removeClass('hidden-pc');
    $('#search-remove').removeClass('hidden-pc');
    $('#search-btn').addClass('hidden-pc');
    $('.hiddenClass').addClass('hidden-pc');
})
$('#search-remove').click(function(){
    $('#search-text').addClass('hidden-pc');
    $('#search-remove').addClass('hidden-pc');
    $('#search-btn').removeClass('hidden-pc');
    $('.hiddenClass').removeClass('hidden-pc');
})


    /* Language for medium */ 

$('.social-button').click(function(){
    $('#pop-up').toggleClass('toggle-pop');
    $('#page').toggleClass('toggle-page');
    $('body').addClass('overflow');
})


$('.remove').click(function(){
    $('#page').removeClass('toggle-page');
    $('#pop-up').removeClass('toggle-pop');
    $('body').removeClass('overflow');
})

   /* Menu button */

$('#burger-wrapper').click(function(){
    $('#burger-wrapper').toggleClass('toggle-button');
    $('#burger-body').toggleClass('menu-open');
    $('body').toggleClass('overflow');
})


$('#explore-li1').click(function(){
    $('#Active-mobile').removeClass('active-mobile');
})
$('#explore-li2').click(function(){
    $('#Active-mobile').removeClass('active-mobile');
})
$('#collapse-btn').click(function(){
    $('#collapse-btn1').removeClass('hidden');
    $('#collapse-btn').addClass('hidden');
})
$('#collapse-btn1').click(function(){
    $('#collapse-btn1').addClass('hidden');
})
           /* Media */


function init(){
    let mobile = window.matchMedia('(max-width: 780px)');
if(mobile.matches){
    $('#menu').addClass('hidden');
    $('#remove-margin').removeClass('m-4');
    $('#remove-margin').addClass('m-2');
}else{
  
}
}
init();
window.addEventListener('resize', init, false);

function init1(){
    let mobile = window.matchMedia('(max-width: 430px)');
if(mobile.matches){
    $('.section4-img2').addClass('order-1');
    $('#social-nav').addClass('hidden');
    $('#social-btn').addClass('relative');
    $('#social-btn').addClass('mx-auto');
    $('#social-btn').addClass('mb-5');
    $('#logo-auto').addClass('mx-auto');
    $('#logo-2').addClass('pl-5');
    $('#pop-up').addClass('hidden');
    $('#menu-icons').addClass('hidden');


        /* Language for mobile */

$('.social-button').click(function(){
    $('#pop-up-mobile').toggleClass('toggle-pop');
        $('body').addClass('overflow');
})
$('.remove').click(function(){
    $('#page').removeClass('toggle-page');
    $('#pop-up-mobile').removeClass('toggle-pop');
    $('body').removeClass('overflow');
})
var popBodyMobile = $('.pop-header-mobile').css('width');
    console.log(popBodyMobile);
$('.body-length').css({width: popBodyMobile});
var langWidth = $('.language-btn').css('width');
$('#mobile-region').css({width: langWidth});
$('.language-btn').click(function(){
    $('#mobile-region').toggleClass('hidden');
})
}else{
  
}
}
init1();
window.addEventListener('resize', init1, false);

function init2(){
    let mobile = window.matchMedia('(max-width: 320px)');
if(mobile.matches){
   $('#mobile-region').css({marginTop: -41 + 'px'});
}else{
  
}
}
init2();
window.addEventListener('resize', init2, false);
           /* Media */
