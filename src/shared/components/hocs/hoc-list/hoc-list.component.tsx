import { FC, useCallback } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { UseQueryResult } from '@tanstack/react-query'

import { Container, List } from './hoc-list.styles'

type ElementProps<T> = {
  data: T
  index: number
}

type HocListProps<T, R> = {
  element: FC<ElementProps<T>>
  fetcher(): UseQueryResult<R, Error>
}

function hocList<P, R>({ element: Element, fetcher }: HocListProps<P, R>) {
  const { data } = fetcher()

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<P>) => {
    return <Element index={index} data={item} />
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
