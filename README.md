# strip-margin

[stripMargin from Scala](https://www.oreilly.com/library/view/scala-cookbook/9781449340292/ch01s03.html) to JS.

## Installation

```
npm install @caiogondim/strip-margin -S
```

### Usage

```js
import stripMargin from 'strip-margin'

const str = stripMargin(`
    |Four score and
    |seven years ago
`)
console.log(str)
// ->
// Four score and
// seven years ago
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
