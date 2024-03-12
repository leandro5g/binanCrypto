import { FC, useCallback } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { UseQueryResult } from '@tanstack/react-query'

import { Container, List } from './hoc-list.styles'

type ElementProps<T> = {
  data: T
}

type HocListProps<T, R> = {
  element: FC<ElementProps<T>>
  fetcher(): UseQueryResult<R, Error>
}

function hocList<P, R>({ element: Element, fetcher }: HocListProps<P, R>) {
  const { data } = fetcher()

  const renderItem = useCallback(({ item }: ListRenderItemInfo<P>) => {
    return <Element data={item} />
  }, [])

  return (
    <Container>
      <List<P>
        data={data?.data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
      />
    </Container>
  )
}

export { hocList }
