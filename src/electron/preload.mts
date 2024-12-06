// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// To fix the window types in the renderer, remember to add the signatures of this file in the src/types.d.ts file

// https://www.electronjs.org/docs/latest/tutorial/esm#preload-scripts
// IMPORTANT: If you change this file, remember to update the src/ui/types.d.ts file.

import { contextBridge } from "electron";
import { simpleMessageApi } from "./apis/ipc.api.js";
import { ContextBridgeWindowKeys } from "./models/ipc.models.js";

contextBridge.exposeInMainWorld(ContextBridgeWindowKeys.KEY1, simpleMessageApi);
