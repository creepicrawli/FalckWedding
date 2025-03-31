// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/11.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCM3pYe5O6zilv8hwuQ2SxnnWkHWN7Ld_8",
    authDomain: "falckwedding.firebaseapp.com",
    //databaseURL: 'https://project-id.firebaseio.com',
    projectId: "falckwedding",
    storageBucket: "falckwedding.firebasestorage.app",
    messagingSenderId: "613525236666",
    appId: "1:613525236666:web:922cff1063543353424b83",
    measurementId: "G-YH83E4Q3PK"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
});

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});