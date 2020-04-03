window.addEventListener('DOMContentLoaded', getData);

function getData()
{
    //console.log('DOM fully loaded and parsed');
  fetch("https://css-tricks.com/wp-json/wp/v2/pages?per_page=50").then(initial => initial.json())
  .then(handleData);
};

function handleData(data) {
  //we now have the JSON
  data.forEach(displayData);
}

function displayData(data){
  console.log(data)

  const template = document.querySelector('template').content;
  const clone = template.cloneNode(true);

  clone.querySelector('h1').innerHTML = data.title.rendered;
    clone.querySelector('p').innerHTML = data.excerpt.rendered;

  document.querySelector('main').appendChild(clone);
}
