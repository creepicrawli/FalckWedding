import React, { StrictMode, useEffect } from 'react';
import WeddingVideo from './WeddingVideo.js';

export default function AppRedirect() {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.creepicrawli.FalckWedding&pcampaignid=web_share'; // ✅ Replace with real Play Store link
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = 'https://apps.apple.com/za/app/falck-wedding/id6747902593'; // ✅ Replace with your App Store link
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src="/LineArt.png" alt="" width="70%" height="120px" />
                <p className="FalckWedding">Redirecting...</p>
            </header>
            <main className='App-Body'>
                <StrictMode>
                    <WeddingVideo />
                </StrictMode>
            </main>
            <footer>

                <p>If you're not redirected, please use the links below:</p>

                <ul className='App-Body2' paddingBottom="10">
                    <div className='links'>
                        <li width="60%"><a href="https://play.google.com/store/apps/details?id=com.creepicrawli.FalckWedding&pcampaignid=web_share">Download on Android</a></li>
                        <li><a href="https://apps.apple.com/za/app/falck-wedding/id6747902593">Download on iOS</a></li>
                    </div>
                </ul>



                <StrictMode>
                    <WeddingVideo />
                </StrictMode>
            </footer>
        </div >
    );
}
