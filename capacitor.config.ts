import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'superheroes',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
