/* eslint-disable import/default */

import './styles/about-page.css';
import './styles/styles.scss';
import hello from './js/hello';
import Elm from './elm/Main.elm';

hello('from index');
var app = Elm.Main.embed(document.getElementById('main'));
