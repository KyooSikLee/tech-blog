import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="about" />

            <h1>About KyooSik</h1>
            <div>Hello</div>
            <p> <Link to="/contact"> contact page </Link></p>
        </Layout>

    )
}

export default AboutPage