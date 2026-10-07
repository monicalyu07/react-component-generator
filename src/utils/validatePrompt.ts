export const MAX_PROMPT_LENGTH = 500;

export function validatePrompt(value: string) {
  const length = [...value].length;
  return { valid: length <= MAX_PROMPT_LENGTH, length, max: MAX_PROMPT_LENGTH };
}
