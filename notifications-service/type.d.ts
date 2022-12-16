declare namespace NodeJS {
  export interface ProcessEnv {
    KAFKA_USERNAME: string;
    KAFKA_PASSWORD: string;
    KAFKA_BROKER: string;
  }
}
