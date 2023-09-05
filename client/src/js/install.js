const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    // store triggered events
    window.deferredPrompt = event;

    // remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});

//TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt; 
    // console.log(promptEvent)
    if(!promptEvent) {
        return;
    }

    // show prompt
    promptEvent.prompt();

    // reset deferred prompt variable, it can only be used once
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

//TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    console.log('install hit')
    // window.log('install hit')
    window.deferredPrompt = null;
});
