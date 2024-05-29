//establish references to the DOM elements that we will be using in the program
//they only reference the HTML element objects, not any properties
const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

//condition to assign it an empty array in case this is the user'sfirst visit of if the localStorage item is missig
//the array declaration initializes the chaptersArray variable with the list of chapters returned by the getChapterList()function
//or empty array if the function call returns null or undefined
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener('click', () => {
    if (input.value != '') {//check if the input is empty
        displayList(input.value);//call the function that outputs the submitted chapter
        chaptersArray.push(input.value);//add the chapter to the array
        setChapterList();//update the localStorage with the new array by calling a function named setChapterList
        input.value= '';//set the input.value to nothing(clear the input)
        input.focus();//set the focus back to the input
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;//note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');//this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);//note this new function that is neede to remove the chapter from the array and localStorage
        input.focus();//set the foucs back to the input
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deletChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);//this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}