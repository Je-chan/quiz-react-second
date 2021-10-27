import { combineReducers } from "redux";
import score from "./modules/score";

export default combineReducers({
  // 서브 리듀서는 여기에 적으면 된다
  score,
});
