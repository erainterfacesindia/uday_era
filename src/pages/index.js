import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/HeroSection"


const IndexPage = () => (
  <Layout>
    <SEO title ='Home' />
    <Hero/>
  </Layout>
)

export default IndexPage
