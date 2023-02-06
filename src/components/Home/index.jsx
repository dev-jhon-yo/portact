import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { Title } from "../Title/index.jsx"

export function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <Title background="Jhonata Moura" title="Developer" />
        <section>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.discord.com"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.github.com">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
