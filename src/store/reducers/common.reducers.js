const initState = {};

const commonReducer = (state = initState, action) => {
  switch (action.type) {
    case "SOCIAL_LINK_RESPONSE":
      return { ...state, socialLinks: action.socialLinks };
    default:
      return state;
  }
};

export default commonReducer;
