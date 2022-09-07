let changeToCloseIcon = function(icon) {
    icon = document.getElementById('ham');
    icon.classList.toggle('fa-times');
}

let navbarNav = document.getElementById('navbarNav');
fetch('assets/json/menu_en.json')
.then(response => response.json())
.then(data => {
    for(let i=0; i < data.navitems.length; i++){
        navbarNav.insertAdjacentHTML('afterend', 
        '<ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="'+ data.navitems[i].href +'">'+'<span class="link-underline link-underline-black">'+ data.navitems[i].txt +'</span></a></li></ul>')
    }
}) 

// const obj = JSON.parse(jsonData);
// document.getElementById("demo").innerHTML = obj.nav-items[1].href + " " + obj.nav-items[1].txt;