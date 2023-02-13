import { Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { templateList } from '../../data/templates';
import { UserContext } from '../../main';

export function Home() {
  const user = useContext(UserContext);
  const { userImg, name, description } = user.data;
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home__header">
        <div className="user flex flex-wrap w-70">
          {userImg && (
            <div className="user__img">
              <img className="user__img__picture" src={userImg} alt={`${name}-picture`} />
            </div>
          )}
          <div className="user__text">
            <Typography variant="h6">{user.data.name}</Typography>
            <Typography>{description}</Typography>
          </div>
        </div>
        <div className="home__header__actions">
          <Button variant="contained" color="primary" onClick={() => navigate(`/fill-data`)}>
            Editar mis datos
          </Button>
        </div>
      </div>
      <div className="home__designs">
        <Typography variant="h6">Diseños disponibles</Typography>
        <section className="designs">
          {templateList.map((templateName) => {
            return (
              <article key={templateName}>
                <Link className="designs__item dim" to={`/preview?design=${templateName}`}>
                  <img
                    className="designs__item__img"
                    src={`/assets/templates/${templateName}.png`}
                    alt={templateName}
                  />
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
