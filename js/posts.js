const app = document.getElementById('userPost');
const container = document.createElement('div');
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.onload = function() {

 var data = JSON.parse(this.response);

  data.forEach(post => {
   const postContainer = document.createElement('div');
   postContainer.setAttribute('class', 'post-container');

   const title = document.createElement('h4');
   title.setAttribute('class', 'title');
   title.textContent = post.title;

   const comment = document.createElement('p');
   comment.setAttribute('class', 'post-content');
   comment.textContent = `${post.body}`;

   container.appendChild(postContainer);
   postContainer.appendChild(title);
   postContainer.appendChild(comment);
  });
}

request.send();