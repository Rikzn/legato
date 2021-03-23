import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})

slider = new juxtapose.JXSlider('#slider-tablecloth',
    [
        {
            src: 'https://example.com/firstimage.jpg',
            label: '2009',
            credit: 'Image Credit'
        },
        {
            src: 'https://example.com/secondimage.jpg',
            label: '2014',
            credit: "Image Credit"
        }
    ],
    {
        animate: true,
        showLabels: true,
        showCredits: true,
        startingPosition: "50%",
        makeResponsive: true,
        width: 450
    });
