export interface AppSettings {
  environment: string;
  apiUrl: string;
  jwtAttachDomains: Array<string | RegExp>;
  jwtIgnoreRoutes: Array<string | RegExp>;
}
