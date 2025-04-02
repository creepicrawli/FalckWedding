// src/firebase-messaging-sw-registration.js
export function register() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/firebase-messaging-sw.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((err) => {
                console.error('Service Worker registration failed:', err);
            });
    }
}
