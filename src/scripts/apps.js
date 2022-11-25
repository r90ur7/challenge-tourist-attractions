import { Formulario, slick } from './components/Formulario.js'
import  { preview }  from './components/ImagePreview.js'

document.addEventListener("DOMContentLoaded",function() {
    new Formulario();
    new preview();
    slick();
});