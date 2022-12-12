import * as S from './styles'

const Main = ({
  title = 'First Component',
  subtitle = 'Components de testes com styled components'
}) => (
  <S.Wrapper>
    <S.Logo src="/vercel.svg" alt="logo provisória" />
    <S.Title>{title}</S.Title>
    <S.Description>{subtitle}</S.Description>
  </S.Wrapper>
)
export default Main
