import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { BasicDesign } from './templates/BasicDesign';
import { SquareDesign } from './templates/SquareDesign';

export function Preview(props) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const design = params.get('design');
    moment.lang('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
            '_'
        ),
        monthsShort:
            'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split(
                '_'
            ),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split(
            '_'
        ),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
    });
    // moment.locale('es');
    switch (design) {
        case 'basicDesign':
            return <BasicDesign />;
        case 'SquareDisign':
            return <SquareDesign />
        default:
            return (
                <div className="mw9 pa3 center">
                    Parece que este diseño no existe
                </div>
            );
    }
}
