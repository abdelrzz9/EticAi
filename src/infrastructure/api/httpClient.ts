export class HttpClientError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'HttpClientError';
    this.status = status;
  }
}
