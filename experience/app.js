"use strict";
$(document).ready(function () {


    // $('h1').click(function (e) { 
    //     e.preventDefault();
    //     $('.btn').html('necesen');
    // });


    // $('.btn').click(function (e) { 
    //     e.preventDefault();

    //     let a = a => {
    //         for (let i = 0; i <= a; i++) {
    //             $('.col-md-12').append(`<h1>${i}</h1>`);

    //         }
    //     }
    //     a($('input').val())
    // });

    $('.btn').click(function (e) {
        e.preventDefault();
        let k = v => {for (let i = 0; i<v; i++) 
            { $('.box').append(`<h3>${v}</h3>`)}
                
            }
        let z = e => Number(e) ? k(e) : $('.box').append(`<h3>${e}</h3>`)
            
        z($('input').val())
    });









});