import { MinTextLengthPipe } from './min-text-length.pipe';

describe('MinTextLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new MinTextLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
