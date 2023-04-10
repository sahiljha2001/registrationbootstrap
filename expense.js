const expenseForm= document.getElementById('form');
   const itemi = document.getElementById('items');

expenseForm.addEventListener('submit',additem);
itemi.addEventListener('click', removeItem);



function additem(e){

    e.preventDefault();

  const newItem1 = document.getElementById('amount').value;
  const newItem2 = document.getElementById('description').value;
  const newItem3 = document.getElementById('category').value;
  const userDetail={
    expenseAmount: newItem1,
    expenseDescription:newItem2,
    expenseCategory:newItem3 ,
  };
  let myObj_serialized= JSON.stringify(userDetail);
  localStorage.setItem(newItem2 , myObj_serialized);
  let myObj_Deserialized=JSON.parse(localStorage.getItem('userDetail'));
  const newlist =document.createElement('li');
  newlist.className='list-group-item';
  newlist.appendChild(document.createTextNode(newItem1));
  newlist.appendChild(document.createTextNode("-"+newItem2));
  newlist.appendChild(document.createTextNode("-"+newItem3));
  const editBtn = document.createElement('button');
editBtn.className = 'edit-button';
// Append text node
//   editBtn.innerHtml='Edit';
  //giving name to editbutton
 editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  newlist.appendChild(editBtn);
  let deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  newlist.appendChild(deleteBtn);
  //adding edit button to everyonein list

  itemi.appendChild(newlist);
deleteBtn. onclick = ()=>{
    localStorage.removeItem( newItem2);
    
   
}
editBtn.onclick =()=>{
     localStorage.removeItem( userDetail.expenseDescription);
    
    
 }
}

function removeItem(e){
  if(e.target.classList.contains('delete')|| e.target.classList.contains('edit-button')){
    if(confirm('Are You Sure?')){
       let it = e.target.parentElement;
      itemi.removeChild(it);
     
    }
  }
}