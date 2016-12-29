import template from './store.html';

export default {
  template,
  controller,
  bindings: {
    id: '<',
    store: '<'
  }
};

function controller() {
  console.log('In store controller');
}