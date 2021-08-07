import React from "react"
import TestRenderer from "react-test-renderer"
import IndexPage from "../index"
import Hero from "../../components/Hero"

describe("Hero component test", () => {
  const testRenderer = TestRenderer.create(<Hero />)
  const testInstance = testRenderer.root
  it("should Travel now Button exist on component ", () => {
    //const {getByTestId}
    expect(
      testInstance.findByProps({ testid: "book a flight" })
    ).not.toBeFalsy()
  })
})
