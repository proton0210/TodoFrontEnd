import { Auth } from "aws-amplify";

export const getCurrentSessionToken = async (): Promise<string> => {
  try {
    const session = await Auth.currentSession();
    const accessToken = session.getAccessToken().getJwtToken();
    return accessToken;
  } catch (error) {
    // Handle error if necessary
    throw error;
    return ""; // Return an empty string or handle the error case accordingly
  }
};
