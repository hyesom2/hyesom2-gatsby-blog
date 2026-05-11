import styled from '@emotion/styled';

import PostItem from './PostItem';

const POST_ITEM_DATA = {
  title: '블로그 글 제목 예시',
  date: '2026.05.08',
  categories: ['카테고리1', '카테고리2', '카테고리3'],
  summary:
    '블로그 글 요약 예시입니다. 이 글은 블로그 글 요약 예시입니다.블로그 글 요약 예시입니다. 이 글은 블로그 글 요약 예시입니다.블로그 글 요약 예시입니다. 이 글은 블로그 글 요약 예시입니다.블로그 글 요약 예시입니다. 이 글은 블로그 글 요약 예시입니다.',
  thumbnail:
    'https://cdn.pixabay.com/photo/2023/08/21/23/14/tulips-8205190_1280.jpg',
  link: '<https://www.google.co.kr>',
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

export default function PostList() {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  );
}
