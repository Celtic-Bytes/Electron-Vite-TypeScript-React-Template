import { ipcRenderer } from "electron";
import { IpcChannels } from "../models/ipc.models.js";

/**
 * This is just a simple example of IPC comunication between renderer and main process. Change it as you wish.
 */
export const simpleMessageApi = {
    sendMessage: (message: string) => {
        console.log(message);
        return ipcRenderer
            .invoke(IpcChannels.CHANNEL1, "sending message from the renderer")
            .then((response: string) => {
                console.log(response); // Log the response from the main process
                return response;
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    }
};
