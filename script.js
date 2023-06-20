const menuBar = document.getElementById('menubar')
const navLink = document.getElementById('navlinks')
const closeMenu = document.getElementById('closemenu')
menuBar.addEventListener ('click', () => {
    navLink.style.display = "flex"
})

closeMenu.addEventListener('click', () => {
    navLink.style.display = 'none'
})