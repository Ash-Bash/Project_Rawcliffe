import { BrowserWindow } from 'electron';

const path = require('path')
const url = require('url');

export default class Main {
    
    // Variables
    static mainWindow: Electron.BrowserWindow;
    static app: Electron.App;
    static BrowserWindow;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.app.quit();
        }
    }

    private static onClose() {
        Main.mainWindow = null;
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ width: 1024, height: 768, protocol: 'file:', slashes: true});
        Main.mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, "html/index.html"),
            protocol: 'file:',
            slashes: true
          }));
        
        Main.mainWindow.on('closed', Main.onClose);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        Main.BrowserWindow = browserWindow;
        Main.app = app;
        Main.app.on('window-all-closed', Main.onWindowAllClosed);
        Main.app.on('ready', Main.onReady);
    }
}