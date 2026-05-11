import PostItem from '@components/Main/PostItem';
import styled from '@emotion/styled';

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        publicURL: string;
      };
    };
  };
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

type PostListProps = {
  posts: PostType[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem key={id} {...frontmatter} link="https://www.google.co.kr" />
      ))}
    </PostListWrapper>
  );
}
