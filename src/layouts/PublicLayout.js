import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer'

const PublicLayout = () => {
    return (
        <div className = "flex flex-col justify-between h-screen">
            <Navbar/>
            <main className="h-full overflow-y-scroll"> </main>

            <Footer/>
        </div>
    )
}

export default PublicLayout
