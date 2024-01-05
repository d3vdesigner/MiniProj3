module.exports = {
  mongodb: {
    uri: "mongodb://localhost:27017/miniproj3",
    collections: {
      animal: "animals",
      question: "questions",
      quiz: "quizzes",
      user: "users",
      user_levels: "user_levels",
      sponsor: "sponsors",
      expert: "experts",
    },
  },
  auth: {
    expiration_time: 10000,
    issuer: "",
  },
  sanitize: {
    alphabet: "",
    numerical: "",
  },
  email: {
    service: "Gmail",
    auth: {
      user: "",
      pass: "",
    },
  },
};
