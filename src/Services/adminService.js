const login = (data) => {
  const nadlezni = JSON.parse(localStorage.getItem("nadlezni"));
  return (
    data.username === nadlezni.username && data.password === nadlezni.password
  );
};

const adminService = { login };

export default adminService;
