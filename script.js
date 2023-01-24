const body = document.body
const btnHamburger = document.querySelector('.fa-bars')

const displayList = () => {
    const navUl = document.querySelector('.nav__list')

    if (btnHamburger.classList.contains('fa-bars')) {
        btnHamburger.classList.remove('fa-bars')
        btnHamburger.classList.add('fa-times')
        navUl.classList.add('display-nav-list')
    } else {
        btnHamburger.classList.remove('fa-times')
        btnHamburger.classList.add('fa-bars')
        navUl.classList.remove('display-nav-list')
    }
}
btnHamburger.addEventListener('click', displayList)


const scrollUp = () => {
    const btnScrollTop = document.querySelector('.scroll-top')

    if (
        body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        btnScrollTop.style.display = 'block'
    } else {
        btnScrollTop.style.display = 'none'
    }
}

document.addEventListener('scroll', scrollUp)