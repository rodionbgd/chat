import { AnyAction } from "redux";
import { initialState } from "./index";

export default function chattingReducer(
  state = initialState,
  action: AnyAction
) {
  const namesSet: Set<any> = new Set();
  let avatars: Record<string, string> = {};
  const AVATAR_NUMBER = 9;
  let nameIterator = 0;
  switch (action.type) {
    case "GET_MESSAGES":
      action!.payload.forEach((message: any) => {
        if (typeof message.name === "string") namesSet.add(message.name);
      });
      namesSet.forEach((name: string) => {
        avatars[name] = `${(nameIterator % AVATAR_NUMBER) + 1}`;
        nameIterator += 1;
      });
      return {
        ...state,
        messagesList: action!.payload,
        avatars,
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        messagesList: [...state.messagesList, action!.payload],
        lastMessage: action!.payload,
      };
    case "ADD_AVATAR":
      avatars = { ...state.avatars };
      avatars[`${action!.payload as string}`] = `${
        (Object.keys(avatars).length % AVATAR_NUMBER) + 1
      }`;
      return {
        ...state,
        avatars,
      };
    case "ADD_LAST_MESSAGE":
      avatars = { ...state.avatars };
      if (!avatars[action!.payload.name]) {
        avatars[action!.payload.name] = `${
          (Object.keys(state.avatars).length % AVATAR_NUMBER) + 1
        }`;
      }
      return {
        ...state,
        lastMessage: action!.payload,
        avatars,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action!.payload,
      };
    default:
      return state;
  }
}
