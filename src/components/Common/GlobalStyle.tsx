import { Global, css } from '@emotion/react';

const defaultStyle = css`
  :root {
    --color-white: #fff;
    --color-light-gray1: #eff0f3;
    --color-light-gray2: #e4e5e9;
    --color-gray: #c0c0c0;
    --color-dark-gray: #9a9494;
    --color-black: #2b2c34;
    --color-primary: #ffde59;
    --color-secondary: #f8e86d;
  }

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

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: none;
    outline: none;
  }
`;

export default function GlobalStyle() {
  return <Global styles={defaultStyle} />;
}
