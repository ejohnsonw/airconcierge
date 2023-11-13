// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//baseUrl : 'https://cs-gateway-ejohnsonw-1-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/',
//baseUrl : 'http://192.168.1.8:9010/',
export const environment = {
  production: false,
  baseUrl : 'http://192.168.1.8:9010/',
};

// export const environment = {
//   production: false,
//   baseUrl : 'https://backend.travelful.co:8050/travelful/',
//   websocket : 'https://backend.travelful.co:9085/',
//   baseUrlSecurity : 'https://backend.travelful.co:8045'
// };

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
