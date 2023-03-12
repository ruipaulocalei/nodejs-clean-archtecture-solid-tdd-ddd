export class OutputMessage {
  error?: string;
  ok: boolean;

  constructor(error: string, ok = false) {
    this.error = error;
    this.ok = ok;
  }
}
