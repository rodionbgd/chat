import chattingReducer from "./reducer";
import { initialState } from "./index";
import { Message, State } from "./types";

describe("Reducer testing", () => {
  let messages: Message[] = [];
  let state: State;
  const MESSAGES_NUMBER = 5;
  beforeEach(() => {
    messages = [];
    for (let i = 0; i < MESSAGES_NUMBER; i += 1) {
      messages.push({
        message: `${i}`,
        name: `${2 * i}`,
        date: new Date(),
      });
    }
    state = chattingReducer(initialState, {
      type: "GET_MESSAGES",
      payload: messages,
    });
  });
  describe("Getting all messages", () => {
    test("Getting all messages", () => {
      expect(state.messagesList.length).toBe(messages.length);
      expect(Object.keys(state.avatars).length).toBe(messages.length);
      state = chattingReducer(initialState, { type: "GET_MESSAGES" });
      expect(state).toStrictEqual(initialState);
    });
    test("Set of names in avatars", () => {
      const newMessages = messages.concat(...messages);
      state = chattingReducer(initialState, {
        type: "GET_MESSAGES",
        payload: newMessages,
      });
      expect(state.messagesList.length).toBe(messages.length * 2);
      expect(Object.keys(state.avatars).length).toBe(messages.length);
    });
  });
  test("Sending message", () => {
    const payload = { ...messages[0] };
    state = chattingReducer(state, { type: "SEND_MESSAGE", payload });
    expect(state.lastMessage).toStrictEqual(payload);
    expect(state.messagesList.length).toBe(messages.length + 1);
  });
  test("Getting last message from server", () => {
    const payload = { ...messages[0] };
    payload.name = "name"; // new user
    state = chattingReducer(state, { type: "ADD_LAST_MESSAGE", payload });
    expect(state.lastMessage).toStrictEqual(payload);
    expect(Object.keys(state.avatars).length).toBe(messages.length + 1);
  });
  test("Setting user name", () => {
    const userName = "name";
    state = chattingReducer(state, { type: "SET_NAME", payload: userName });
    expect(state.name).toBe(userName);
  });
});
