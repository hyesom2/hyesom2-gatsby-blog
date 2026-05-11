import styled from '@emotion/styled';

import Footer from '../components/Common/Footer';
import GlobalStyle from '../components/Common/GlobalStyle';
import Menu from '../components/Common/Menu';
import CategoryList from '../components/Main/CategoryList';
import PostList from '../components/Main/PostList';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 1,
};

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
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  );
}
