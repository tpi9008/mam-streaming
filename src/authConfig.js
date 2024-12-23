export const msalConfig = {
  auth: {
    clientId: "d1e68b8c-ac25-4c7a-84bf-aae6433f66f0",
    authority: "https://login.microsoftonline.com/consumers",
    redirectUri: window.location.origin, // This will be http://localhost:3000
    navigateToLoginRequestUrl: true
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case 0:
            console.error(message);
            return;
          case 1:
            console.warn(message);
            return;
          case 2:
            console.info(message);
            return;
          case 3:
            console.debug(message);
            return;
          default:
            console.log(message);
            return;
        }
      },
      logLevel: 3
    }
  }
};