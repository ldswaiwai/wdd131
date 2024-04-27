const currentYear = new Date().getFullYear();//get the current year
//update the content of the span element with current year
document.getElementById('currentyear').textContent = currentYear;

function getLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent += lastModified;
}

document.addEventListener('DOMContentLoaded', getLastModifiedDate);