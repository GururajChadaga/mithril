import m from 'mithril';
import UserList from './views/UserList';
import UserForm from './views/UserForm';

m.route(document.getElementById('app'), '/users', {
  '/users': UserList,
  '/edit-user/:id': UserForm, // :id is a route parameter
});
