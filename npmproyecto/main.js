//creamos una ventana
//cargamos la aplicacion de electron
const app=require('electron').app;
//para crear ventanas del S.0
const BrowserWindow=require('electron').BrowserWindow;
//Ruta de los archivos del S.O
const path=require('path');
//cargar como una pagina web
const url=require('url');
//Declarar la variable de la ventana
let PantallaPrincipal; //let es para constantes

function muestraPantallaPrincipal() {
	// creamos una pantalla vacia
	PantallaPrincipal=new BrowserWindow({width:380,height:420})
	//le damos contenido a esa pantalla
	PantallaPrincipal.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//mostrar la pantalla
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal);
