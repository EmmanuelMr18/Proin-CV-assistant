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

  const {
    name,
    job,
    description,
    userImg,
    experience,
    contacts,
    skills,
    languages,
    education,
    achievements
  } = user.data;

  return (
    <>
      <style>{styles}</style>
      <div id="preview-content" className="harvardDesign">
        <header>
          <h1>{name}</h1>
          <p>{job}</p>
          <p>
            {contacts.map((item, index) => {
              if (index === contacts.length - 1) {
                return item;
              }
              return `${item} | `;
            })}
          </p>
          <p>{description}</p>
        </header>
        <main>
          <section>
            <h2>Experience</h2>
            <hr />
            {experience.map((item) => {
              return (
                <article key={item.company + item.job}>
                  <h3>{item.company}</h3>
                  <p>{item.job}</p>
                  <p>{`${humanDate(item.start, dateFormat)} - ${humanDate(
                    item.end,
                    dateFormat
                  )}`}</p>
                  <p>
                    <MultilineText text={item.description} />
                  </p>
                </article>
              );
            })}
          </section>
          <section>
            <h2>Skills</h2>
            <hr />
            <ul>
              {skills.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </section>
          <section>
            <h2>Education</h2>
            <hr />
            {education.map((item) => {
              return (
                <article key={item.institution + item.title}>
                  <h3>{item.institution}</h3>
                  <p>{item.title}</p>
                  <p>{` ${humanDate(item.end, dateFormat)}`}</p>
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
            <h2>Achievements</h2>
            <hr />
          </section>
        </main>
      </div>
    </>
  );
}
