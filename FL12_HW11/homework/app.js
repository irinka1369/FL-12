const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
let newEl = document.createElement('ul');
let closeFolder = "<i class='material-icons close'>folder</i>";
let openFolder = "<i class='material-icons open'>folder_open</i>";
let file = "<i class='material-icons file'>insert_drive_file</i>";

function makeFolderTree(structure, newEl) {
  for (let i = 0; i < structure.length; i++) {
    let elemUl = document.createElement('ul');
    let elemLi = document.createElement('li');
    let elemP = document.createElement('p');
    let picture = document.createElement('i');

    picture.classList.add('material-icons');

    if (structure[i].folder) {
      picture.innerHTML = closeFolder;
    } else {
      picture.innerHTML = file;
    }

    newEl.appendChild(elemLi);
    elemLi.appendChild(elemP);
    elemP.appendChild(picture);
    elemP.innerHTML += structure[i].title;

    if (structure[i].children) {
      elemLi.appendChild(elemUl);
      elemUl.classList.add('none');
      makeFolderTree(structure[i].children, elemUl);
    }

    if (structure[i].folder && !structure[i].children) {
      let file = document.createElement('span');
      file.innerHTML = 'Folder is empty';
      file.classList.add('span', 'none');
      elemLi.appendChild(file);
    }

    elemP.addEventListener('click', () => {
      if (elemP.nextElementSibling.classList.contains('none')) {
        elemP.nextElementSibling.classList.toggle('none');
        elemP.firstChild.innerHTML = openFolder;
      } else {
        elemP.nextElementSibling.classList.remove('block');
        elemP.nextElementSibling.classList.toggle('none');
        elemP.firstChild.innerHTML = 'folder';
      }
    });
  }
}
makeFolderTree(structure, newEl);
rootNode.appendChild(newEl);
