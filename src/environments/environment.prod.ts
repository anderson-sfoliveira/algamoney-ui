export const environment = {
  production: true,
  apiURL: 'https://algamoney-api-mycloud.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('brl-empresa-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
