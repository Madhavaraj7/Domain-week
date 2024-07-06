var users = {
  firstName: "Madhav",
  lastName: "Raj",
  role: "Admin",
  loginCount: 23,
  isLoggedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

console.log(users.firstName);
console.table(users);
console.warn(users);
console.log(users.getCourseCount());
users.buyCourse("React js");
users.buyCourse("Angular js");
console.log(users.getCourseCount());
