import "./style.css";

import { createStore, applyMiddleware, Unsubscribe } from "redux";
import thunk from "redux-thunk";

import { Message, State } from "./types";
import chattingReducer from "./reducer";
import { getMessages, setName } from "./actions";

export const initialState: State = {
  messagesList: [],
  name: localStorage.getItem("name") || "",
  avatars: {},
  lastMessage: {} as Message,
};

const store = createStore(
  chattingReducer,
  initialState,
  applyMiddleware(thunk)
);

function renderMessageField(
  chat: HTMLUListElement,
  chatHistory: HTMLDivElement
) {
  let userMessageHTML = "";
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    hour: "numeric",
    minute: "numeric",
    year: "2-digit",
  });
  const messages = store.getState().messagesList;
  const currentUser = store.getState().name;
  const { avatars } = store.getState();
  messages.slice(-30).forEach((message) => {
    if (!message || !message.name || !message.message || !message.date) return;
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
    userMessageHTML = `<li class="clearfix">`;
    userMessageHTML += `<div class="message-data ${textAlignClass}">`;
    userMessageHTML += `<div>`;
    messageContentArr.forEach((item) => {
      userMessageHTML += item;
    });
    userMessageHTML += `</div>`;
    userMessageHTML += `<div>
                                <span class="message ${messageTypeClass}">${message.message}</span>
                            </div>`;
    userMessageHTML += `</li>`;
    // eslint-disable-next-line no-param-reassign
    chat.innerHTML += userMessageHTML;
  });
  setTimeout(() => {
    chatHistory.scrollTo(0, chatHistory.scrollHeight);
  }, 0);
}

export function init() {
  const welcomeTitle = <HTMLDivElement>document.getElementById("welcome-user");
  const chatWrapper = <HTMLDivElement>document.querySelector(".chat");
  const chat = <HTMLUListElement>document.getElementById("chat");
  const chatHistory = <HTMLDivElement>document.getElementById("chat-history");
  const nameBtn = <HTMLButtonElement>document.getElementById("name-btn");
  const nameInput = <HTMLInputElement>document.getElementById("name-input");
  // const sendMessage = <HTMLButtonElement>(
  //   document.getElementById("send-message")
  // );
  // const messageInput = <HTMLInputElement>(
  //   document.getElementById("message-input")
  // );

  let renderMessageFieldSub: Unsubscribe;
  const currentUser = store.getState().name;
  if (currentUser) {
    nameInput.value = currentUser;
  }
  store.dispatch(getMessages() as any);

  nameBtn.addEventListener("click", () => {
    if (!nameInput) return;
    store.dispatch(setName(nameInput.value));
    renderMessageFieldSub();
    localStorage.setItem("name", nameInput.value);
    welcomeTitle.innerHTML = `<span>Встречаем, ${store.getState().name}</span>
                                  <img src="./img/welcome.gif" alt=""> 
                                 `;
    welcomeTitle.classList.add("remove-welcome");
    chatWrapper.classList.remove("blur");
  });
  renderMessageFieldSub = store.subscribe(() => {
    chat.innerHTML = "";
    renderMessageField(chat, chatHistory);
  });
}

window.addEventListener("load", init);
