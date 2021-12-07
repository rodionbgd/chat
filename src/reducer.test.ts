import chattingReducer from "./reducer";
import { initialState } from "./index";
import { State } from "./types";
import { messages } from "./__test__/messages";
import {
  addLastMessage,
  createGetMessagesAction,
  createSendMessageAction,
  setName,
} from "./actions";

describe("Reducer testing", () => {
  let state: State;

  beforeEach(() => {
    state = chattingReducer(initialState, createGetMessagesAction(messages));
  });
  describe("Getting all messages", () => {
    test("Getting all messages", () => {
      expect(state.messagesList.length).toBe(messages.length);
      expect(Object.keys(state.avatars).length).toBe(messages.length);
      state = chattingReducer(initialState, createGetMessagesAction());
      expect(state).toStrictEqual(initialState);
    });
    test("Set of names in avatars", () => {
      const newMessages = messages.concat(...messages);
      state = chattingReducer(
        initialState,
        createGetMessagesAction(newMessages)
      );
      expect(state.messagesList.length).toBe(messages.length * 2);
      expect(Object.keys(state.avatars).length).toBe(messages.length);
    });
  });
  test("Sending message", () => {
    const payload = { ...messages[0] };
    state = chattingReducer(state, createSendMessageAction(payload));
    expect(state.lastMessage).toStrictEqual(payload);
    expect(state.messagesList.length).toBe(messages.length + 1);
  });
  test("Getting last message from server", () => {
    const payload = { ...messages[0] };
    payload.name = "name"; // new user
    state = chattingReducer(state, addLastMessage(payload));
    expect(state.lastMessage).toStrictEqual(payload);
    expect(Object.keys(state.avatars).length).toBe(messages.length + 1);
  });
  test("Setting user name", () => {
    const userName = "name";
    state = chattingReducer(state, setName(userName));
    expect(state.name).toBe(userName);
  });
});
