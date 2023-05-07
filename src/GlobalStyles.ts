import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { COLOR } from './constants/card';

const GlobalStyles = createGlobalStyle` 
  ${reset}
	* {
			box-sizing: border-box;
	}

	body {
		width: 100vw;
		height: 100vh;

		font-family: "Roboto", sans-serif;

		background-color: ${COLOR.TOSS_GREY};
  }

	#root {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
	}

  a {
      text-decoration: none;
      color: inherit;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;
