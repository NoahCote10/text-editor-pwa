const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store triggered event
    window.deferredPrompt = event;

    // unhides the install button
    butInstall.classList.toggle('hiddern', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    // Shows prompt
    promptEvent.prompt();
    
    // Resets the deferred prompt variable
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clears prompt
    window.deferredPrompt = null;
});
