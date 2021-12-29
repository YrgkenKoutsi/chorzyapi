const taskStatus = require("../models/taskStatus");

const taskRepository = {
  tasks: [],
  getAll: () => {
    return [...taskRepository.tasks].map(taskRepository.mapTaskToResponseModel);
  },
  getById: (taskId) => {
    return taskRepository.tasks.find((task) => task.id == taskId);
  },
  getUsersTasks: (userId) => {
    return [...taskRepository.tasks]
      .filter((task) => task.user.id == userId)
      .map(taskRepository.mapTaskToResponseModel);
  },
  getChorePendingTasks: (chore) => {
    return [...taskRepository.tasks]
      .filter(
        (task) =>
          task.assignedChores == chore && task.status == taskStatus.Pending
      )
      .map(taskRepository.mapTaskToResponseModel);
  },
  addTask: (task) => {
    taskRepository.tasks.push(task);
  },
  updateTask: (taskId, task) => {},
  deleteTask: (taskId) => {
    const taskIndex = taskRepository.tasks.findIndex((t) => t.id == taskId);
    taskRepository.tasks.splice(taskIndex, 1);
  },
  addLog: (task, userName, action) => {
    task.logs.push({ userName, action, date: new Date().toJSON() });
  },
  mapTaskToResponseModel: (task) => {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      assignedChores: task.assignedChores,
      user: {
        name: task.user.name,
        id: task.user.id,
      },
    };
  },
  resetData: () => {
    taskRepository.tasks = [
      {
        id: 8054,
        title: "Chore List",
        description: "We need to make a list of chores!",
        user: { id: 2002, name: "Yrgken Koutsi" },
        assignedChores: 1,
        status: 0,
        logs: [
          {
            userName: "Yrgken Koutsi",
            action: "Created",
            date: "2021-06-02T09:18:41.815Z",
          },
        ],
      },
      {
        id: 4381,
        title: "Cooking",
        description: "We need a cooking list in this week, Thanks",
        user: { id: 1001, name: "Ethan Lee" },
        assignedChores: 2,
        status: 0,
        logs: [
          {
            userName: "Ethan Lee",
            action: "Created",
            date: "2021-06-02T08:10:4.134Z",
          },
        ],
      },
    ];
  },
};

module.exports = taskRepository;
