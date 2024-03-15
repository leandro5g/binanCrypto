import { create } from 'zustand'
import { formatCryptoPrices } from '../utils/masks/format-crypto-prices'

type CryptoPriceState = {
  cryptoPrices: CryptoPrices
  onCryptoPrices: (cryptoPrices: CryptoPrice[]) => void
}

export const useCryptoPricesStore = create<CryptoPriceState>((set) => ({
  cryptoPrices: {},
  onCryptoPrices(cryptoPrices) {
    set({
      cryptoPrices: formatCryptoPrices(cryptoPrices),
    })
  },
}))
