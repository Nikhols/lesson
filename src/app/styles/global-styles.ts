import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Manrope", "Segoe UI", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.pageBackground};
    transition:
      color 0.25s ease,
      background 0.25s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    min-height: 100vh;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  code,
  pre {
    font-family: "JetBrains Mono", "SFMono-Regular", monospace;
  }
`;
