document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', () => {
    let hash = window.location.hash;
    let mainDiv = document.getElementById('root');
    let list = document.getElementsByClassName('list');
    if (hash === '#add') {
      newSet(list);
    }
  });
});

const newSet = list => {
  let contDiv = document.createElement('div');
  let name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'Name');
  name.setAttribute('id', 'newSet');
  let add = document.createElement('input');
  add.setAttribute('type', 'button');
  add.setAttribute('value', 'Add terms');
  add.setAttribute('id', 'add');
  let save = document.createElement('input');
  save.setAttribute('type', 'button');
  save.setAttribute('value', 'Save changes');
  save.setAttribute('id', 'save');
  let cancel = document.createElement('input');
  cancel.setAttribute('type', 'button');
  cancel.setAttribute('value', 'Cancel');
  cancel.setAttribute('id', 'cancel');
  list['0'].appendChild(name);
  list['0'].appendChild(contDiv);
  list['0'].appendChild(add);
  list['0'].appendChild(save);
  list['0'].appendChild(cancel);
  add.addEventListener('click', makeNewTerm.bind(null, contDiv));
  save.addEventListener('click', rememberNewSet.bind(null, name));
};
const makeNewTerm = (contDiv, e) => {
  let newItem = document.createElement('div');
  contDiv.appendChild(newItem);
  let term = document.createElement('input');
  term.setAttribute('type', 'text');
  term.setAttribute('placeholder', 'Enter term');
  term.setAttribute('name', 'term');
  let definition = document.createElement('input');
  definition.setAttribute('type', 'text');
  definition.setAttribute('name', 'definition');
  definition.setAttribute('placeholder', 'Enter definition');
  let deleteB = document.createElement('input');
  deleteB.setAttribute('type', 'button');
  deleteB.setAttribute('value', 'Delete term');
  newItem.appendChild(term);
  newItem.appendChild(definition);
  newItem.appendChild(deleteB);
  deleteB.addEventListener('click', removeCurrentItem.bind(null, newItem));
};
const rememberNewSet = (name, e) => {
  const set = [];
  let terms = document.getElementsByName('term');
  let definitions = document.getElementsByName('definition');
  if (name.value !== '') {
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].value !== ' || definitions[i].value !== ') {
        set.push({
          term: terms[i].value,
          definition: definitions[i].value
        });
      }
      localStorage.setItem(`newItem:${name.value}`, JSON.stringify(set));
      window.location.replace('/');
    }
  }
};

const removeCurrentItem = (newItem, event) => {
  newItem.remove();
};
