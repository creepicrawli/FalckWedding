// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage, deleteToken } from "firebase/messaging";



const firebaseConfig = {
    apiKey: "AIzaSyCM3pYe5O6zilv8hwuQ2SxnnWkHWN7Ld_8",
    authDomain: "falckwedding.firebaseapp.com",
    projectId: "falckwedding",
    storageBucket: "falckwedding.firebasestorage.app",
    messagingSenderId: "613525236666",
    appId: "1:613525236666:web:922cff1063543353424b83",
    measurementId: "G-YH83E4Q3PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


//generate Token
export const generateToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        console.log(permission);
        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: "BK-SK2Qo_m9TSCT_N5JdR5srpmaLIDagDBR29H4DGWXQt65XAD4qIrk3M4e9jbAvfkPQAewHrSpvEDDJesvXkuw",
            });
            console.log("New FCM Token: ", token);
        } else {
            console.warn("🚫 Notification permission denied");
            return null;
        }

    } catch (err) {
        console.error("❌ Error getting FCM token:", err);
        return null;
    }

};

// Force refresh by deleting the current token and getting a new one
export const refreshFcmToken = async () => {
    try {
        const oldToken = await getToken(messaging, { vapidKey: "BK-SK2Qo_m9TSCT_N5JdR5srpmaLIDagDBR29H4DGWXQt65XAD4qIrk3M4e9jbAvfkPQAewHrSpvEDDJesvXkuw" });
        if (oldToken) {
            await deleteToken(messaging);
            console.log("🧼 Old token deleted");
        }

        const newToken = await getToken(messaging, {
            vapidKey: "BK-SK2Qo_m9TSCT_N5JdR5srpmaLIDagDBR29H4DGWXQt65XAD4qIrk3M4e9jbAvfkPQAewHrSpvEDDJesvXkuw"
        });
        console.log("🔁 New FCM Token:", newToken);
        return newToken;
    } catch (error) {
        console.error("❌ Failed to refresh token:", error);
        return null;
    }
};
