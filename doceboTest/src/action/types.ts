export interface DoceboAppAction<T> {
  type: string;
  payload: T;
  error?: boolean;
}
