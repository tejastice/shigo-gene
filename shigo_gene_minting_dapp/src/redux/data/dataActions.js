// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {

      const blockchain = store.getState().blockchain
      let totalSupply = await store.getState().blockchain.smartContract.methods.totalSupply().call();
      let userMintedAmount = await store.getState().blockchain.smartContract.methods.getUserMintedAmount(blockchain.account).call()
      let paused = await store.getState().blockchain.smartContract.methods.paused().call();
      let onlyAllowlisted = await store.getState().blockchain.smartContract.methods.onlyAllowlisted().call()
      let maxMintAmountPerTransaction = await store.getState().blockchain.smartContract.methods.maxMintAmountPerTransaction().call();
      let mintCount = await store.getState().blockchain.smartContract.methods.mintCount().call()
      let publicSaleMaxMintAmountPerAddress = await store.getState().blockchain.smartContract.methods.publicSaleMaxMintAmountPerAddress().call()
      let allowlistUserAmount = await store.getState().blockchain.smartContract.methods.getAllowlistUserAmount(blockchain.account).call()
      let allowlistType = await store.getState().blockchain.smartContract.methods.allowlistType().call()

      dispatch(
        fetchDataSuccess({
          totalSupply,
          userMintedAmount,
          paused,
          onlyAllowlisted,
          maxMintAmountPerTransaction,
          mintCount,
          publicSaleMaxMintAmountPerAddress,
          allowlistUserAmount,
          allowlistType,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
