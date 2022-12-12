import styled from 'styled-components'

export const Wrapper = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  align-items: center;
  background-color: orange;
  min-height: 100vh;
  min-width: 100vw;
`

export const Title = styled.h1`
  display: flex;
  font-size: 2.5rem;
  justify-content: center;
  align-items: center;
  color: #222;
`
export const Description = styled.p`
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  color: #222;
`
export const Logo = styled.img`
  margin-top: 40px;
  display: flex;
  width: 25%;
`
