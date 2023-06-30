import { Container, Form, TextLink, InputArea, BackgroundImage } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AiOutlineMail, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Por favor, preencha todos os campo");
        };

        const user = {
            name,
            email,
            password
        };


        api.post('/users', user).then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(err => {
            if (err.response) {
                alert(err.response.data.message)
            } else {
                alert("Não foi possível cadastrar usuário, tente novamente.")
            };
        });
    };
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
                        onChange={(event) => setName(event.target.value)}
                    />
                    
                    <Input 
                        type="email"
                        placeholder="E-mail"
                        icon={<AiOutlineMail/>}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input 
                        type="password"
                        icon={<FiLock/>}
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />              
                </InputArea>

                <Button 
                    title="Cadastrar"
                    onClick={handleSignUp}
                />

                <TextLink to="/">
                    <AiOutlineArrowLeft /> Voltar para o login
                </TextLink>
            </Form>

            <BackgroundImage />
        </Container>
    );
}