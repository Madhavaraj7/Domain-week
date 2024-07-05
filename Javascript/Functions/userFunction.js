function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all acces`;
      break;
    case "subadmin":
      return `${name} is sub-admin with all acces`;
      break;
    case "testprep":
      return `${name} is test-prep with all acces`;
      break;
    case "user":
      return `${name} is user with all acces`;
      break;

    default:
      return `${name} is trial user with all acces`;

      break;
  }
}

console.log(getUserRole("Madhav", "testprep"));
