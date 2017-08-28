import { injectGlobal } from 'emotion/macro';
import { MQ, FONT_FAMILY } from '../utils/constants';

export default () => injectGlobal`
  html {
    font-family: ${FONT_FAMILY.system} !important;
    font-size: 16px;
    line-height: 1.5;
    @media (min-width: ${MQ.SM}px) {
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
  }
`;
