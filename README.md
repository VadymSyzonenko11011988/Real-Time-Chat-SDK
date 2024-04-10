# Date/Time Utilities

## Introduction

This is a lightweight JavaScript package providing utilities for working with dates and times in Node.js applications. It offers functions to format date objects into custom strings and parse date strings into Date objects using specified formats.

## Installation

To install the package, you can use npm:

```bash
npm install datetime-utils
```

## Usage

### Formatting Dates

To format a date object into a string, use the `formatDate` function:

```javascript
const { formatDate } = require('datetime-utils');

const date = new Date();
const formattedDate = formatDate(date, 'YYYY-MM-DD HH:mm:ss');
console.log(formattedDate);
```

### Parsing Dates

To parse a date string into a Date object, use the `parseDate` function:

```javascript
const { parseDate } = require('datetime-utils');

const dateString = '2024-04-10 12:30:45';
const parsedDate = parseDate(dateString, 'YYYY-MM-DD HH:mm:ss');
console.log(parsedDate);
```

## API Reference

### `formatDate(date, format)`

Formats a date object into a string using the specified format.

- `date`: The date object to format.
- `format`: The format string (e.g., 'YYYY-MM-DD HH:mm:ss').

Returns the formatted date string.

### `parseDate(dateString, format)`

Parses a date string into a Date object using the specified format.

- `dateString`: The date string to parse.
- `format`: The format string (e.g., 'YYYY-MM-DD HH:mm:ss').

Returns the parsed Date object.

## License

This package is licensed under the [MIT License](LICENSE).
