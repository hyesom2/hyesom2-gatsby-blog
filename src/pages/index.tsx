import Footer from '@components/Common/Footer';
import GlobalStyle from '@components/Common/GlobalStyle';
import Menu from '@components/Common/Menu';
import CategoryList from '@components/Main/CategoryList';
import PostList, { PostType } from '@components/Main/PostList';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

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

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
      // edges: [
      //   {
      //     node: {
      //       id: string;
      //       frontmatter: {
      //         title: string;
      //         summary: string;
      //         date: string;
      //         categories: string[];
      //         thumbnail: {
      //           publicURL: string;
      //         };
      //       };
      //     };
      //   },
      // ];
    };
  };
};

export default function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
  return (
    <Container>
      <GlobalStyle />
      <Menu />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
