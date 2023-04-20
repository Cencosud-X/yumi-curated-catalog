export class StringFormatter {
  /**
   * Sanitize a string to be used as a name
   * @param name
   * @returns {string}
   */
  sanitize(name: string): string {
    return name.toLowerCase().trim().replace(new RegExp(/\s/gi), '-');
  }

  /**
   * Convert string to snake case
   * @param text
   * @returns {string}
   */
  toSnakeCase(text: string): string {
    const matches =
      text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [];

    return matches.map((x) => x.toLowerCase()).join('_');
  }
}

export default new StringFormatter();
