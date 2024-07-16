import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  header {
    background: #282c34;
    padding: 20px;
    color: white;
  }

  footer {
    background: #282c34;
    padding: 10px;
    color: white;
    text-align: center;
  }

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin-right: 10px;
  }

  nav ul li a {
    color: #61dafb;
    text-decoration: none;
  }

  form div {
    margin-bottom: 10px;
  }

  form label {
    display: block;
    margin-bottom: 5px;
  }

  form input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }

  form button {
    background: #61dafb;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  form button:hover {
    background: #21a1f1;
  }
`;

export default GlobalStyle;
