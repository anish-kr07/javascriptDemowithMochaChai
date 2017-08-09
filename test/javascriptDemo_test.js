const expect = require('chai').expect
const JavascriptDemo = require("../src/javascriptDemo")

describe("The javascriptDemo  when it is first opened", () => {
  it('has a frist visit of zero zero', () => {
    const javascriptDemo = new JavascriptDemo()

    const balance = javascriptDemo.balance

    expect(balance).to.equal(0)
  })
})
