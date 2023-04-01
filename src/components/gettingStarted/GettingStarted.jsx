import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import { useContext } from 'react';
import { UserContext } from '../../main';
import { importData } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

export function GettingStarted() {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  function handleImportData(e) {
    importData(e).then((dataObj) => {
      user.update({ ...dataObj });
      navigate('/');
    });
  }
  function handleCaptureData() {
    navigate('/fill-data');
  }
  return (
    <>
      <div className="getting-started">
        <div className="getting-started__actions">
          <Card className="action-card">
            <CardActionArea>
              <CardContent className="action-card__content">
                <label htmlFor="import-data">
                  <div className="action-card__content__icon">
                    <CloudUploadOutlinedIcon color="primary" fontSize="inherit" />
                  </div>
                  <div className="action-card__content__text">
                    <Typography variant="body1">
                      <b>¿Ya haz usado la app anteriormente?</b>
                    </Typography>
                    <Typography variant="body2">Importa tus datos desde un achivo .json</Typography>
                  </div>
                </label>
              </CardContent>
            </CardActionArea>
          </Card>
          <input
            className="home__header__actions__hidden"
            type="file"
            id="import-data"
            onChange={handleImportData}
          />
          <Card className="action-card">
            <CardActionArea onClick={handleCaptureData}>
              <CardContent className="action-card__content">
                <div className="action-card__content__icon">
                  <DesignServicesOutlinedIcon color="primary" fontSize="inherit" />
                </div>
                <div className="action-card__content__text">
                  <Typography variant="body1">
                    <b>¿Eres un usuario nuevo?</b>
                  </Typography>
                  <Typography variant="body2">Captura tus datos con el asistente</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  );
}
