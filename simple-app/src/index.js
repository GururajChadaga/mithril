import m from 'mithril';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import Layout from './views/Layout';
import Counter from './views/Counter';

// Routes use RouteResolver objects with a `render` method instead of plain components.
// `render` lets us compose a full vnode tree (e.g. wrap pages with a global Layout).
//
// Example: m(Layout, m(UserList))
// → creates a Layout vnode whose only child is a UserList vnode.
//
// Route params are exposed via the `vnode` argument.
// For `/edit/:id`, `vnode.attrs` === { id: "1" }, so
// m(UserForm, vnode.attrs) is equivalent to <UserForm id={1} />.
//
// Using this pattern ensures the Layout stays mounted while the routed page changes.

m.route(document.getElementById('app'), '/users', {
  '/counter': {
    render: () => {
      return m(Layout, m(Counter));
    },
  },
  '/users': {
    render: () => {
      return m(Layout, m(UserList));
    },
  },
  // :id is a route parameter
  '/edit-user/:id': {
    render: (vnode) => {
      return m(Layout, m(UserForm, vnode.attrs));
    },
  },
});
