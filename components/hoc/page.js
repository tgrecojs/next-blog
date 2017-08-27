import { nextConnect } from '../../store/index';
import { compose } from 'redux';
import withMui from './styles/withStyles';

export default Component => compose(
  nextConnect(state => state),
  // withGoogle,
  // withEnv,
  withMui
)(Component);
