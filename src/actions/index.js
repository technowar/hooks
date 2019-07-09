const ChangeItemName = payload => ({
  type: 'CHANGE_ITEM_NAME',
  payload,
});

const ChangeUserName = payload => ({
  type: 'CHANGE_USER_NAME',
  payload,
});

export {
  ChangeItemName,
  ChangeUserName,
};
