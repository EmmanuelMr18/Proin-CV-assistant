import { Divider } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../main';
import moment from 'moment';
import styles from './SquareDesign.scss?inline';

function convertDate(date) {
  return moment(date).format('MMMM YYYY');
}
export default function SquareDesign() {
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
      <div id="preview-content">
        <div className="squareDesign">
          <h1 className="squareDesign__name">{name}</h1>
          <b className="squareDesign__job">{job}</b>
          <p className="squareDesign__description">{description}</p>
          {userImg && (
            <div className="squareDesign__img">
              <img className="squareDesign__img__picture" src={userImg} alt={`${name}-picture`} />
            </div>
          )}
          <Divider className="squareDesign__divider" />
          <div className="right-panel">
            <div className="right-panel__contacts">
              <h3 className="right-panel__contacts__title">Contacto</h3>
              <ul className="list pl0 mv0">
                {contacts.map((item) => {
                  return (
                    <li
                      className="right-panel__contact"
                      key={item}
                      style={{ wordBreak: 'break-all' }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right-panel__skills">
              <h3 className="right-panel__skills__title">Habilidades</h3>
              <ul className="list pl0 mv0">
                {skills.map((item) => {
                  return (
                    <li className="right-panel__skill" key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right-panel__languages">
              <h3 className="right-panel__languages__title">Idiomas</h3>
              <ul className="list pl0 mv0">
                {languages.map((item) => {
                  return (
                    <li className="right-panel__skill" key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right-panel__education">
              <h3 className="right-panel__education__title">Educación</h3>
              <ul className="list pl0 mv0">
                {education.map((item) => {
                  return (
                    <div className="right-panel__education__item" key={item.title}>
                      <h4 className="right-panel__education__item__company">{item.institution}</h4>
                      <span className="right-panel__education__item__title db">{item.title}</span>
                      <span className="right-panel__education__item__date db">
                        {convertDate(item.start)} -{convertDate(item.start)}`
                      </span>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="right-panel__achievements">
              <h3 className="right-panel__achievements__title">Logros</h3>
              <ul className="list pl0 mv0">
                {achievements.map((item) => {
                  return (
                    <li className="right-panel__achievement" key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="squareDesign__experiences">
            <h3 className="squareDesign__experiences__title">Experiencia</h3>
            {experience.map((item) => {
              return (
                <div className="experience" key={item.company + item.job}>
                  <h4 className="experience__job">{item.company}</h4>
                  <p className="experience__brief">
                    {`${item.job} | 
                                ${convertDate(item.start)} -
                                ${convertDate(item.end)}`}
                  </p>
                  <p className="experience__description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
