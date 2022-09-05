//import functions
import { initdb, getDb, postDb } from './database';

//import JS files
import './form';
import './submit';

// Import CSS files
import "../css/index.css";

//import Bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

//on load functionality
window.addEventListener('load', function () {
    initdb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});

