// Obtener los datos de los posts de la api
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then(posts => {

    
   //muestra los post
   let postt = document.getElementById('postt');

   // va insertar cada div en el contenedor
   posts.forEach(post => {
     let postDiv = document.createElement('div');
     postDiv.className = 'post';

     let title = document.createElement('h2');
     title.innerText = post.title;

     let content = document.createElement('p');
     content.innerText = post.body;

     postDiv.appendChild(title);
     postDiv.appendChild(content);

     postt.appendChild(postDiv);
   });
 });