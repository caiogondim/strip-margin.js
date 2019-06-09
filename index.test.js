// https://alvinalexander.com/scala/how-to-create-multiline-strings-heredoc-in-scala-cookbook

const stripMargin = require('./index')

it('removes whitespace to the left of margin symbol', () => {
  const input = `
    |Four score and
    |seven years ago`

  const output = `
Four score and
seven years ago`

  expect(stripMargin(input)).toEqual(output)
})

it('accepts custom margin symbol', () => {
  const input = `
    #Four score and
    #seven years ago`

  const output = `
Four score and
seven years ago`

  expect(stripMargin(input, '#')).toEqual(output)
})
