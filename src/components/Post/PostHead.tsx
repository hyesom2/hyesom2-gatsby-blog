import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo';

type GatsbyImageProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData;
};

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const BackgroundHeadImage = styled((props: GatsbyImageProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.7);
`;

export default function PostHead({
  title,
  date,
  categories,
  thumbnail,
}: PostHeadProps) {
  return (
    <PostHeadWrapper>
      <BackgroundHeadImage image={thumbnail} alt="Post thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
}
