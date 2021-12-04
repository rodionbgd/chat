import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getMessagesList } from "./message_api";
import { Message, State } from "./types";

const createGetMessagesAction: ActionCreator<Action> = (
  messages: Message[]
) => ({
  type: "GET_MESSAGES",
  payload: messages,
});

export const setName: ActionCreator<Action> = (name: string) => ({
  type: "SET_NAME",
  payload: name,
});

export const getMessages: ActionCreator<
  ThunkAction<Promise<Action>, State, any, any>
> =
  () =>
  async (dispatch: Dispatch<any>): Promise<any> => {
    const messages = await getMessagesList();
    dispatch(createGetMessagesAction(messages));
  };
