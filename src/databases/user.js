const users = [
  {
    name: "Alice",
    email: "alice@mail.com",
    password: "password",
  },
  {
    name: "Bob",
    email: "bob@mail.com",
    password: "password",
  },
  {
    name: "Charlie",
    email: "charlie@mail.com",
    password: "password",
  },
  {
    name: "Demo Project",
    email: "demo@mail.com",
    password: "demo",
  },
];

const getUsers = () => {
  return users.map((user) => {
    return {
      name: user.name,
      email: user.email,
    };
  });
};

const checkUser = (email) => {
  return users.some((user) => user.email === email);
};

const checkAuth = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};

export { getUsers, checkUser, checkAuth };
