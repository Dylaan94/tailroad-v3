/**
 * Wraps the first occurrence of the word "tailroad" in the input text with a span tag.
 * The span tag has some CSS classes applied to it.
 *
 * @param text - The input text.
 * @returns The text with the first occurrence of "tailroad" wrapped in a span tag.
 */

export default function formatTailroad(text: string): string {
  // Replace the first occurrence of "tailroad" with a span tag that wraps "tailroad"
  const textWithSpan = text.replace(
    "tailroad",
    `<span class="text-5xl tailroad-font text-primary-green ">tailroad</span>`
  );

  return textWithSpan;
}
