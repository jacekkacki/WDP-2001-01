import { connect } from 'react-redux';
import Icons from './Icons';
import { getAll, addToCompare, removeFromCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: payload => dispatch(addToCompare(payload)),
  removeFromCompare: payload => dispatch(removeFromCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Icons);
