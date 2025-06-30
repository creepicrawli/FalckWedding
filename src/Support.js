import React from 'react';
import './App.css';

export default function Support() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="/LineArt.png" alt="" width="70%" height="120px" />
                <p className="FalckWedding">Support</p>
            </header>
            <main className="App-Body">
                <div className="SupportSection">
                    <h2>Need Help?</h2>
                    <p>If you have any questions or run into issues with the Falck Wedding app, please reach out to us:</p>
                    <ul>
                        <li>Email: <a href="mailto:falckweddingapp@gmail.com">falckweddingapp@gmail.com</a></li>
                        <li>App Version: <strong>1.1.0</strong></li>
                        <li>Available on IOS and Android</li>
                        <li><a href="https://docs.google.com/document/d/1XOLreTlT42Zdla-JP8wRVO3rdSCBoybaIwUUEjc4Ka8/edit?tab=t.0">View our Privacy Policy</a></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
