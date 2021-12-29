const userRepository = {
  users: [
    {
      id: 1001,
      name: "Ethan Lee",
      title: "Adult",
      email: "ethan@hotmail.com",
      chore: 1,
    },
    {
      id: 2002,
      name: "Yrgken Koutsi",
      title: "Adult",
      email: "yrgken@hotmail.com",
      chore: 2,
    },
  ],
  getAll: () => {
    return userRepository.users;
  },
  getById: (userId) => {
    return userRepository.users.find((user) => user.id == userId);
  },
  getByEmail: (email) => {
    return userRepository.users.find((user) => user.email == email);
  },
};

module.exports = userRepository;
