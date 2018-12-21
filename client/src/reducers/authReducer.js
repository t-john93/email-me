import { FETCH_USER } from "../actions/types";

//returns user login state, returns payload if logged in
//returns false if resolved and not logged in
//returns null if unresolved
export default function (state = null, action) {
   console.log(action);
   switch (action.type) {
      case FETCH_USER: return action.payload || false;
      default: return state;
   }
}