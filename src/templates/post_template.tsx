import Template from '@components/Common/Template';
import { graphql } from 'gatsby';

type PostTemplateProps = {};

export default function PostTemplate(props: PostTemplateProps) {
  console.log(props);

  return <Template>Post Template</Template>;
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
