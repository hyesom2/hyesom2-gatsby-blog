import Template from '@components/Common/Template';
import PostContent from '@components/Post/PostContent';
import PostHead from '@components/Post/PostHead';
import { PostPageItemType } from '@type/PostItem.types';
import { graphql } from 'gatsby';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
};

export default function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateProps) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary, // 나중에 사용할 예정입니다!
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  } = edges[0];

  return (
    <Template>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
    </Template>
  );
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
