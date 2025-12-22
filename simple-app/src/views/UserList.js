import m from 'mithril';

import User from '../models/User';

const UserList = {
  oninit: () => {
    if (User.list.length === 0) {
      User.loadList();
    }
  },
  view: function () {
    return m(
      'ul',
      { class: 'user-list' },
      User.listLoading
        ? m('div', 'Loading...')
        : User.list.map((user, index) =>
            m(
              'li',
              { key: `${user.id ?? ''}-${index}`, class: 'user-list__item' },
              m(
                m.route.Link,
                { href: `/edit-user/${user.id}` },
                user.name ?? ''
              )
            )
          )
    );
  },
};

export default UserList;
