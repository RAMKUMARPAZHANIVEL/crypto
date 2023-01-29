export function setCryptoCurrencies (list) {
    console.log("action called")
  return {
    type : "SET_CRYPTO_CURRENCIES",
    payload : list,
  }
}