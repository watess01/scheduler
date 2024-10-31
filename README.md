# Scheduler

## Overview

This project is a scheduler application. The following guidelines and principles have been used 
but compromises made for simplicity & time

- **Models**: Contain data structures only. Functionality should be placed in Services.
- **Unit Tests**: Provided as samples. Tests should be meaningful and simple. 
  - Dependency injection means only one thing is tested. provide full coverage is the goal
  - Unit tests for large sets of data should use arrays
- **Classes**: Should do one thing (should!)
- **Interfaces**: Should be used - dependency injection / SOLID
- **Types**: define data that is likely to change after prototyping, e.g., `MyTime`. While `Time` is a simple string, it may be better defined using `Date` to permit schedules over multiple days.
- **Objects**: Never create an object where it will be used - unit testability / dependency injection. Classes should not know about concretions

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

### compromises

1. printSchedule should be its own class
2. inheritance to be avoided
3. Magic numbers may exist 
4. Time is a simple string

