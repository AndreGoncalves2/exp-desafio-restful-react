import { Container, Form, TextLink, InputArea, BackgroundImage } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AiOutlineMail, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <InputArea>
                    <Input 
                        type="text"
                        placeholder="Nome"
                        icon={<AiOutlineUser/>}
                    />
                    
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

                <Button title="Cadastrar"/>

                <TextLink to="/">
                    <AiOutlineArrowLeft /> Voltar para o login
                </TextLink>
            </Form>

            <BackgroundImage />
        </Container>
    );
}