import { Global, css } from '@emotion/react';

const defaultStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    width: 100%;
    height: 100%;
  }

  button,
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default function GlobalStyle() {
  return <Global styles={defaultStyle} />;
}
