
const $ = require('jquery');

global.$ = global.jQuery = $;
import {navbar} from "./js/navbar";
import 'bootstrap'
import '@popperjs'
import './styles/app.scss';

document.on('load',()=>{
    navbar($);
})