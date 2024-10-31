# Scheduler

## Overview

This project is a scheduler application. The following guidelines and principles have been applied:

- **Models**: Contain data structures only. Functionality should be placed in Services.
- **Unit Tests**: Provided as samples. Tests should be meaningful and provide full coverage.
- **Classes**: Should adhere to the Single Responsibility Principle.
- **Interfaces**: Should be used where applicable.
- **Types**: Used to define data that is likely to change, e.g., `MyTime`. While `Time` is a simple string, it may be better defined using `Date` to permit schedules over multiple days.

Compromises have been made for simplicity.

## Installation

To install the necessary dependencies, run:

```sh
npm install
```

### Execution

To run
```
npm start
```

### Testing
```
npm test
```

#### Notes
1. Models should contain only data structures.
2. Functionality should be placed in Services to maintain a clean architecture.
3. Unit tests shouldbe meaningful and provde good coverage
4. Classes should have the Single Responsibility
5. Interfaces and types used for flexibility and maintainability.
6. Compromises made for simplicity.
