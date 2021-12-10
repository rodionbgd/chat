import { Dispatch } from "redux";
import { init, store } from "./index";
import * as utils from "./actions";
import { createGetMessagesAction, createSendMessageAction } from "./actions";
import { messages } from "./__test__/messages";
import { Message } from "./types";

jest.mock("./message_api");
const sendMessageThunkFn = jest
  .spyOn(utils, "sendMessageThunk")
  .mockImplementation(
    (message: Message) =>
      async (dispatch: Dispatch<any>): Promise<any> => {
        dispatch(createSendMessageAction(message));
      }
  );

describe("Testing chat functionality", () => {
  let welcomeTitle: HTMLDivElement;
  let chatWrapper: HTMLDivElement;
  let chat: HTMLUListElement;
  let chatHistory: HTMLDivElement;
  let nameBtn: HTMLButtonElement;
  let nameInput: HTMLInputElement;
  let sendMessageBtn: HTMLButtonElement;
  let messageInput: HTMLInputElement;
  beforeEach(() => {
    document.body.innerHTML = `
          <div class="card chat-app">
            <div id="welcome-user" class="welcome-user user-name clearfix">
              <div class="input-group mb-0">
                <div class="input-group-prepend">
                  <button id="name-btn" class="input-group-text" type="button">
                    <i class="fa fa-send"></i>
                  </button>
                </div>
                <input
                  id="name-input"
                  type="text"
                  class="form-control"
                  placeholder="Enter your name..."
                />
              </div>
            </div>
            <div class="chat blur">
              <div id="chat-history" class="chat-history">
                <ul id="chat" class="m-b-0"></ul>
              </div>
              <div class="chat-message clearfix">
                <div class="input-group mb-0">
                  <div class="input-group-prepend">
                    <button id="send-message" class="input-group-text">
                      <i class="fa fa-send"></i>
                    </button>
                  </div>
                  <input
                    id="message-input"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
      `;
    nameBtn = <HTMLButtonElement>document.getElementById("name-btn");
    nameInput = <HTMLInputElement>document.getElementById("name-input");
    welcomeTitle = <HTMLDivElement>document.getElementById("welcome-user");
    chatWrapper = <HTMLDivElement>document.querySelector(".chat");
    chat = <HTMLUListElement>document.getElementById("chat");
    chatHistory = <HTMLDivElement>document.getElementById("chat-history");
    sendMessageBtn = <HTMLButtonElement>document.getElementById("send-message");
    messageInput = <HTMLInputElement>document.getElementById("message-input");
    chatHistory.scrollTo = jest.fn();
    init();
  });
  test("Getting all messages after loading page", () => {
    store.dispatch(createGetMessagesAction(messages));
    expect(chat.children.length).toBe(store.getState().messagesList.length);
    expect(chat.querySelectorAll(".my-message").length).toBe(0);
  });
  test("Setting name", () => {
    nameInput.value = "Futurama";
    nameBtn.dispatchEvent(new MouseEvent("click"));
    expect(store.getState().name).toBe(nameInput.value);
    expect(chatWrapper.classList.contains("blur")).toBeFalsy();
  });
  test("Sending message", () => {
    const messageContent = "new message";
    messageInput.value = messageContent;
    const messagesNumber = store.getState().messagesList.length;
    sendMessageBtn.dispatchEvent(new MouseEvent("click"));
    expect(sendMessageThunkFn).toHaveBeenCalled();
    expect(store.getState().messagesList.length).toBe(messagesNumber + 1);
    expect(store.getState().lastMessage.message).toBe(messageContent);
    expect(messageInput.value).toBe("");
  });
  test("Replacing smiles", () => {
    messageInput.value = ":) :-) :P";
    messageInput.dispatchEvent(new Event("input"));
    expect(messageInput.value).toBe("\u{1F600} \u{1F600} \u{1F60B}");
  });
});
