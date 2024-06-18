import React from 'react'
import './Footer.css'

function Footer() {
    let date = new Date()
    return (
        <>
            <footer>
                <p>Copyright &#169; {date.getFullYear()} <span id="year"></span> Tapas Dalui. All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Footer
