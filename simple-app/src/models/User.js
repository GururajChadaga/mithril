import m from 'mithril';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const User = {
  list: [],
  listLoading: true,
  listError: null,

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
        User.listError = err;
      })
      .finally(() => {
        User.listLoading = false;
      });
  },

  current: {},
  currentLoading: false,
  currentError: null,

  loadCurrent: async function (id = 1) {
    try {
      User.currentLoading = true;
      const result = await m.request({
        method: 'GET',
        url: `${usersUrl}/${id}`,
      });
      User.current = result;
    } catch (err) {
      User.currentError = err;
    } finally {
      User.currentLoading = false;
    }
  },
};

export default User;
