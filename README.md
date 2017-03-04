# styled-components-flexboxgrid

(NOTE: This project is in processing.)

Grid layout system base on [styled-components](https://github.com/styled-components/styled-components) and inspired by [Flexbox Grid](http://flexboxgrid.com/).

`styled-components-flexboxgrid` uses [styled-components](https://github.com/styled-components/styled-components) as peer dependency. Please confirm that you have styled-components installed in your project.

## Install

```
npm install styled-components-flexboxgrid --save
```

## Basic Usage

```javascript
import React, { Component } from 'react';
import { Col, Row } from 'styled-components-flexboxgrid'

class App extends Component {
  render() {
    return (
      <Row>
        <Col xs={1} md={6} lg={12}>666</Col>
        <Col xs={1} md={6} lg={12}>777</Col>
      </Row>
    )
  }
}
```

## License
MIT License

Copyright (c) 2017 胡子大哈

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
