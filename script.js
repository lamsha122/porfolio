const button = document.getElementById('more');
const hidden = document.querySelectorAll('.hidden');
const button2 = document.getElementById('less');
button2.style.display = 'none';

button.addEventListener('click', () => {
    hidden.forEach(img => img.classList.remove('hidden'));
    button.style.display = 'none';
    button2.style.display = 'block';
});

button2.addEventListener('click', () => {
    hidden.forEach(img => img.classList.add('hidden'));
    button2.style.display = 'none';
    button.style.display = 'block';
});
