import { connect } from 'react-redux';
import { fetchOffers } from '../../../lib/actions/shoppingCart/commercialOffers';
import { approveCart, cancelCheckout, resetCart } from '../../../lib/actions/shoppingCart';
import Cart from '../presentation/Cart';

const mapStateToProps = (state: any) => {
  const { items, cartStatus } = state.shoppingCartReducer;
  return {
    items: items,
    status: cartStatus,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  getOffers: (items: any[]) => dispatch(fetchOffers(items)),
  approveCart: () => dispatch(approveCart()),
  cancelCheckout: () => dispatch(cancelCheckout()),
  reset: () => dispatch(resetCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
