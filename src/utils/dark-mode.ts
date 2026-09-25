const toggleMode = () => {
    const themeToggleBtns = document.querySelectorAll<HTMLElement>('#theme-toggle');

    const theme = localStorage.getItem('theme');
    theme && document.body.classList.add(theme);

    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        }
        else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    }

    for (let i = 0; i < themeToggleBtns.length; i++) {
        themeToggleBtns[i].addEventListener('click', handleThemeToggle);
    }
}

export default toggleMode;