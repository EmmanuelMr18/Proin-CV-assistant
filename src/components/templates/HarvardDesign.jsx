import { useContext } from 'react';
import { UserContext } from '../../main';
import styles from './HarvardDesign.scss?inline';
import { humanDate } from '../../utils/dates';
import { MultilineText } from '../shared/MultilineText';

const dateFormat = {
  year: 'numeric',
  month: 'long',
  day: undefined
};
export default function HarvardDesign() {
  const user = useContext(UserContext);
  const { name, job, experience, contacts, skills, education, achievements } = user.data;

  return (
    <>
      <style>{styles}</style>
      <div id="preview-content" className="harvardDesign">
        <header>
          <h1>{name}</h1>
          <p className="job-title">{job}</p>
          <p>
            {contacts.map((item, index) => {
              if (index === contacts.length - 1) {
                return item;
              }
              return `${item} | `;
            })}
          </p>
          {/* <p className="description">{description}</p> */}
        </header>
        <main>
          <section>
            <h2>Experiencia</h2>
            <hr />
            {experience.map((item) => {
              return (
                <article key={item.company + item.job}>
                  <h3>{item.company}</h3>
                  <div className="subTitle-row">
                    <p className="job-rol">{item.job}</p>
                    <p className="date">{`${humanDate(item.start, dateFormat)} - ${humanDate(
                      item.end,
                      dateFormat
                    )}`}</p>
                  </div>
                  <p className="description">
                    <MultilineText text={item.description} />
                  </p>
                </article>
              );
            })}
          </section>
          <section>
            <h2>Habilidades</h2>
            <hr />
            <ul className="skills-items">
              {skills.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </section>
          <section>
            <h2>Educación</h2>
            <hr />
            {education.map((item) => {
              return (
                <article key={item.institution + item.title}>
                  <h3>{item.institution}</h3>
                  <div className="subTitle-row">
                    <p>{item.title}</p>
                    <p>{` ${humanDate(item.end, dateFormat)}`}</p>
                  </div>
                  {item.description && (
                    <p>
                      <MultilineText text={item.description} />
                    </p>
                  )}
                </article>
              );
            })}
          </section>
          <section>
            <h2>Logros</h2>
            <hr />
            <ul className="achievements-items">
              {achievements.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
