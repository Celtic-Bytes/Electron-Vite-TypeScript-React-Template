import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { IpcChannels } from "./models/ipc.models.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(
                app.getAppPath(),
                "dist-electron",
                "preload.mjs"
            ),
            // sandbox: true will make youre preload.mts stop working.
            // check this ur: https://www.electronjs.org/docs/latest/tutorial/esm#preload-scripts
            sandbox: false
        }
    });
    mainWindow.loadFile(
        path.join(app.getAppPath(), "dist-react", "index.html")
    );
    // Remove for production
    mainWindow.webContents.openDevTools();
});

ipcMain.handle(IpcChannels.CHANNEL1, async (event, message: string) => {
    return "message received by the main process";
});
