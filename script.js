const passwordInput = document.getElementById('password');
const eyes = document.querySelectorAll('.eye');

passwordInput.addEventListener('focus', () => {
    eyes.forEach(eye => {
        eye.style.height = '5px';
    });
});

passwordInput.addEventListener('blur', () => {
    eyes.forEach(eye => {
        eye.style.height = '30px';
    });
});
