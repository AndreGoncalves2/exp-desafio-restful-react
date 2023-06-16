import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { FiPlus } from 'react-icons/fi';

export function Home() {
    return (
        <Container>
            <Header/>
            <Button title="Adicionar filme" icon={FiPlus}/>
        </Container>
    );
}