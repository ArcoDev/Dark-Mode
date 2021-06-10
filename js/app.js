const boton = document.querySelector('#boton');
/*Con macthMedia, detectaremos el tema que tiene el equipo*/
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
boton.addEventListener('click', () => {
    console.log(configUser.matches);
    if(configUser.matches) {
        //entramos con modo oscuro
        document.body.classList.toggle('light-theme');
    } else {
        document.body.classList.toggle('dark-theme');
    }
});