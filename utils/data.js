// data.js

const users = [
  {
    username: 'admin',
    email: 'admin@example.com',
    thoughts: [],
    friends: 1,
  },
  {
    username: 'dingusdongus22',
    email: 'dingus22@example.com',
    thoughts: [],
    friends: 1,
  },
  {
    username: 'dingading23',
    email: 'dingading23@example.com',
    thoughts: [],
    friends: 2,
  },
  {
    username: 'bingcross21',
    email: 'bingcross21@example.com',
    thoughts: [],
    friends: 2,
  },
  {
    username: 'bingbingbing44',
    email: 'bing44@example.com',
    thoughts: [],
    friends: 3,
  },
  {
    username: 'idontandcant',
    email: 'idontandcant@example.com',
    thoughts: [],
    friends: 3,
  },
  {
    username: 'somethingelse11',
    email: 'something11@example.com',
    thoughts: [],
    friends: 4,
  },
  {
    username: 'alienlife55',
    email: 'alien55@example.com',
    thoughts: [],
    friends: 4,
  },
  {
    username: 'ufo000',
    email: 'ufo000@example.com',
    thoughts: [],
    friends: 5,
  },
  {
    username: 'biolegs44',
    email: 'biolegs44@example.com',
    thoughts: [],
    friends: 5,
  },
];

const thoughts = [
  {
    username: 'dingusdongus22',
    thoughtText: 'This is a thought',
    createdAt: Date.now(),
  },
  {
    username: 'ufo000',
    thoughtText: 'This is another thought',
    createdAt: Date.now(),
  },
];

const reactions = [
  {
    username: 'dingusdongus22',
    reactionBody: 'This is a reaction',
    createdAt: Date.now(),
    thought: null, // Initialize with null, and then you can populate it with thought references
  },
  {
    username: 'biolegs44',
    reactionBody: 'This is another reaction',
    createdAt: Date.now(),
    thought: null, // Initialize with null, and then you can populate it with thought references
  },
  {
    username: 'ufo000',
    reactionBody: 'This is a third reaction',
    createdAt: Date.now(),
    thought: null, // Initialize with null, and then you can populate it with thought references
  },
];

module.exports = { users, thoughts, reactions };
