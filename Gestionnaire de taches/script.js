
let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
                        // addEventListener toujours le mettre au début. Il permet de traiter ce qui sera mis dans la liste. 
    event.preventDefault(); 
                          // event.preventDefault(); Pour éviter que la page se réactualise.
    //recup le ul par l'id
    let ul =document.getElementById("mon-ul");
                         // let ul =document.getElementById("mon-ul"); pour appeler une id qui se trouve en html
    //recup l'input tache
    let input = document.getElementById("input");
                        // let input = document.getElementById("input"); Pour appeler un élément
    //créer un li avec createElement
    let li = document.createElement("li");
                           // let li = document.createElement("li"); Pour créer un élément (li)
    //recup la valeur de l'input tache
    let inputvalue = input.value;
                               // let inputvalue = input.value; input value permet de recupérer la valeur de l'input.
    //textContent la valeur de l'input tache dans ton li
    li.textContent= inputvalue;
                             // texteContent ou Li.inner html.
                            // li.textContent= inputvalue; Pour remplir la valeur à partir du j.s
    //appendChild le li dans le ul.
    ul.appendChild(li);

    let buttun = document.createElement("button");
    li.appendChild(buttun);
    buttun.textContent="Supprimer"
    buttun.addEventListener("click", function(){
    li.remove()  } ); });




  //PROCHAINE ETAPE
  //Ajouter le bouton Supprimer 
  //Créer le bouton supprimer
  //Appliquer le texte "Supprimer"
  //addEventListener > au click > fonction >

//   let button=document.getElementById("button");
//   button.addEventListener("click",function ( ) { 
//     if(inputvalue.value);
//       (deleteButton)

   
//  button.appendChild(Supprimer);
// });


  //dans l'addEventListener: removeChild le li du ul.
  //appenChild le bouton dans le li
//  const deleteButton = document.createElement('button');
//  deleteButton.textContent = 'Supprimer';
//  deleteButton.classList.add('delete-btn');
//  deleteButton.addEventListener('click'), function() {
//  taskList.removeChild(taskItem);
//  let Supprimer=createElement("button"); ou ("Supprimer");



//  }
