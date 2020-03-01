import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>I'm kyoosik, a full-stack developer living in seoul</h2>
            <p>Need a developer?</p>
            <p>Need a developer? <Link to="/contact"> contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage