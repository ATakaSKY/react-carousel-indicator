# react-carousel-indicator

> React carousel

[![NPM](https://img.shields.io/npm/v/react-carousel-indicator.svg)](https://www.npmjs.com/package/react-carousel-indicator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-carousel-indicator
```

## Usage

```jsx
import React, { Component } from 'react'

import Indicator from 'react-carousel-indicator'
import 'react-carousel-indicator/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Indicator itemsPerSlide={2} itemGap={20}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </Indicator>
    )
  }
}
```

## License

MIT © [ATakaSKY](https://github.com/ATakaSKY)
