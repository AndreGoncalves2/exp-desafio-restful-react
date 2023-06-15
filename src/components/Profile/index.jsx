import { Container } from './styles';

export function Profile() {
    return (
        <Container>
            <div>
                <h2>Andre Gonçalves</h2>
                <button>sair</button>
            </div>
            <img src="https://github.com/andregoncalves2.png" alt="Foto do usuário" />
        </Container>
    );
}