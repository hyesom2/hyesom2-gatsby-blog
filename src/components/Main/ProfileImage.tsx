import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  image-rendering: -webkit-optimize-contrast;

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export default function ProfileImage({ profileImage }: ProfileImageProps) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />;
}
