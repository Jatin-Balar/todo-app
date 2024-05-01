export const msalConfig = {
    auth: {
      clientId: '5af04bb2-f6f5-48fb-a9a7-19306e1ca73b', // This is the ONLY mandatory field that you need to supply.
      authority: 'https://jatinbalar1.b2clogin.com/jatinbalar1.onmicrosoft.com/b2c_1_susi', // Choose SUSI as your default authority.
      knownAuthorities: ['jatinbalar1.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
      redirectUri: 'http://localhost:3000', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
      // postLogoutRedirectUri: 'http://localhost:3000', // Indicates the page to navigate after logout.
      navigateToLoginRequestUrl: false, // If 'true', will navigate back to the original request location before processing the auth code response.
    },
    cache: {
      cacheLocation: 'sessionStorage', // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO between tabs.
      storeAuthStateInCookie: false,  // Set this to 'true' if you are having issues on IE11 or Edge
    },
      scopes: ["openid","profile","email "]
  }