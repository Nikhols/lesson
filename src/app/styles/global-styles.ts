import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    color: #f6efe5;
    background:
      radial-gradient(circle at top left, rgba(255, 196, 117, 0.28), transparent 28%),
      radial-gradient(circle at bottom right, rgba(48, 111, 242, 0.24), transparent 32%),
      linear-gradient(135deg, #17191f 0%, #0f1117 45%, #141a24 100%);
    font-family: "Manrope", "Segoe UI", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    color: #f6efe5;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
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
