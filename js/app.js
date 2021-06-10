//Variables
const boton = document.querySelector('#boton');
const body = document.querySelector('body');
/*Con macthMedia, detectaremos el tema que tiene el equipo*/
const configUser = window.matchMedia('(prefers-color-scheme: dark)');

/*LocalStorage para guardar la configuracion del tema al dar click en el boton*/
const localConfig = localStorage.getItem('tema');
if (localConfig === 'dark') {
    body.classList.toggle('dark-theme');
} else if (localConfig === 'light') {
    body.classList.toggle('light-theme');
}

boton.addEventListener('click', () => {
    //console.log(configUser.matches);
    //variable para guardar el tema en el key del localStorage
    let colorTema;
    if (configUser.matches) {
        //entramos con modo oscuro
        body.classList.toggle('light-theme');
        //Utilizando el operador ternario
        colorTema = body.classList.contains('light-theme') ? 'light' : 'dark';
    } else {
        body.classList.toggle('dark-theme');
        colorTema = body.classList.contains('light-theme') ? 'dark' : 'light';
    }
    localStorage.setItem('tema', colorTema);
});