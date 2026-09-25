const mobileNav = () => {
    const headerBtn = document.querySelector<HTMLElement>('.header__bars');
    const mobileNav = document.querySelector<HTMLElement>('.mobile-nav');

    const mobileLinks = document.querySelectorAll<HTMLElement>('.mobile-nav__link');

    let mobileNavOpen = false;

    if (!headerBtn || !mobileNav) return;

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