const form = document.getElementById('loginform');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const destinationURL = './main.html';
    window.location.href = destinationURL;
});