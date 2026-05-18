import styled from '@emotion/styled';
import ProfileImg from '@images/logo.png';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { PostFrontmatterType } from 'src/types/PostItem.types';

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  gap: 20px;
`;

const PostItemHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: block;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const CategoryItem = styled.li`
  font-size: 12px;
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-black);
  border-radius: 4px;
  padding: 4px 6px;
`;

const PostItemContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;

  &:hover {
    font-weight: 700;
  }
`;

const ProfileImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid var(--color-gray);
  border-radius: 50%;
`;

const PostItemEtc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
`;

const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: gray;
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
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: PostFrontmatterType) {
  return (
    <PostItemWrapper to={link || '#'}>
      <PostItemHeader>
        <ThumbnailImage image={gatsbyImageData} alt={title} />
        <Title>{title}</Title>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
      </PostItemHeader>

      <Summary>{summary}</Summary>

      <PostItemContent>
        <ProfileImage src={ProfileImg} alt="작성자 프로필 이미지" />
        <PostItemEtc>
          <span>혜솜2</span>
          <Date>{date}</Date>
        </PostItemEtc>
      </PostItemContent>
    </PostItemWrapper>
  );
}
