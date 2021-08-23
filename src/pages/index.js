import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/HeroSection"
import  Ourservices  from "../components/Ourservices"


const IndexPage = () => (
  <Layout>
    <SEO title ='Home' />
    <Hero/>
    <Ourservices/>
  </Layout>
)

export default IndexPage
