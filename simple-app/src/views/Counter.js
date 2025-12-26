import m from 'mithril';

const Counter = {
  oninit(vnode) {
    console.log('oninit');
    vnode.state.count = 0;
  },

  oncreate(vnode) {
    console.log('oncreate (DOM attached)');
  },

  onbeforeupdate(vnode, old) {
    console.log('onbeforeupdate');
    return true; // return false to block updates
  },

  onupdate(vnode) {
    console.log('onupdate (DOM updated)');
  },

  onbeforeremove(vnode) {
    console.log('onbeforeremove');
    // simulate exit animation
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  },

  onremove(vnode) {
    console.log('onremove (DOM removed)');
  },

  view(vnode) {
    console.log('view (render)');

    return m('div.counter', [
      m('p', `Count: ${vnode.state.count}`),

      m(
        'button',
        {
          onclick: () => {
            vnode.state.count++;
          },
        },
        'Increment'
      ),
    ]);
  },
};

export default Counter;
