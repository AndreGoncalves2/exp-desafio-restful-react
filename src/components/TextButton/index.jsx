import { Container } from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export function TextButton() {
    return (
        <Container to="/">
            <AiOutlineArrowLeft />
            Voltar
        </Container>
    );
}