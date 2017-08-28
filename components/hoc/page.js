import { nextConnect } from '../../store/index';
import { compose } from 'redux';
import withMui from './styles/withStyles';
import withGoogle from '../hoc/env/google/googleEnv.component'
import { initializeBlog } from '../blog/blogroll/reducer';
export default Component => compose(
  nextConnect(state => state, { initializeBlog }),
   withGoogle,
  // withEnv,
  withMui
)(Component);
