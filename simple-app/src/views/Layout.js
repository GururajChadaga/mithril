import m from 'mithril';

const Layout = {
  /**
   *  vnode is a reference to the vnode that represents an instance
   * of the Layout component (i.e. the vnode returned by a m(Layout) call).
   * Therefore, vnode.children refer to any children of that vnode.
   */
  view: (vnode) => {
    return m('main', { class: 'layout' }, [
      m('nav', { class: 'menu' }, m(m.route.Link, { href: '/users' }, 'Users')),
      m('section', vnode.children),
    ]);
  },
};
export default Layout;
