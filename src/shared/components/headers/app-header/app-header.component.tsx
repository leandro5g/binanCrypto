import { Container, TitleHeader } from './app-header.styles'

type AppHeaderProps = {
  title?: string
}

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return (
    <Container>
      <TitleHeader variant="H2">{title}</TitleHeader>
    </Container>
  )
}

export { AppHeader }
