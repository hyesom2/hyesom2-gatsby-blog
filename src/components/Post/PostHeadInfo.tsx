import styled from '@emotion/styled';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px;
  color: var(--color-white);
`;

const PostTitle = styled.div`
  display: block;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 700;
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export default function PostHeadInfo({
  title,
  date,
  categories,
}: PostHeadInfoProps) {
  return (
    <PostHeadInfoWrapper>
      <PostTitle>{title}</PostTitle>
      <PostData>
        <span>{date}</span>
        <span>{categories.join(', ')}</span>
      </PostData>
    </PostHeadInfoWrapper>
  );
}
