document.addEventListener('DOMContentLoaded', () => {
    
    const usernameInput = document.getElementById('username');
    const saveBtn = document.getElementById('save-btn');
    const clearBtn = document.getElementById('clear-btn');
    const displayName = document.getElementById('display-name');

    function saveName() {
        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('savedName', username);
            displaySavedName(username);
        }
    }

    function displaySavedName(name) {
        displayName.textContent = `Saved Name: ${name}`;
    }

    function checkForSavedName() {
        const savedName = localStorage.getItem('savedName');
        if (savedName) {
            displaySavedName(savedName);
        }
    }

    function clearName() {
        localStorage.removeItem('savedName');
        displayName.textContent = '';
        usernameInput.value = ''; 
    }

    saveBtn.addEventListener('click', saveName);
    clearBtn.addEventListener('click', clearName);

    checkForSavedName();
});
