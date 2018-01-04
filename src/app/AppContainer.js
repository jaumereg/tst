// import { connect } from 'react-redux';

// import { actions as chartActions } from './ducks/chart/chart.actions';

// import App from './App.js';

// const mapStateToProps = (state) => {
//     return ({
//         result: state.chartState.response,
//         loading: state.chartState.isLoading
//     });
// };

// const mapDispatchToProps = (dispatch) => {
//     return({
//         getHistoryByCrypto: (crypto, forex, range, time, limit) => {
//             dispatch(chartActions.getHistoryByCrypto(crypto, forex, range, time, limit));
//         }
//     });
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App);