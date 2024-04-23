const title = document.createElement("h1");
// const text = document.createTextNode("Click here");
// title.appendChild(text);

const wrapper = document.querySelector("body");

wrapper.appendChild(title);

wrapper.style.backgroundColor = "black";
wrapper.style.width = "100%";
wrapper.style.height = "100vh";

const choose = document.querySelector("h1");
choose.innerHTML = (prompt("Ismingizni kiriting"));


wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";

choose.style.color = "yellow";
choose.style.fontFamily = "sans-serif";
choose.style.fontSize = "50px";