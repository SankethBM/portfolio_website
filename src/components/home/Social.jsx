import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/sanketh-b-m" className="home__social-icon" target='_blank'>
                <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/SankethBM" className="home__social-icon" target='_blank'>
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=916364103044&text=Hi%20Sanketh!" className="home__social-icon" target='_blank'>
                <i className="uil uil-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/sanketh_b_m" className="home__social-icon" target='_blank'>
                <i className="uil uil-instagram"></i>
            </a>
        </div>
    )
}

export default Social