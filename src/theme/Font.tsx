import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
        /* 제주돌담체 */
        @font-face {
          font-family: 'EF_jejudoldam';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        /* 망고보드체 */
        @font-face {
          font-family: 'MangoDdobak-B';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/MangoDdobak-B.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
      }
    `}
	/>
);

export default Fonts;
