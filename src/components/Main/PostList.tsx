import PostItem from '@components/Main/PostItem';
import styled from '@emotion/styled';
import type { PostListItemType } from '@type/PostItem.types';

type PostListProps = {
  posts: PostListItemType[];
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

export default function PostList({ posts }: PostListProps) {
  return (
    <PostListWrapper>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem key={id} link={slug} {...frontmatter} />
        ),
      )}
    </PostListWrapper>
  );
}
