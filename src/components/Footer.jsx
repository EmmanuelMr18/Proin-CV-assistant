import { Link } from '@mui/material';

export function Footer(){
    return(
        <div className="flex justify-around b-color main-box">
            <div className="p-footer">
                <h3 className='title'>CREADOR DEL PROYECTO</h3>
                <p className="p-footer">JOSÉ EMMANUEL MORALES RIOS</p>
                <b>
                <Link href="https://github.com/EmmanuelMr18" underline="hover" color="#f48fb1" target="_blank">
                    {'Github'}
                </Link>
                </b>
                <p className="p-footer">CONTACTO:</p>
                <p>emman.mr@gmail.com</p>
            </div>
            <div>
                <h3 className='title'>MANTENIMIENTO REALIZADO POR:</h3>
                <div className="flex justify-around p-footer main-box">
                    <div className="m-footer">
                        <p className="p-footer">KIMBERLY DAMARIS GUEVARA RIZO</p>      
                        <b>                
                        <Link href="https://github.com/" underline="hover" color="#f48fb1" target="_blank">
                            {'Github'}
                        </Link>
                        </b>
                        <p>CONTACTO:</p>
                        <p>kimberly@micorreo.upp.edu.mx</p>
                    </div>
                    <div className="m-footer">
                        <p>JOSÉ ANTONIO SALAS PORTUGAL</p>
                        <b>                
                        <Link href="https://github.com/Antonio-Salas" underline="hover" color="#f48fb1" target="_blank">
                            {'Github'}
                        </Link>
                        </b>
                        <p>CONTACTO:</p>
                        <p>salas.antonio10@micorreo.upp.edu.mx</p>
                    </div>
                    <div className="m-footer">
                        <p>JARED ANTONIO SIERRA HERNANDEZ</p>
                        <b>
                        <Link href="https://github.com/JaredShim" underline="hover" color="#f48fb1" target="_blank">
                            {'Github'}
                        </Link>
                        </b>
                        <p>CONTACTO:</p>
                        <p>jared.sh@micorreo.upp.edu.mx</p>
                    </div>
                </div>
            </div>
        </div>        
    );
}