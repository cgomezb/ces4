function loadData() {
  const url = 'https://randomuser.me/api/?results=10';
  getData(url);
}

function loadDataFromFireBase() {
  const url = 'https://randomuser-me.firebaseio.com/authors.json';
  getData(url);
}

function getData(url) {
  const ul = getElementById('authors');
  ul.innerHTML = '';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let authors = data.results;
      return authors.map(function (author) {
        let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
        img.src = author.picture.medium;
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}

function postData() {
  const url = 'https://randomuser-me.firebaseio.com/authors/results/0/name.json';

  let data = {
    first: 'Sara',
    last: 'Ramirez',
    title: 'Miss'
  }

  let fetchData = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: new Headers()
  }

  fetch(url, fetchData)
    .then(function (response) {
      console.log(response)
      debugger
    })
}

function getElementById(id) {
  return document.getElementById(id);
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}