import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />

      <div data-sal="fade" data-sal-delay="100" data-sal-easing="ease">
        <Trips heading="Our Beatiful Destinations.." />
      </div>
      <div data-sal="zoom-out" data-sal-delay="100" data-sal-easing="ease">
        <Testimonials />
      </div>
      <div data-sal="zoom-out" data-sal-delay="100" data-sal-easing="ease">
        <Stats />
      </div>
      <div data-sal="zoom-out" data-sal-delay="100" data-sal-easing="ease">
        <Email />
      </div>
      <div data-sal="zoom-out" data-sal-delay="100" data-sal-easing="ease">
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
