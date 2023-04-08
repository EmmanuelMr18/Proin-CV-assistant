import { Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Navbar() {
  const { i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <nav id="navbar">
      <Link to="/">
        <img src="/assets/proin2.png" alt="proin logo" />
      </Link>
      <ButtonGroup className="language">
        <Button
          onClick={() => changeLanguage('es')}
          variant={i18n.resolvedLanguage === 'es' ? 'contained' : 'outlined'}
        >
          ES
        </Button>
        <Button
          onClick={() => changeLanguage('en')}
          variant={i18n.resolvedLanguage === 'en' ? 'contained' : 'outlined'}
        >
          EN
        </Button>
      </ButtonGroup>
    </nav>
  );
}
