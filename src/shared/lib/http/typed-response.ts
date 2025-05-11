export class TypedResponse<T> {
  constructor(private res: Response) {}

  get raw(): Response {
    return this.res;
  }

  async json(): Promise<T> {
    return this.res.json() as Promise<T>;
  }

  get ok() {
    return this.res.ok;
  }

  get status() {
    return this.res.status;
  }

  // ...add more methods if needed
}
