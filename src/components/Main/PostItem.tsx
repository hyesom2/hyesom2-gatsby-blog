import styled from '@emotion/styled';
import { Link } from 'gatsby';

type PostItemProps = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: string;
  link: string;
};

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const PostItemContent = styled.div`
  position: relative;
  padding: 8px;

  &:hover {
    font-weight: 700;
  }
`;

const Title = styled.h2`
  display: -webkit-box;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: 400;
`;

const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`;

const CategoryItem = styled.li`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #000;
  border-radius: 4px;
  padding: 3px 5px;
  margin: 2.5px 5px;
`;

const Summary = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  color: gray;
`;

export default function PostItem({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}: PostItemProps) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage src={thumbnail} alt={title} />

      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
}
