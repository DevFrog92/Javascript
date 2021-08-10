const CryptoJS = require("crypto-js")
const input = "3db4baf2e55cd8d72f29acd0552e5e1181a135b21b01a5b99fd0efed74660fe46c8004af332e3edeaab62fb86ad1f549"

const cbcDecrypt = (cipherText) => {
  const keyP = "traitisnotatrait"
  let key = CryptoJS.enc.Utf8.parse(keyP)
  console.log(typeof cipherText)

  let hexString = CryptoJS.enc.Hex.parse(cipherText)
  let srcs = CryptoJS.enc.Base64.stringify(hexString)

  let text = CryptoJS.AES.decrypt(srcs, key, {
    iv: key,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8)
  
  return text
}

console.log('answer',cbcDecrypt(input))