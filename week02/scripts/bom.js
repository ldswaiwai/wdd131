const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');



button.addEventListener('click', function() {

    if (input.value.trim() !== '') { 
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        

        listItem.textContent = input.value;
        deleteButton.textContent = '❌';
        listItem.append(deleteButton);
        list.append(listItem);
        console.log(list);

        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem);
            input.focus();
        });
    }
});




