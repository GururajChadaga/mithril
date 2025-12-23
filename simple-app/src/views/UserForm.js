import m from 'mithril';
import User from '../models/User';

const UserForm = {
  oninit: function (vnode) {
    User.loadCurrent(vnode?.attrs?.id);
  },

  view: function () {
    console.log(User);
    return m(
      'form.user-form',
      {
        onsubmit: (event) => {
          event.preventDefault();
          User.updateCurrent();
        },
      },
      [
        m('label.label[for=name]', 'Name'),
        m('input#name.input[type=text][placeholder=Name]', {
          oninput: (event) => {
            User.current.name = event.target.value;
          },
          value: User.current.name ?? '',
        }),

        // NOTE:
        // "First Name" uses Mithril's CSS selector syntax (tag + id + class + attrs in one string),
        // while "Username" uses the attrs object form.
        // Both are fully equivalent and produce the same DOM output — this example intentionally
        // mixes styles to demonstrate that either authoring pattern is valid in Mithril.

        m('label', { class: 'label', for: 'username' }, 'Username'),
        m('input', {
          id: 'username',
          class: 'input',
          type: 'text',
          placeholder: 'Username',
          oninput: (event) => {
            User.current.username = event.target.value;
          },
          value: User.current.username ?? '',
        }),

        m('button.button[type=submit]', 'Save'),
      ]
    );
  },
};

export default UserForm;
