interface IinitialState {
  items: any;
}

const initialState = {
  items: null,
};

const searchReducer = (state: IinitialState = initialState, action: any) => {
  switch (action.type) {
    case "GET_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchReducer;
