window.addEventListener('load', function ()  {
    console.log('Page has finished loading');
    const preloader = document.querySelector('.preloader');
    const spinner = document.querySelector('.spinner')
    preloader.classList.remove('preloader');
    spinner.classList.remove('spinner');
});
