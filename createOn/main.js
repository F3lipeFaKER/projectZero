'use strict'

const menuSize  = '250px';

document.querySelector('#btnmenu').addEventListener('click', e => {


    document.querySelector('#menu').style.display = 'block'

    document.querySelector('#menu').style.marginLeft = 0; 

});

document.querySelector('#btnclose').addEventListener('click', e => {



    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;

});

