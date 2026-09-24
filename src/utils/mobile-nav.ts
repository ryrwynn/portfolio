const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');

    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    let mobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        if(!mobileNavOpen) { // if false
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
        mobileNavOpen = !mobileNavOpen;

    });

    for(let i = 0; i < mobileLinks.length; i++){
        mobileLinks[i].addEventListener('click', ()=> {
            document.body.style.overflowY = 'auto';
            mobileNav.style.display = 'none';
            mobileNavOpen = !mobileNavOpen;

        });
    }
}

export default mobileNav;