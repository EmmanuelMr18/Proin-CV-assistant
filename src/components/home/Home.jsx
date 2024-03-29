import { Avatar, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { templateList } from '../../data/templates';
import { UserContext } from '../../main';
import { ActionsMenu } from './ActionsMenu';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();
  const user = useContext(UserContext);
  const { userImg, name, description } = user.data;
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home__header">
        <div className="user flex flex-wrap w-70">
          {userImg && (
            <Avatar src={userImg} sx={{ width: 128, height: 128 }} alt={`picture-${name}`} />
          )}
          <div className="user__text">
            <Typography variant="h6">{user.data.name}</Typography>
            <Typography>{description}</Typography>
          </div>
        </div>
        <div className="home__header__actions">
          <Button variant="contained" color="primary" onClick={() => navigate(`/fill-data`)}>
            {t`Edit My data`}
          </Button>
          <ActionsMenu />
        </div>
      </div>
      <div className="home__designs">
        <Typography variant="h6">{t`Available designs`}</Typography>
        <section className="designs">
          {templateList.map((templateName) => {
            return (
              <article key={templateName}>
                <Link className="designs__item dim" to={`/preview?design=${templateName}`}>
                  <img
                    className="designs__item__img"
                    src={`/assets/templates/${templateName}.webp`}
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
