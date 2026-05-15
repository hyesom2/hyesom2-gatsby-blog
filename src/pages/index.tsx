import Template from '@components/Common/Template';
import CategoryList from '@components/Main/CategoryList';
import Introduction from '@components/Main/Introduction';
import PostList from '@components/Main/PostList';
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

export default function IndexPage({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}: IndexPageProps) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  return (
    <Template>
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={CATEGORY_LIST}
      />
      <PostList posts={edges} />
    </Template>
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
        gatsbyImageData(width: 350, height: 350, quality: 100)
      }
    }
  }
`;
