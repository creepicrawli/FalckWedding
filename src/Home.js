import './App.css';
import './WeddingVideo.js';
import React, { StrictMode, useEffect } from 'react';
import WeddingVideo from './WeddingVideo.js';
import { generateToken, messaging, refreshFcmToken } from './notifications/firebase.js';
import { onMessage } from 'firebase/messaging';
function App(props) {
    useEffect(() => {
        generateToken().then((token) => {
            if (token) {
                console.log("✅ Initial token on load:", token);
            }
        });
        onMessage(messaging, (payload) => {
            console.log("foreground message received: ", payload);

            const { title, body, image } = payload.notification;

            if (Notification.permission === "granted") {
                new Notification(title, {
                    body,
                    icon: "/davicons/favicon-32x32.png", // ✅ fallback icon
                });
            } else {
                console.warn('⚠️ Payload has no "notification" field:', payload);
            }

        });
    }, []);

    const handleForceRefresh = async () => {
        const newToken = await refreshFcmToken();
        if (newToken) {
            console.log("📬 New token ready to register or send:", newToken);
        }
    };


    return (
        <div className="App">
            <header className="App-header">
                <img src='/LineArt.png' alt='' width='70%' height='120px' />
                <p className='FalckWedding'>
                    Falck Wedding
                </p>

            </header>
            <main className="App-Body">
                <StrictMode>
                    <WeddingVideo />
                </StrictMode>

            </main>
            <footer className='footer'>
                <div className='VideoMessage'>
                    <p><a href="/admin">Admin Panel</a></p>
                    <p className='SaveTheDate'>
                        Save the Date!
                    </p>
                    <p>
                        We’re excited to invite you to a weekend wedding getaway in Gansbaai.
                    </p>
                    <p>
                        Mark your calendars for a weekend full of love, celebration, and unforgettable memories. We can’t wait to share this special time in our lives with you!
                    </p>
                    <p>
                        More information coming soon…
                    </p>
                    <p><a href="/support">Need help? Visit our support page</a></p>
                </div>
            </footer>
        </div>
    );
}

export default App;
