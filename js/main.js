let apiiUrl = "https://jsonplaceholder.typicode.com/users/"
 

async function actualizarGato2(apii){
    let hola2 = await fetch(apii); 
    let datoo = await hola2.json();

    let ddd = document.querySelector(".usuario")
    
 
        let div = document.createElement("div")

        div.innerHTML= div.innerHTML= "<h2>"+ datoo[2]["username"]+"</h2>"+
                                        "<h3>"+"@" + datoo[2]["name"]+"</h3>"
        ddd.appendChild(div);

 }

actualizarGato2(apiiUrl);




let apiUrl = "https://jsonplaceholder.typicode.com/posts"
 
    
      async function actualizarGato(api){
        let hola1 = await fetch(api); 
        let dato = await hola1.json();
        let dd = document.querySelector(".usuario")
        
        
        dato.forEach(element => {
            let div = document.createElement("div")
    
            div.innerHTML= "<h1>"+ element["title"]+"</h1>"+
                            "<h1>" + element["body"]+"</h1>"

            div.classList.add("post");
            dd.appendChild(div); 
    })
  
     }
   
    actualizarGato(apiUrl);