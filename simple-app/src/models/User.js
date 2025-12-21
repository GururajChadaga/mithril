import m from 'mithril';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const User = {
  list: [],
  isLoading: true,
  error: null,
  loadList: function () {
    return m
      .request({
        method: 'GET',
        url: usersUrl,
      })
      .then((result) => {
        User.list = result;
      })
      .catch((err) => {
        User.error = err;
      })
      .finally(() => {
        User.isLoading = false;
      });
  },
};

export default User;
