import { ICONS_ID_MAP } from 'app/shared/config/constants/icons-id-map'
import { useFetcher } from 'app/shared/hooks/client/useFetch'

export type AssetsCryptoResponse = {
  data: CryptoModel
}

export function getAssetsCryptoService() {
  return useFetcher<AssetsCryptoResponse>({
    url: '/assets',
    params: { limit: 20, ids: ICONS_ID_MAP.toString() },
  })
}
