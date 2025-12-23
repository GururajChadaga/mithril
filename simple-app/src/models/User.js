import m from 'mithril';
const BASE_URL = 'http://localhost:3000/users';

const User = {
  list: [],
  listLoading: true,
  listError: null,

  loadList: function () {
    return m
      .request({
        method: 'GET',
        url: BASE_URL,
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
    const cachedCurrent = User.list.find((user) => user.id == id);
    if (cachedCurrent) {
      User.current = cachedCurrent;
      User.currentLoading = false;
      User.currentError = null;
      return;
    }

    try {
      User.currentLoading = true;
      const result = await m.request({
        method: 'GET',
        url: `${BASE_URL}/${id}`,
      });
      User.current = result;
    } catch (err) {
      User.currentError = err;
    } finally {
      User.currentLoading = false;
    }
  },

  updateCurrent: async function () {
    await m.request({
      method: 'PUT',
      url: `${BASE_URL}/${User.current.id}`,
      body: User.current,
    });
  },
};

export default User;
