export const environment = {
  production: true,
  apiURL: 'https://algamoney-api-mycloud.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('algamoney-api-mycloud.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
