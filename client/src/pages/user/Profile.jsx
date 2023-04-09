import React from 'react'
import UserMenu from '../../component/Layout/UserMenu'
import Layout from '../../component/Layout/Layout'

const Profile = () => {
  return (
    <Layout>
        <div className="container-fluid p-3 m-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu />
                </div>
                <div className="col-md-9">
                    <h1>Profile</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile