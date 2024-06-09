/* делает ссылку в навигациии активной */
const currentUrl = window.location.pathname;

const currentURLArr = currentUrl.split('/');
const currentUrlLastPathname = currentURLArr[currentURLArr.length - 1];
const linkWithClassNavLink = document.querySelectorAll('.nav-link');

linkWithClassNavLink.forEach(element => {
    if(element.getAttribute('href') == currentUrlLastPathname) {
        element.classList.add("activeLink");
    } else {
        element.classList.remove("activeLink");
    }
});


/* const container = document.querySelector('.containerLink');
container.addEventListener('click', (event) => {
    console.log(container)
    const linkActive = document.querySelector('.activeLink');
    if (linkActive) {
        linkActive.classList.remove('activeLink');
    }
    const target = event.target;
    console.log(target.nodeName == "A");
    if (target.nodeName == "A") {
        target.classList.add("activeLink");
    }
}) */
/* конец скрипта с активной ссылкой */