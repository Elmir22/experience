"use strict";
$(document).ready(function () {


    // $('h1').click(function (e) { 
    //     e.preventDefault();
    //     $('.btn').html('necesen');
    // });


    $('.btn').click(function (e) { 
        e.preventDefault();
        
        let a = a => {
            for (let i = 0; i <= a; i++) {
                $('.col-md-12').append(`<h1>${i}</h1>`);
                
            }
        }
        a($('input').val())
    });









});