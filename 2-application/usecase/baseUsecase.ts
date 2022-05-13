export interface BaseUsecase<I = undefined, O = void> {
  execute: (input: I) => Promise<O>;
}
