import React from 'react'
import Layout from '../component/Layout/Layout'
import { useAuth } from '../context/auth'

const Home = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout>
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  )
}

export default Home