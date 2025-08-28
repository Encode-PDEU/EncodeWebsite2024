import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_CRYPTOJS_SECRET_KEY;

const encryptAuthData = (data) => {
  const strData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(strData, SECRET_KEY).toString();
};

const decryptAuthData = (cipherText) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedStr);
  } catch (error) {
    return null;
  }
};

const isAuthenticated = () => {
  const cipherText = localStorage.getItem("auth");
  if (!cipherText) return false;
  
  const auth = decryptAuthData(cipherText);
  if (!auth || !auth.status) return false;
  
  const now = new Date().getTime();
  if (now > auth.expiryToken) {
    localStorage.removeItem("auth");
    return false;
  }

  return true;
};

export {isAuthenticated, encryptAuthData}