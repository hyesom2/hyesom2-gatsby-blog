import Footer from '@components/Common/Footer';
import GlobalStyle from '@components/Common/GlobalStyle';
import Menu from '@components/Common/Menu';
import CategoryList from '@components/Main/CategoryList';
import PostList from '@components/Main/PostList';
import styled from '@emotion/styled';
import type { PostListItemType } from '@type/PostItem.types';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import queryString, { ParsedQuery } from 'query-string';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};

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

export default function IndexPage({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    // file: {
    // childImageSharp: { gatsbyImageData },
    // },
  },
}: IndexPageProps) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  return (
    <Container>
      <GlobalStyle />
      <Menu />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={CATEGORY_LIST}
      />
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
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;
