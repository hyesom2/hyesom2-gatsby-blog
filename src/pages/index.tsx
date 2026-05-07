import styled from '@emotion/styled';
import GlobalStyle from '../components/Common/GlobalStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function IndexPage() {
  return (
    <Container>
      <GlobalStyle />
    </Container>
  );
}
