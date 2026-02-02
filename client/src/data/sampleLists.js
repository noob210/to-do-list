export const sampleLists = [
  {
    id: "1",
    title: "Work Tasks",
    description: "Office and project tasks",
    itemCount: 3,
  },
  {
    id: "2",
    title: "Shopping",
    description: "Groceries and errands",
    itemCount: 4,
  },
  {
    id: "3",
    title: "Personal",
    description: "Health and hobbies",
    itemCount: 3,
  },
];

export const sampleItemsByListId = {
  "1": [
    { id: "1-1", text: "Review project proposal", completed: false },
    { id: "1-2", text: "Send weekly report", completed: true },
    { id: "1-3", text: "Team standup at 10am", completed: false },
  ],
  "2": [
    { id: "2-1", text: "Milk and eggs", completed: false },
    { id: "2-2", text: "Return package at post office", completed: true },
    { id: "2-3", text: "Pick up dry cleaning", completed: false },
    { id: "2-4", text: "Buy birthday gift", completed: false },
  ],
  "3": [
    { id: "3-1", text: "Gym - leg day", completed: false },
    { id: "3-2", text: "Read 30 pages", completed: true },
    { id: "3-3", text: "Call mom", completed: false },
  ],
};
