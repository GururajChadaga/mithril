import m from 'mithril';

import User from '../models/User';

const UserList = {
  oninit: User.loadList,
  view: function () {
    return m(
      'ul',
      { class: 'user-list' },
      User.list.map((user, index) =>
        m(
          'li',
          { key: `${user.id ?? ''}-${index}`, class: 'user-list__item' },
          user.name ?? ''
        )
      )
    );
  },
};

export default UserList;
