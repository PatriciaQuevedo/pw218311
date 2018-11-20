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

//Constantes para imprimir en PDF ......son fijas se pueden utilizar en cualquier proyecto
const electron=require('electron');
//Sistema de archivos
const fs=require("fs");
//Sistema Operativo
const os=require('os');
//Aplicar una constante para llamado interno/remoto
//IPC = llamada a un procedimiento interno
const ipc=electron.ipcMain;
//Acceder a la terminal o linea de comandos
const shell= electron.shell;


function muestraPantallaPrincipal() {
	// creamos una pantalla vacia
	PantallaPrincipal=new BrowserWindow({width:1024,height:450})
	//le damos contenido a esa pantalla
	PantallaPrincipal.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//mostrar la pantalla
	PantallaPrincipal.show();
}

//funcion que vamoos a declarar es un evento
//Evento para PDF (declaracion)
ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
				if(error){
					throw error
				}
				shell.openExternal('file://'+pdfPath)
		})
	})
})

app.on('ready',muestraPantallaPrincipal);