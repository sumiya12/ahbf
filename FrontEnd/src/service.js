const Profile = async (cred) => {
  return await fetch("http://localhost:4000/Profile", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};
const Name = async (cred) => {
  return await fetch("http://localhost:4000/name", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};
const Age = async (cred) => {
  return await fetch("http://localhost:4000/age", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};
const Description = async (cred) => {
  return await fetch("http://localhost:4000/description", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};
const Major = async (cred) => {
  return await fetch("http://localhost:4000/major", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const services = {
  Profile,
  Description,
  Age,
  Name,
  Major,
};
