import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { showModalAction, hideModalAction } from '../../components/form/reducer';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import Router from 'next/router';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
const actions = [
  <RaisedButton
  label="Take me to the blog!"
  primary={true}
  fullWidth={true}
  onClick={() => Router.push('/blog')}
/>,
<RaisedButton
label="Take me home!"
secondary={true}
fullWidth={true}
onClick={() => Router.push('/')}
/>];


const DialogExampleSimple = ({modal, showModalAction, hideModalAction}) => {
  return (
    <div>
      <RaisedButton onClick={showModalAction} />
      <Dialog
        title="You're response has been recieved!"
        modal={false}
        actions={actions}
        open={modal}
        
        onRequestClose={hideModalAction}
      >
      Thank you for reaching out! While you're waiting for my response,
      you should take this time to check out some of the awesome content on my blog! 
      </Dialog>
    </div>
  );
};

const mapState = state => ({ modal: state.modal });

export default connect(mapState,
  {
    showModalAction,
    hideModalAction
  }
)(DialogExampleSimple);
