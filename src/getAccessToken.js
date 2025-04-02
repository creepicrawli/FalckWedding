const { google } = require("googleapis");
const path = require("path");

async function getAccessToken() {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "ServiceAccount.json"), // replace with your path
        scopes: ["https://www.googleapis.com/auth/firebase.messaging"],
    });

    const accessToken = await auth.getAccessToken();
    console.log("Access Token:", accessToken);
}

getAccessToken();
