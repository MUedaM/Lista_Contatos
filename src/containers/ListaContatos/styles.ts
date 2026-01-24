import styled from 'styled-components'

export const Lista = styled.main``

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 504px 504px;
  gap: 16px;

  @media (max-width: 1023px) {
    grid-template-columns: 100%;
  }
`
