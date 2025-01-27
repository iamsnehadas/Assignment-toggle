const button = document.querySelector('.button-cl');
button.addEventListener('click', () => {
    if(button.textContent === 'Light') {
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.textContent = 'Dark';
        document.body.style.backgroundColor = 'white';
        return;
    }
    else if(button.textContent === 'Dark') {
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.textContent = 'Light';
        document.body.style.backgroundColor = 'black';
        return;
    }
});