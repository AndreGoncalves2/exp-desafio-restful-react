import { Container } from './styles';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Profile() {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();

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
                src="https://github.com/andregoncalves2.png" 
                alt="Foto do usuário" 
            />
        </Container>
    );
};