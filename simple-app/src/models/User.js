import m from 'mithril';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const User = {
  list: [],
  loadList: function () {
    return m
      .request({
        method: 'GET',
        url: usersUrl,
      })
      .then(function (result) {
        User.list = result;
      });
  },
};

export default User;
