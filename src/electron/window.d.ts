import { simpleMessageApi } from "./apis/ipc.api";
import { ContextBridgeWindowKeys } from "./models/ipc.models";

declare global {
    interface Window {
        [ContextBridgeWindowKeys.KEY1]: typeof simpleMessageApi;
    }
}
