type IinitialState = string;

const initialState = "xaazUgEKuVA";

const videoReducer = (state: IinitialState = initialState, action: any) => {
  switch (action.type) {
    case "GET_VIDEO":
      return (state = action.payload);
    default:
      return state;
  }
};

export default videoReducer;
