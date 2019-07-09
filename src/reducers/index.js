import ItemReducer from './item';
import UserReducer from './user';

export default ({ item, user }, action) => ({
  item: ItemReducer(item, action),
  user: UserReducer(user, action),
});
