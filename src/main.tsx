import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Amplify } from "aws-amplify";
import "./index.css";

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId:
      import.meta.env.VITE_IDENTITY_POOL_ID ||
      "us-east-1:75cf2249-c663-4f9c-8cc5-135fa086ad81",

    // REQUIRED - Amazon Cognito Region
    region: import.meta.env.VITE_REGION || "us-east-1",

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: import.meta.env.VITE_USER_POOL_ID || "us-east-1_Q0wTOMLwg",

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)

    userPoolWebClientId:
      import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID ||
      "2rklhcl0egs17g7cat3flh87vs",

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: true,
  },
});

// You can get the current config object
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
