
const $ = require('jquery');

global.$ = global.jQuery = $;
import 'bootstrap'
import 'jquery-ui/dist/jquery-ui.min'
import './js/theme';
import  './js/bs-init';
import './js/user/makeOrder';
import './js/multiForm'
import '../public/pictures/icon.png'
import 'chart.js'
import './js/user/mdp'

var fullHeight = function() {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
    });

};
fullHeight();

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

