import * as CryptoJS from "crypto-js";

export function encryptData(data: string, key: string): string {
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encrypted;
}

export function decryptData(data: string, key: string): string {
    const decrypted = CryptoJS.AES.decrypt(data, key).toString();
    return decrypted;
}