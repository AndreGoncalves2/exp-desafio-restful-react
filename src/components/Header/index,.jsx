import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo titulo" />
            <Profile/>
        </Container>
    );
}