window.addEventListener('load', () => {
    let portuguesInput = document.getElementById("portuguesInput");
    let enderianInput = document.getElementById("enderianInput");
    portuguesInput.addEventListener('input', () => {
        enderianInput.value = portuguesInput.value;
    });
    enderianInput.addEventListener('input', () => {
        portuguesInput.value = enderianInput.value;
    });
})