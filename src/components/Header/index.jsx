import { Container } from './styles';

import { Input } from '../Input';
import { Profile } from '../Profile';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo titulo" />
            <Profile 
                onClick={() => console.log("foi")}
            />
        </Container>
    );
}