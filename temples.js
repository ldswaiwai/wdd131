const currentYear = new Date().getFullYear();//get the current year
//update the content of the span element with current year
document.getElementById('currentYear').textContent = currentYear;

function getLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent += lastModified;
}

document.addEventListener('DOMContentLoaded', getLastModifiedDate);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})