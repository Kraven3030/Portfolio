const body = document.body

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