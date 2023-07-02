import { Container, Form, TextLink, InputArea, BackgroundImage } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AiOutlineMail } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    async function handleSignIn() {
        try {
            signIn({ email, password });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else  {
                console.log(error)
                alert("Nào foi possível fazer o login, tente novamente.");
            };
        };
    };
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
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        type="password"
                        icon={<FiLock/>}
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                    />              
                </InputArea>

                <Button 
                    title="Entrar"
                    onClick={handleSignIn}
                />

                <TextLink to="/signup">
                    Criar conta
                </TextLink>
            </Form>

            <BackgroundImage />
        </Container>
    );
};