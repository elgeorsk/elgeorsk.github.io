let changeToCloseIcon = function (icon) {
    icon = document.getElementById('ham');
    icon.classList.toggle('fa-times');
}


// let newI = document.createElement('i');

fetch('assets/json/menu_en.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.navitems.length; i++) {
            let navitems = document.getElementById('navitems');
            let newLi = document.createElement('li');
            let newA = document.createElement('a');
            let newSpan = document.createElement('span');
            
            newLi.classList.add('nav-item');

            newA.classList.add('nav-link')
            newA.setAttribute('href', data.navitems[i].href);

            newSpan.classList.add('link-underline');
            newSpan.classList.add('link-underline-black');
            newSpan.innerText = newSpan.textContent = data.navitems[i].txt;

            newLi.appendChild(newA);
            newA.appendChild(newSpan);

            navitems.appendChild(newLi);
        }
    })