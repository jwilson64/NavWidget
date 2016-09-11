var navMenu = document.getElementById('menu-icon');
navMenu.addEventListener('click', setMenuActive, false);
var a = document.getElementById('menu-list').getElementsByTagName('a');
for (var x = 0; x < a.length; x++){
	a[x].addEventListener('click', setMenuActive, false);
  console.log(a[x]);
}

function setMenuActive() {
  if (navMenu.className.indexOf('is-active') <= -1) {
    navMenu.className += " is-active";
    document.getElementById('menu-list').className += "is-active";
  } else {
    navMenu.className = "lpt-nav-toggle";
    document.getElementById('menu-list').className = "";
  }
};
