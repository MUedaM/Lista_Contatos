import styled from 'styled-components'

export const Lista = styled.main``

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 100%;
  }
`
