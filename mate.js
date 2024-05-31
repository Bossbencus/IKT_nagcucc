document.getElementById('open-popup-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('close-popup-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Köszönöm hogy feliratkozott!');
    document.getElementById('popup').classList.add('hidden');
});