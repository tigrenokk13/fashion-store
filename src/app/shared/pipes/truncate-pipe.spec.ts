import { TruncatePipe } from './truncate-pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('створює екземпляр пайпа', () => {
    expect(pipe).toBeTruthy();
  });

  it('має обрізати текст і додавати "..."', () => {
    const result = pipe.transform('Це дуже довгий рядок', 5);
    expect(result).toBe('Це ду...');
  });

  it('має повертати порожній рядок для null', () => {
    expect(pipe.transform(null)).toBe('');
  });
});