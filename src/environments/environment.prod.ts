import { Environment } from "../app/Models/environment.model";

export const environment:Environment = {
  production: true,
  firebaseConfig: {} as any, // Will be populated from config.json
  entertaiment: {} as any,   // Will be populated from config.json
};
