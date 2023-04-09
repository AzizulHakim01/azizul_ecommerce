import React from 'react'
import Layout from '../../component/Layout/Layout'
import AdminMenu from '../../component/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title={"Admin Dashboard - Azizul eCommerce App"} style={{height:"80vh"}}>
        <h1 className='text-center'>Admin Dashboard</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu/>
            </div>
            <div className="col-md-9">
              <div className="card text-center w-100 m-5 p-2">
                <h4>Admin Name:{auth?.user?.name}</h4>
                <h4>Admin Email:{auth?.user?.email}</h4>
                <h4>Admin Phone:{auth?.user?.phone}</h4>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard