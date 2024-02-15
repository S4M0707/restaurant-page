import { createHome, createMenu, createAbout } from './content_page/content'
import './index.css';

(function() {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const about = document.getElementById('about');
    const content = document.getElementById('content');

    function selection(event) {
        let buttons = [home, menu, about];
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].value = "unselected";
            content.innerHTML = "";
        }

        event.target.value = "selected";
        displayContent(event.target.id);
    };

    function displayContent(id) {
        if (id === 'home')
            content.appendChild(createHome());
        if (id === 'menu')
            content.appendChild(createMenu());
        if (id === 'about')
            content.appendChild(createAbout());
    }

    home.addEventListener('click', selection);
    menu.addEventListener('click', selection);
    about.addEventListener('click', selection);

    displayContent('home');
})();