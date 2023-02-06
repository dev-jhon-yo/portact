import "./styles.scss"
import { Title } from "../Title/index.jsx"

export function About() {
  return (
    <>
      <div className="about-page">
        <div className="text-zone">
          <Title background="skills" title="About me" />
          <p>
            Hello, my name is Jhonata but you can call me "JhoN", I'm looking for new challenges and connections in the
            technology area in
            general at the moment.
          </p>
          <p>
            I intend to improve myself more and more as a Dev, so that with my knowledge I can
            develop projects and contribute to the community through applications that positively impact
            people's lives!
            Currently I'm focused on perfecting my knowledge of Frontend and Backend in Web 2.0.
          </p>
          <p>
            Feel free to send a message, get in touch for any purpose, such as a suggestion,
            job offers, opportunities, project ideas, constructive criticism or Networking.
          </p>
        </div>
          <div className="skills-container">
              <ul>
                  <li>TypeScript</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
              </ul>
          </div>
      </div>
    </>
  )
}
