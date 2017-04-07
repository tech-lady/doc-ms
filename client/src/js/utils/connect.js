import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapStateToProps = state => ({
  doc: state[state]
});

const mapDispatchToProps = (dispatch) => ({
  getDoc: bindActionCreators(action, dispatch)
});

const connectReact = (state, action, component) => {}
  connect(mapStateToProps, mapDispatchToProps)(component);

export default connectReact;
