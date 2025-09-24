// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "on" : "off");
}
if (localStorage.getItem("darkMode") === "on") document.body.classList.add("dark-mode");

// Users
const users = ["An", "Binh"];
let currentUser = null;

// Data
let entries = JSON.parse(localStorage.getItem("entries")) || [];

// Render login
function renderLogin() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <form onsubmit="login(event)">
      <h2>🔑 Đăng nhập</h2>
      <select id="username">
        ${users.map(u => `<option value="${u}">${u}</option>`).join("")}
      </select>
      <button type="submit">Đăng nhập</button>
    </form>
  `;
}

// Handle login
function login(e) {
  e.preventDefault();
  currentUser = document.getElementById("username").value;
  renderApp();
}

// Render app
function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <form onsubmit="addEntry(event)">
      <h2>✍️ Viết nhật ký</h2>
      <input type="text" id="title" placeholder="Tiêu đề" required>
      <input type="text" id="feeling" placeholder="Cảm xúc">
      <textarea id="content" placeholder="Nội dung..." required></textarea>
      <label><input type="checkbox" id="isPublic"> Đăng công khai</label>
      <button type="submit">Lưu</button>
    </form>
    <h2>📌 Nhật ký của bạn</h2>
    <div id="entries"></div>
  `;
  renderEntries();
}

// Add entry
function addEntry(e) {
  e.preventDefault();
  const entry = {
    id: Date.now(),
    user: currentUser,
    title: document.getElementById("title").value,
    feeling: document.getElementById("feeling").value,
    content: document.getElementById("content").value,
    public: document.getElementById("isPublic").checked,
    date: new Date().toISOString()
  };
  entries.push(entry);
  saveEntries();
  renderEntries();
  e.target.reset();
}

// Save
function saveEntries() {
  localStorage.setItem("entries", JSON.stringify(entries));
}

// Render entries
function renderEntries() {
  const container = document.getElementById("entries");
  if (!container) return;
  container.innerHTML = "";
  entries.filter(e => e.user === currentUser).forEach(e => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <h3>${e.title}</h3>
      <p>😃 ${e.feeling || "Không có"}</p>
      <p>${e.content}</p>
      <small>🗓 ${new Date(e.date).toLocaleString()}</small><br>
      <button onclick="editEntry(${e.id})">✏️ Sửa</button>
      <button onclick="deleteEntry(${e.id})">🗑 Xoá</button>
    `;
    container.appendChild(div);
  });
}

// Delete entry
function deleteEntry(id) {
  entries = entries.filter(e => e.id !== id);
  saveEntries();
  renderEntries();
}

// Edit entry
function editEntry(id) {
  const container = document.getElementById("entries");
  const entry = entries.find(e => e.id === id);
  if (!entry) return;
  container.innerHTML = "";
  entries.filter(e => e.user === currentUser).forEach(e => {
    const div = document.createElement("div");
    div.className = "entry";
    if (e.id === id) {
      div.innerHTML = `
        <form onsubmit="updateEntry(event, ${id})">
          <input type="text" id="edit-title-${id}" value="${e.title}" required>
          <input type="text" id="edit-feeling-${id}" value="${e.feeling}">
          <textarea id="edit-content-${id}" required>${e.content}</textarea>
          <label><input type="checkbox" id="edit-public-${id}" ${e.public ? "checked" : ""}> Công khai</label>
          <button type="submit">💾 Lưu</button>
          <button type="button" onclick="renderEntries()">❌ Huỷ</button>
        </form>
      `;
    } else {
      div.innerHTML = `
        <h3>${e.title}</h3>
        <p>😃 ${e.feeling || "Không có"}</p>
        <p>${e.content}</p>
        <small>🗓 ${new Date(e.date).toLocaleString()}</small><br>
        <button onclick="editEntry(${e.id})">✏️ Sửa</button>
        <button onclick="deleteEntry(${e.id})">🗑 Xoá</button>
      `;
    }
    container.appendChild(div);
  });
}

// Update entry
function updateEntry(e, id) {
  e.preventDefault();
  const entry = entries.find(ent => ent.id === id);
  if (entry) {
    entry.title = document.getElementById(`edit-title-${id}`).value;
    entry.feeling = document.getElementById(`edit-feeling-${id}`).value;
    entry.content = document.getElementById(`edit-content-${id}`).value;
    entry.public = document.getElementById(`edit-public-${id}`).checked;
    saveEntries();
    renderEntries();
  }
}

// Start
renderLogin();
