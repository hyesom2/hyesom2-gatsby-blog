import { useEffect, useRef, useState } from 'react';

const TYPING_SPEED = 100;
const TYPING_DELETE_SPEED = 60;
const TYPING_DELAY = 1500;

export function useTypingEffect(texts: string[]) {
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
