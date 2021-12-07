import "./style.css";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Avatar, Message, State } from "./types";
import chattingReducer from "./reducer";
import {
  addLastMessage,
  getMessages,
  sendMessageThunk,
  setName,
} from "./actions";
import { observeWithEventSource } from "./message_api";

export const initialState: State = {
  messagesList: [],
  name: localStorage.getItem("name") || "",
  avatars: {},
  lastMessage: {} as Message,
};

export const store = createStore(
  chattingReducer,
  initialState,
  applyMiddleware(thunk)
);

const formatter = new Intl.DateTimeFormat("ru-RU", {
  weekday: "short",
  day: "numeric",
  month: "numeric",
  hour: "numeric",
  minute: "numeric",
  year: "2-digit",
});

function replaceSmiles(message: string) {
  let newMessage = message.replace(/[:]-?\)+/g, `\u{1F600}`);
  newMessage = newMessage.replace(/[:]-?\(+/g, `\u{1F612}`);
  newMessage = newMessage.replace(/[:]-?[pP]/g, `\u{1F60B}`);
  newMessage = newMessage.replace(/[:]-?[dD]/g, `\u{1F601}`);
  newMessage = newMessage.replace(/[:]-?[xX8]/g, `\u{1F606}`);
  return newMessage;
}

function createMessage(message: Message, currentUser: string, avatars: Avatar) {
  if (!message || !message.date || !message.name) return "";
  let messageHTML = "";
  const date = formatter.format(new Date(message.date));
  let textAlignClass = "";
  let messageTypeClass = "other-message";
  let messageContentArr = [
    `<span>${date.replace(/,/g, "")}</span>`,
    `<span class="user-name">${message.name}</span>`,
  ];
  if (currentUser === message.name) {
    textAlignClass = "text-right";
    messageTypeClass = "my-message";
    messageContentArr.push(`<img src="./img/user.png" alt="avatar">`);
  } else {
    messageContentArr.push(
      `<img src="./img/${avatars[message.name]}.png" alt="avatar">`
    );
    messageContentArr = messageContentArr.reverse();
  }
  messageHTML = `<li class="clearfix">`;
  messageHTML += `<div class="message-data ${textAlignClass}">`;
  messageHTML += `<div>`;
  messageContentArr.forEach((item) => {
    messageHTML += item;
  });
  messageHTML += `</div>`;
  messageHTML += `<div><span class="message ${messageTypeClass}">${message.message}</span></div>`;
  messageHTML += `</li>`;
  return replaceSmiles(messageHTML);
}

function renderMessageField(
  chat: HTMLUListElement,
  chatHistory: HTMLDivElement
) {
  const state = store.getState();
  const messages = state.messagesList;
  const currentUser = state.name;
  const { avatars } = state;
  let allMessagesHTML = "";
  messages.slice(-30).forEach((message) => {
    const messageHTML = createMessage(message, currentUser, avatars);
    if (messageHTML) {
      allMessagesHTML += messageHTML;
    }
  });
  chatHistory.scrollTo(0, chatHistory.scrollHeight);
  return allMessagesHTML;
}

export function updateMessage(message: Message) {
  const chat = <HTMLUListElement>document.getElementById("chat");
  const chatHistory = <HTMLDivElement>document.getElementById("chat-history");
  let state = store.getState();
  if (
    !message ||
    !message.date ||
    !message.name ||
    JSON.stringify(state.lastMessage) === JSON.stringify(message)
  )
    return;
  store.dispatch(addLastMessage(message));
  state = store.getState();
  const messageHTML = createMessage(message, state.name, state.avatars);
  if (messageHTML) {
    chat.insertAdjacentHTML("beforeend", messageHTML);
    chatHistory.scrollTo(0, chatHistory.scrollHeight);
  }
}

export function init() {
  const welcomeTitle = <HTMLDivElement>document.getElementById("welcome-user");
  const chatWrapper = <HTMLDivElement>document.querySelector(".chat");
  const chat = <HTMLUListElement>document.getElementById("chat");
  const chatHistory = <HTMLDivElement>document.getElementById("chat-history");
  const nameBtn = <HTMLButtonElement>document.getElementById("name-btn");
  const nameInput = <HTMLInputElement>document.getElementById("name-input");
  const sendMessageBtn = <HTMLButtonElement>(
    document.getElementById("send-message")
  );
  const messageInput = <HTMLInputElement>(
    document.getElementById("message-input")
  );

  const currentUser = store.getState().name;
  if (currentUser) {
    nameInput.value = currentUser;
  }
  store.dispatch(getMessages() as any);

  // Subscribers
  const renderMessageFieldSub = store.subscribe(() => {
    chat.innerHTML = renderMessageField(chat, chatHistory);
  });
  observeWithEventSource(updateMessage);

  // Listeners
  nameBtn.addEventListener("click", () => {
    if (!nameInput.value) return;
    store.dispatch(setName(nameInput.value));
    renderMessageFieldSub();
    localStorage.setItem("name", nameInput.value);
    welcomeTitle.innerHTML = `<span>Встречаем, ${store.getState().name}</span>
                                  <img src="./img/welcome.gif" alt=""> 
                                 `;
    welcomeTitle.classList.add("remove-welcome");
    chatWrapper.classList.remove("blur");
  });

  sendMessageBtn.addEventListener("click", () => {
    if (!messageInput.value) {
      return;
    }
    const message: Partial<Message> = {
      name: store.getState().name,
      message: messageInput.value,
    };
    store.dispatch(sendMessageThunk(message) as any);
    messageInput.value = "";
  });

  messageInput.addEventListener("input", () => {
    messageInput.value = replaceSmiles(messageInput.value);
  });
}

window.addEventListener("load", init);
