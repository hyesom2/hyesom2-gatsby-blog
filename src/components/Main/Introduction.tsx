import ProfileImage from '@components/Main/ProfileImage';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useEffect, useRef, useState } from 'react';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const TYPING_TEXT = ['FrontEnd', 'Next.js', 'React', 'TypeScript'];
const TYPING_SPEED = 100;
const TYPING_DELETE_SPEED = 60;
const TYPING_DELAY = 1500;

function useTypingEffect(texts: string[]) {
  const [displayText, setDisplayText] = useState('');
  const textIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const displayTextRef = useRef('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentText = texts[textIndexRef.current];
      const current = displayTextRef.current;

      if (!isDeletingRef.current) {
        const next = currentText.slice(0, current.length + 1);
        displayTextRef.current = next;
        setDisplayText(next);

        if (next === currentText) {
          timeout = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, TYPING_DELAY);
          return;
        }
      } else {
        const next = currentText.slice(0, current.length - 1);
        displayTextRef.current = next;
        setDisplayText(next);

        if (next === '') {
          isDeletingRef.current = false;
          textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        }
      }

      timeout = setTimeout(
        tick,
        isDeletingRef.current ? TYPING_DELETE_SPEED : TYPING_SPEED,
      );
    };

    timeout = setTimeout(tick, TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [texts]);

  return displayText;
}

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
