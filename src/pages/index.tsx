import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from '../components/Common/GlobalStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
    </Container>
  );
};

export default IndexPage;
