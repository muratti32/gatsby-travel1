import React from "react"
import renderer from "react-test-renderer"

describe("Index component", () => {
  beforeEach(() => {})
  const name = "testing is rock"
  var n = null

  it("Truthy test result", () => {
    expect(n).toBeNull()
    expect(name).not.toBeNull()
  })

  it("chech is truthy", () => {
    expect(n).toBeFalsy()
  })
})
