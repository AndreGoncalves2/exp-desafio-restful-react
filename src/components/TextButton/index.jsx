import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export function TextButton() {
    const navigate = useNavigate();
    return (
        <Container 
            onClick={() => navigate(-1)}
        >
            <AiOutlineArrowLeft />
            Voltar
        </Container>
    );
}