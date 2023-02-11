import { Button } from '@mui/material';
import moment from 'moment';
import { lazy, useEffect } from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const importTemplate = (templateName) =>
  lazy(() => import(`../templates/${templateName}.jsx`).catch(() => import(`../shared/NotFound`)));
export function Preview() {
  const [component, setComponent] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const design = params.get('design');
  moment.lang('es', {
    months:
      'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
        '_'
      ),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  });

  useEffect(() => {
    async function loadTemplate() {
      const Template = await importTemplate(design);
      setComponent(<Template />);
    }
    loadTemplate();
  }, [design]);

  return (
    <>
      <div className="mw7 center">
        <Button
          id="download-print-btn"
          onClick={() => {
            window.print();
          }}
          variant="contained"
        >
          Descargar/Imprimir
        </Button>
      </div>
      <div id="preview-container">
        <Suspense fallback="">{component}</Suspense>
      </div>
      ;
    </>
  );
}
