window.addEventListener('DOMContentLoaded', getData);

function getData() {
  //console.log('DOM fully loaded and parsed');
  const dataSourceLink1 = "https://css-tricks.com/wp-json/wp/v2/pages?per_page=50";
  const dataSourceLink2 = "https://lasseclaes.com/20f/2nd_sem_int/wp/wp-json/wp/v2/posts";
  const dataSourceLink3 = "https://lasseclaes.com/20f/2nd_sem_int/wp/wp-json/wp/v2/books";
  fetch(dataSourceLink3).then(initial => initial.json())
    .then(handleData);
};

function handleData(data) {
  console.log(data);
  //we now have the JSON
  data.forEach(displayData);
}

function displayData(data) {
  console.log(data)

  const template = document.querySelector('template').content;
  const clone = template.cloneNode(true);

  clone.querySelector('h1').textContent = data.title.rendered;
  //clone.querySelector('div').innerHTML = data.excerpt.rendered;

  document.querySelector('main').appendChild(clone);
}
