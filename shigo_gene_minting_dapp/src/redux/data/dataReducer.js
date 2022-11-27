const initialState = {
  loading: false,
  cost: 0,
  totalSupply: 0,
  userMintedAmount: 0,
  onlyAllowlisted: true,
  paused: true,
  maxMintAmountPerTransaction: 1,
  mintCount: true,
  publicSaleMaxMintAmountPerAddress: 10,
  allowlistUserAmount: 1,
  allowlistType: 0,
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        totalSupply: action.payload.totalSupply,
        userMintedAmount: action.payload.userMintedAmount,
        paused: action.payload.paused,
        onlyAllowlisted: action.payload.onlyAllowlisted,
        maxMintAmountPerTransaction: action.payload.maxMintAmountPerTransaction,
        mintCount: action.payload.mintCount,
        publicSaleMaxMintAmountPerAddress: action.payload.publicSaleMaxMintAmountPerAddress,
        allowlistUserAmount: action.payload.allowlistUserAmount,
        allowlistType: action.payload.allowlistType,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
