interface StringConstructor {
  format: (...args: any[]) => string;
  namedFormat: (format: string, namedArgs: { [key: string]: any }) => string;
  localeFormat: (...args: any[]) => string;
  localeNamedFormat: (format: string, namedArgs: { [key: string]: any }) => string;
}
