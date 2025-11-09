export const fakeSignup = (username, email, password) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));
};

export const fakeLogin = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.some((u) => u.email === email && u.password === password);
};
