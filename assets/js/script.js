//crea función IIFE asigna la url del video a el elemento html con la id proporcionada
let privada = (() => {
    let asignacion = (urlPriv,idPriv) => {
        document.getElementById(idPriv).setAttribute('src',urlPriv);
    }
    return{
        publica: (urlPub,idPub) => {
            asignacion(urlPub,idPub);
        } 
    } 
})();

//crea clase Multimedia
class Multimedia{
    _url = '';
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    }
    //getter
    get url(){
        return this.getUrl();
    }
    setInicio = () => {
        return `Este método es para realizar un cambio en la URL del video`
    }
}
//crea clase Reproductor heredando a Multimedia
class Reproductor extends Multimedia{
    id = '';
    constructor(url,id){
        super(url);
        this.id = id;
    }
    //llama a función publica dentro de función privada con los parámetros ingresados a la instancia de Reproductor
    playMultimedia = () => {
        privada.publica(this.url,this.id);
    }
    //llama a función publica dentro de función privada con los parámetros ingresados a la instancia de Reproductor, agrega un sufijo a la url ingresada para indicar retraso a la reproducción
    setInicio = (tiempo) => {
        let urlTiempo = this.url.concat(`?start=${tiempo}`);
        privada.publica(urlTiempo,this.id);
        return urlTiempo;
    }
}

//crea instancias de Reproductor para cada id
let musica1 = new Reproductor('https://www.youtube.com/embed/GI6CfKcMhjY','musica');
let peliculas1 = new Reproductor('https://www.youtube.com/embed/XHk5kCIiGoM','peliculas');
let series1 = new Reproductor('https://www.youtube.com/embed/nrC_QzwyQco','series');
console.log(`URL musica 1 ${musica1.url}`);
console.log(`ID musica 1 "${musica1.id}"`);

//llama a funciones playMultimedia en los reproductores
musica1.playMultimedia();
peliculas1.setInicio(30);     //iniciará el video con a los 30 segundos
series1.playMultimedia();
console.log(`Inicio Película 30s: ${peliculas1.setInicio(30)}`);













