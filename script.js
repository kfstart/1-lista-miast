let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let elementOl = document.createElement('ol');

for(i=0; i<7; i++) {
  let elementLi = document.createElement('li');
  elementLi.className = 'city';
  elementLi.innerText = cities[i];
  elementOl.appendChild(elementLi);
};

document.body.appendChild(elementOl);