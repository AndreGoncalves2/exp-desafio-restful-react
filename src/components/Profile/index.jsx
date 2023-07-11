import { Container } from './styles';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import  avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useEffect, useState } from 'react';

export function Profile() {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        fetch(`${api.defaults.baseURL}/files/${user.avatar}`).then((ev) => {
            if (ev.ok) {
                setAvatar(`${api.defaults.baseURL}/files/${user.avatar}`);
            } else {
                setAvatar(avatarPlaceholder);
            };
        });
    }, []);
    
    function handleSignOut() {
        signOut();
        navigate("/");
    };

    return (
        <Container>
            <div>
                <h2
                    onClick={() => navigate("/profile")}
                >
                    {user.name}
                </h2>

                <button
                    onClick={handleSignOut}
                >
                    sair
                </button>
            </div>

            <img 
                onClick={() => navigate("/profile")}
                src={avatar}
                alt="Foto do usuário" 
            />
        </Container>
    );
};