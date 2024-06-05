import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright &copy; {year} Todo Apps by <a href="https://instagram.com/wawan_wfs">Wahyu Fajar Setiawan</a></p>
            </aside>
        </footer>
    );
}

export default Footer;

