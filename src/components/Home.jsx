import { Button } from '@mui/material';
import { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../main';
import { InitialForm } from './InitialForm';
import { Navbar } from './Navbar';

export function Home() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="mw8 mt4 pa3 center">
                <p>{`Bienvenido ${user.name}`}</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/fill-data`)}
                >
                    Editar mis datos
                </Button>
            </div>
            <div className="mw8 pv4 pa3 center">
                <a href="/preview?design=basicDesign">
                    <article>Diseño básico</article>
                </a>
                <a href="/preview?design=SquareDisign">
                    <article>Diseño cuadrado</article>
                </a>
            </div>
        </Fragment>
    );
}
