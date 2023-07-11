import { Container } from './styles';

import { Input } from '../Input';
import { Profile } from '../Profile';

export function Header({ onChange, onInput }) {
    return (
        <Container>
            <h1>RocketMovies</h1>
            { onInput &&
                <Input 
                    placeholder="Pesquisar pelo titulo" 
                    onChange={onChange} 
                />
            }
            
            <Profile />
        </Container>
    );
}