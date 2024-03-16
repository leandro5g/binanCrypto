import { FC, useCallback } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { UseQueryResult } from '@tanstack/react-query'

import { Container, List } from './hoc-list.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { Loading } from '../../loading/loading/loading.component'

type ElementProps<T> = {
  data: T
  index: number
}

type HocListProps<T, R> = {
  element: FC<ElementProps<T>>
  fetcher(): UseQueryResult<R, Error>
}

function hocList<P, R>({ element: Element, fetcher }: HocListProps<P, R>) {
  const { bottom, top } = useSafeAreaInsets()
  const { data, isLoading } = fetcher()

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<P>) => {
    return <Element index={index} data={item} />
  }, [])

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <List
          data={data?.data}
          contentContainerStyle={{
            paddingBottom: bottom + RFValue(80),
            paddingTop: RFValue(60) + top,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderItem}
        />
      )}
    </Container>
  )
}

export { hocList }
