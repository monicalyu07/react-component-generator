import { describe, it, expect } from 'vitest';
import { validatePrompt, MAX_PROMPT_LENGTH } from './validatePrompt';

describe('validatePrompt', () => {
  it('최대 길이는 500자다', () => {
    expect(MAX_PROMPT_LENGTH).toBe(500);
  });

  it('500자 이하면 유효하다', () => {
    const result = validatePrompt('a'.repeat(500));
    expect(result).toEqual({ valid: true, length: 500, max: 500 });
  });

  it('500자를 넘으면 유효하지 않다', () => {
    const result = validatePrompt('a'.repeat(501));
    expect(result).toEqual({ valid: false, length: 501, max: 500 });
  });

  it('빈 문자열은 길이 기준으로 유효하다', () => {
    expect(validatePrompt('').valid).toBe(true);
  });

  it('이모지 같은 서로게이트 쌍은 한 글자로 센다', () => {
    const result = validatePrompt('😀'.repeat(500));
    expect(result).toEqual({ valid: true, length: 500, max: 500 });
  });
});
