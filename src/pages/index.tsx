import styled from '@emotion/styled';
import GlobalStyle from '../components/Common/GlobalStyle';
import Menu from '../components/Common/Menu';
import PostList from '../components/Main/PostList';
import Footer from '../components/Common/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding-top: 60px;
    margin: 0 auto;
  }
`;

export default function IndexPage() {
  return (
    <Container>
      <GlobalStyle />
      <Menu />
      <PostList />
      <Footer />
    </Container>
  );
}
