# Scheduler

## Overview

This project is a scheduler application. The following guidelines and principles have been used 
but compromises made for simplicity & time

- **Models**: Contain data structures only. Functionality should be placed in Services.
- **Unit Tests**: Provided as samples. Tests should be meaningful and simple. 
 Dependency injection means only one thing is tested. provide full coverage is the goal
- **Classes**: Should do one thing (should!)
- **Interfaces**: Should be used - dependency injection / SOLID
- **Types**: define data that is likely to change after prototyping, e.g., `MyTime`. While `Time` is a simple string, it may be better defined using `Date` to permit schedules over multiple days.


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
