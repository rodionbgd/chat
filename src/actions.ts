import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getMessagesList, sendMessage } from "./message_api";
import { Message, State } from "./types";

type ThunkType = ActionCreator<ThunkAction<Promise<Action>, State, any, any>>;

export const setName: ActionCreator<Action> = (name: string) => ({
  type: "SET_NAME",
  payload: name,
});

export const addLastMessage: ActionCreator<Action> = (message: Message) => ({
  type: "ADD_LAST_MESSAGE",
  payload: message,
});
export const createGetMessagesAction: ActionCreator<Action> = (
  messages: Message[]
) => ({
  type: "GET_MESSAGES",
  payload: messages,
});

export const getMessages: ThunkType =
  () =>
  async (dispatch: Dispatch<any>): Promise<any> => {
    const messages = await getMessagesList();
    dispatch(createGetMessagesAction(messages));
  };

export const createSendMessageAction: ActionCreator<Action> = (
  message: Message
) => ({
  type: "SEND_MESSAGE",
  payload: message,
});

export const sendMessageThunk: ThunkType =
  (message: Message) =>
  async (dispatch: Dispatch<any>): Promise<any> => {
    await sendMessage(message);
    dispatch(createSendMessageAction(message));
  };
