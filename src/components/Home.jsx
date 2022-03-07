import { Button } from '@mui/material';
import { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../main';
import { InitialForm } from './InitialForm';
import { Navbar } from './Navbar';

export function Home() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [userImg, setUserImg] = useState('');
    useEffect(() => {
        fetch(user.userImg)
            .then((res) => res.blob())
            .then((blob) => {
                const objectURL = URL.createObjectURL(blob);
                // const myImage = new Image();
                // debugger
                setUserImg(objectURL);
            });
    }, [user]);
    console.log(userImg);
    return (
        <Fragment>
            <div className="mw8 mt4 center">
                <p>{`Bienvenido ${user.name}`}</p>
                <img className="mr5" src={userImg} alt={user.name} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/fill-data`)}
                >
                    Editar mis datos
                </Button>
            </div>
        </Fragment>
    );
}
