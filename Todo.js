let array1 = [
  {
    content: 'ddd',
    date: '789',
    id: 1,
  },
];
function check() {
  const content = document.getElementById('content');
  const date = document.getElementById('date');
  const addButton = document.querySelector('.js-add');

  function checkButtonState() {
    if (content.value === '' || date.value === '') {
      addButton.disabled = true;
    } else {
      addButton.disabled = false;
    }
  }

  checkButtonState(); // Call checkButtonState initially

  content.addEventListener('input', checkButtonState);
  date.addEventListener('input', checkButtonState);
}

check();
array1.splice(0,1);

document.querySelector('.js-add').addEventListener('click', () => {
  
  check();
  const content = document.getElementById('content');
  const date = document.getElementById('date');
  setTimeout(() => {
    content.value = '';
    date.value = '';
    checkButtonState(); // Call checkButtonState manually
  }, 100);
  array1.push({
    content: content.value,
    date: date.value,
    id: crypto.randomUUID(),
  });
  renderArray();
});


function renderArray() {
  const display = document.getElementById('display');
  if (display) {
    display.remove();
  }
  
  const newDisplay = document.createElement('div');
  newDisplay.id = 'display';
  newDisplay.classList='new-display';
  newDisplay.style.opacity ='0';
  document.querySelector('.js-view').addEventListener('click',()=>{
    newDisplay.style.opacity = '1';
  });
  
  array1.forEach((item, index) => {
    const pItem = document.createElement('div');
    pItem.textContent = ` ${item.content}: ${item.date}`;
    pItem.classList = 'p-item';
    const button1 = document.createElement('button');
    button1.textContent = 'Delete';
    button1.classList.add('list');
    button1.addEventListener('click', () => {
      array1.splice(index, 1);
      renderArray();
    });
    pItem.appendChild(button1);
    newDisplay.appendChild(pItem);
  });
  document.body.appendChild(newDisplay);
}


      
/*
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];
console.log(users.find(user => user.id === 3).name);
// Output:
// { id: 3, name: 'Bob' }

const displayid = 3;
users.find((user)=>{
  if(user.id===displayid){
    console.log(user);
  }
  });

*/
