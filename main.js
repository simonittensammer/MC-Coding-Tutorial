const { app, BrowserWindow } = require('electron');
const { shell } = require('electron');

// Open a local file in the default app
shell.openItem(app.getAppPath() + '/server/run.bat');

// Behalten Sie eine globale Referenz auf das Fensterobjekt. 
// Wenn Sie dies nicht tun, wird das Fenster automatisch geschlossen, 
// sobald das Objekt dem JavaScript-Garbagekollektor übergeben wird.

let win

function createWindow () {
  // Erstellen des Browser-Fensters.
  win = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Blende das Standart-Menü aus
  win.setMenu(null);

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Öffnen der DevTools.
  //win.webContents.openDevTools()

  // Ausgegeben, wenn das Fenster geschlossen wird.
  win.on('closed', () => {
    // Dereferenzieren des Fensterobjekts, normalerweise würden Sie Fenster
    // in einem Array speichern, falls Ihre App mehrere Fenster unterstützt. 
    // Das ist der Zeitpunkt, an dem Sie das zugehörige Element löschen sollten.
    win = null
  })
}

// Diese Methode wird aufgerufen, wenn Electron mit der
// Initialisierung fertig ist und Browserfenster erschaffen kann.
// Einige APIs können nur nach dem Auftreten dieses Events genutzt werden.
app.on('ready', createWindow)

// Verlassen, wenn alle Fenster geschlossen sind.
app.on('window-all-closed', () => {
  // Unter macOS ist es üblich, für Apps und ihre Menu Bar
  // aktiv zu bleiben, bis der Nutzer explizit mit Cmd + Q die App beendet.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Unter macOS ist es üblich ein neues Fenster der App zu erstellen, wenn
  // das Dock Icon angeklickt wird und keine anderen Fenster offen sind.
  if (win === null) {
    createWindow()
  }
})