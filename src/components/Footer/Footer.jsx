import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundColor: "#6278F7"}}>
        <div className="redes">
            <a href="Facebook.com">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="Twitter.com">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="Instagram.com">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Diego Andre Lechuga Pimentel</strong>
    </footer>
}

export default Footer