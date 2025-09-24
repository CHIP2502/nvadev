// ========== CẤU HÌNH NGƯỜI DÙNG ==========
const users = [
  { username: "user1", password: "123" },
  { username: "user2", password: "123" }
];

let currentUser = null;
let entries = JSON.parse(localStorage.getItem("entries")) || [];

// ========== DARK MODE ==========
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "on");
  } else {
    localStorage.setItem("darkMode", "off");
  }
}

window.onload = function () {
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
  }
  render();
};

// ========== RENDER GIAO DIỆN ==========
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  if (!currentUser) {
    renderLogin(app);
  } else {
    renderDiary(app);
  }
}

// ========== FORM ĐĂNG NHẬP ==========
function renderLogin(app) {
  const loginForm = document.createElement("div");
  loginForm.innerHTML = `
    <h2>🔑 Đăng nhập</h2>
    <input type="text" id="username" placeholder="Tên đăng nhập">
    <input type="password" id="password" placeholder="Mật khẩu">
    <button onclick="login()">Đăng nhập</button>
  `;
  app.appendChild(loginForm);
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    currentUser = user.username;
    render();
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

function logout() {
  currentUser = null;
  render();
}

// ========== GIAO DIỆN NHẬT KÝ ==========
function renderDiary(app) {
  const diary = document.createElement("div");

  diary.innerHTML = `
    <h2>Xin chào, ${currentUser}!</h2>
    <button onclick="logout()" style="margin-bottom:15px;">🚪 Đăng xuất</button>

    <h3>✍️ Viết nhật ký</h3>
    <input type="text" id="title" placeholder="Tiêu đề">
    <input type="text" id="feeling" placeholder="Cảm xúc">
    <input type="datetime-local" id="date">
    <textarea id="content" placeholder="Nội dung..."></textarea>
    <label>
      <input type="checkbox" id="public"> Công khai
    </label>
    <button onclick="addEntry()">Lưu nhật ký</button>

    <h3>📌 Nhật ký của bạn</h3>
    <div id="myEntries"></div>

    <h3>🌍 Nhật ký công khai</h3>
    <div id="publicEntries"></div>
  `;

  app.appendChild(diary);
  renderEntries();
}

// ========== QUẢN LÝ BÀI VIẾT ==========
function addEntry() {
  const title = document.getElementById("title").value.trim();
  const feeling = document.getElementById("feeling").value.trim();
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value.trim();
  const isPublic = document.getElementById("public").checked;

  if (!title || !content || !date) {
    alert("Vui lòng nhập đủ tiêu đề, nội dung và ngày giờ!");
    return;
  }

  entries.push({
    id: Date.now(),
    user: currentUser,
    title,
    feeling,
    date,
    content,
    public: isPublic
  });

  saveEntries();
  render();
}

function renderEntries() {
  const myEntriesDiv = document.getElementById("myEntries");
  const publicEntriesDiv = document.getElementById("publicEntries");

  myEntriesDiv.innerHTML = "";
  publicEntriesDiv.innerHTML = "";

  entries
    .filter(e => e.user === currentUser)
    .forEach(e => {
      const div = document.createElement("div");
      div.className = "entry";
      div.innerHTML = `
        <h3>${e.title}</h3>
        <p>😃 ${e.feeling || "Không có"} </p>
        <p>${e.content}</p>
        <small>🗓 ${new Date(e.date).toLocaleString()}</small><br>
        <button onclick="editEntry(${e.id})">✏️ Sửa</button>
        <button onclick="deleteEntry(${e.id})">🗑 Xoá</button>
      `;
      myEntriesDiv.appendChild(div);
    });

  entries
    .filter(e => e.public)
    .forEach(e => {
      const div = document.createElement("div");
      div.className = "entry";
      div.innerHTML = `
        <h3>${e.title}</h3>
        <p>😃 ${e.feeling || "Không có"} </p>
        <p>${e.content}</p>
        <small>👤 ${e.user} | 🗓 ${new Date(e.date).toLocaleString()}</small>
      `;
      publicEntriesDiv.appendChild(div);
    });
}

function editEntry(id) {
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  document.getElementById("title").value = entry.title;
  document.getElementById("feeling").value = entry.feeling;
  document.getElementById("date").value = entry.date;
  document.getElementById("content").value = entry.content;
  document.getElementById("public").checked = entry.public;

  deleteEntry(id);
}

function deleteEntry(id) {
  entries = entries.filter(e => e.id !== id);
  saveEntries();
  render();
}

function saveEntries() {
  localStorage.setItem("entries", JSON.stringify(entries));
}
