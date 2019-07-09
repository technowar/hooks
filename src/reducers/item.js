export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_ITEM_NAME':
      return action.payload.item;
    default:
      return state;
  }
};
