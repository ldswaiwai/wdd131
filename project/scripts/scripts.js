const currentYear = new Date().getFullYear();//get the current year
//update the content of the span element with current year
document.getElementById('currentYear').textContent = currentYear;

function getLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent += lastModified;
}

document.addEventListener('DOMContentLoaded', getLastModifiedDate);

document.addEventListener('DOMContentLoaded', () => {

    //Form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;

            if (name && email && message) {
                localStorage.setItem('conactFormSubmission', JSON.stringify({ name, email, message }));
                alert('Thank you for your message!');
                form.reset();

                let reviewCount = localStorage.getItem('reviewCOunt') || 0;
                reviewCount = parseInt(reviewCount) + 1;
                localStorage.setItem('reviewCount', reviewCount);
            
                window.location.href = 'confirmation.html';

            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Display review count on confirmation page
    const reviewCountElement = document.getElementById('review-count');
    if (reviewCountElement) {
        const reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCountElement.textContent = reviewCount;
    }
});