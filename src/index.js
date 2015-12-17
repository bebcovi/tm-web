/* eslint-env browser */
import { render } from 'react-dom';
import routes from './routes';
import 'bootstrap/scss/bootstrap-reboot.scss';

render(routes, document.getElementById('root'));
