import ProfileImage from '@components/Main/ProfileImage';
import styled from '@emotion/styled';
import { useTypingEffect } from '@hooks/useTypingEffect';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const TYPING_TEXT = ['FrontEnd', 'Next.js', 'React', 'TypeScript'];

function TypingDisplay({ texts }: { texts: string[] }) {
  const typingText = useTypingEffect(texts);
  return <TypingText>{typingText}</TypingText>;
}

const Background = styled.section`
  width: 100%;
  background-color: var(--color-white);
  color: var(--color-black);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    height: 400px;
    padding: 0;
  }
`;

const Description = styled.p`
  font-size: 20px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const TypingText = styled.strong`
  color: var(--color-primary);
  font-weight: 700;
  border-right: 2px solid var(--color-primary);
  padding-right: 2px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    0%,
    100% {
      border-color: var(--color-primary);
    }
    50% {
      border-color: transparent;
    }
  }
`;

export default function Introduction({ profileImage }: IntroductionProps) {
  return (
    <Background aria-label="블로그 소개">
      <Wrapper>
        <Description>
          안녕하세요!
          <br />
          <TypingDisplay texts={TYPING_TEXT} />를 좋아하는
          <br />
          개발자 김현주 입니다.
        </Description>

        <ProfileImage profileImage={profileImage} />
      </Wrapper>
    </Background>
  );
}
