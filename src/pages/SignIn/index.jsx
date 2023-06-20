import { Container, Form, TextLink, InputArea, BackgroundImage } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AiOutlineMail } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <InputArea>
                    <Input 
                        type="email"
                        placeholder="E-mail"
                        icon={<AiOutlineMail/>}
                    />

                    <Input 
                        type="password"
                        icon={<FiLock/>}
                        placeholder="Senha"
                    />              
                </InputArea>

                <Button title="Entrar"/>

                <TextLink to="/signup">
                    Criar conta
                </TextLink>
            </Form>

            <BackgroundImage />
        </Container>
    );
}