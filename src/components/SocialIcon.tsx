import type { SocialIconType } from "../types"
import './SocialIcon.css'

const SocialIcon = ({ name, href, icon, color, label }: SocialIconType) => {
    return (

        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="social-fab__item"
            style={{ backgroundColor: color }}
        >
            <img src={icon} alt={name} aria-hidden="true" />
        </a>
    )
}

export default SocialIcon