const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  const newItem = document.getElementById('item').value;
  
  const li = document.createElement('li');
  
  li.className = 'list-group-item';
 
  li.appendChild(document.createTextNode(newItem));
  
 
  const deleteBtn = document.createElement('button');
  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 
  deleteBtn.appendChild(document.createTextNode('X'));
  
  li.appendChild(deleteBtn);

  
  itemList.appendChild(li);
  
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


function filterItems(e){
 
  const text = e.target.value.toLowerCase();
 
  const items = itemList.getElementsByTagName('li');
 
  [...items].forEach(item => {
    const itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().includes(text)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}