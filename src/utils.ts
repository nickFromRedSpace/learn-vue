export function hashPassword(input: string) {
  return input.split("").join("*");
}