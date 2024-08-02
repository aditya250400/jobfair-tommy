declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN_SECRET: string;
      DATABASE_URL: string;
      PORT: number;
    }
  }
}

export {};
