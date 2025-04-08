const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false, //
    }


  });

  // const indexPath = isDev
  //   ? 'http://localhost:4200'
  //   : `file://${path.join(__dirname, '/dist/app-sort/browser/index.html')}`;

  // const indexPath = isDev
  //   ? 'http://localhost:4200'
  //   : `file://${path.join(__dirname, 'dist', 'index.html')}`;
  //

  const indexPath = isDev
    ? 'http://localhost:4200'
    : `file://${path.resolve(__dirname, 'dist/index.html')}`;

// Nhớ đổi <project-name> thành tên project Angular thực tế


  win.loadURL(indexPath);

  // 👉 Thêm phần này để debug nếu load lỗi
  win.webContents.on('did-fail-load', (e, errorCode, errorDesc) => {
    console.error('❌ Failed to load:', errorCode, errorDesc);
  });

  win.webContents.openDevTools(); // ❗ Tuỳ chọn: bật dev tools để xem log bên trong
}

app.whenReady().then(() => {
  console.log("✅ App started");
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

console.log('Loading:', path.join(__dirname, 'dist/app-sort/index.html'));

