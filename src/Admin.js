import React, { useState, useEffect } from 'react';
import './App.css';

function Admin() {
    const [auth, setAuth] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const tryPassword = () => {
            const input = prompt('🔒 Admin Access – Please enter the password:');
            if (input?.trim().toUpperCase() === 'DEON') {
                setAuth(true);
            } else {
                alert('❌ Access denied. You are not authorized.');
                window.location.href = '/'; // redirect to home
            }
        };

        tryPassword();
    }, []);

    const sendNotification = async () => {
        try {
            console.log('📨 Sending notification:', { title, message });

            const res = await fetch('https://n5jcxd1zj3.execute-api.ap-southeast-2.amazonaws.com/prod/sendPushNotification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors', // helpful if running this locally or on Amplify
                body: JSON.stringify({
                    title: title.trim(),
                    message: message.trim(),
                }),
            });

            const data = await res.json();
            setStatus(`✅ ${data.message}`);
            console.log('✅ Notification response:', data);
        } catch (error) {
            console.error('❌ Notification error:', error);
            setStatus(`❌ Failed to send: ${error.message}`);
        }
    };

    const exportRSVP = async () => {
        try {
            const res = await fetch('https://5vr2b8y524.execute-api.ap-southeast-2.amazonaws.com/prod/rsvp-export', {
                method: 'POST',
            });

            if (res.ok) {
                setStatus('✅ RSVP export triggered – check your email!');
            } else {
                setStatus('❌ Export request failed');
            }
        } catch (error) {
            setStatus(`❌ Export error: ${error.message}`);
        }
    };

    if (!auth) return null; // Don’t render anything until password accepted

    return (
        <div className="App">
            <header className="App-header">
                <img src='/LineArt.png' alt='' width='70%' height='120px' />
                <p className='FalckWedding'>
                    Falck Wedding
                </p>
                <p>Use this to communicate with guests or export RSVP data.</p>
            </header>

            <main className="App-Body">
                <div className="admin-section">
                    <input
                        className="admin-input"
                        type="text"
                        placeholder="Notification Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="admin-input"
                        placeholder="Notification Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="admin-button" onClick={sendNotification}>Send Notification</button>
                    <button className="admin-button" onClick={exportRSVP}>Request RSVP Export</button>
                    {status && <p className="admin-status">{status}</p>}
                </div>
            </main>
            <footer className='footer'>
                <div className='VideoMessage'>
                    <p><a href="/">Go to Home Page</a></p>
                    <p className='SaveTheDate'>
                        Save the Date!
                    </p>
                    <p>
                        We’re excited to invite you to a weekend wedding getaway in Gansbaai.
                    </p>
                </div>deon
            </footer>
        </div>
    );
}

export default Admin;
