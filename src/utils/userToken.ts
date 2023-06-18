const userToken = () => {
  const user = sessionStorage.getItem('userToken');
  return { user: user || false };
};

export default userToken();
