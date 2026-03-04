import Link from "next/link"
import "./style.css"
import StorageIcon from '@mui/icons-material/Storage';

export default function Footer() {

    const footerLinks = [
        {
            link: "https://github.com/Syrgak15/AnimeTracker",
            name: "GitHub"
        },
        {
            link: "https://t.me/thhhiiia",
            name: "Telegram"
        },
        {
            link: "https://www.linkedin.com/in/syrgak-sulaimanov-5488aa244/",
            name: "LinkedIn"
        }
    ]

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    {footerLinks.map((link, index) => (
                        <div key={index}>
                            <Link
                                className="footer-link"
                                href={link.link}
                            >
                                {link.name}
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
            <div className="footer-copyright">
                Copyright © 2026 Syrgak15. All rights reserved.
            </div>
            <div className="api-info">
                <div className="api-icon">
                    <StorageIcon fontSize="small"/>
                </div>
                <div className="api-info__text">
                    <Link
                        href="https://docs.api.jikan.moe/"
                        className="footer-link"
                    >
                        Powered by Jikan REST API
                    </Link>
                </div>
            </div>
        </div>
    )
}