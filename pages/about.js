import { Component } from 'react'
import Layout from '../components/Layout'
import Error from './_error'
import fetch from 'isomorphic-unfetch'

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/kambie10')
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()

    return { user: data, statusCode }
  }
  render() {
    const { user, statusCode } = this.props
    if(statusCode) return <Error statusCode={statusCode}/>
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img
          src={user.avatar_url}
          alt="Reed"
          height="200px"
        />
      </Layout>
    )
  }
}