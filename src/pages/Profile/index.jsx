import { Container, Header, Avatar, Form } from './styles';

import { FiLock } from 'react-icons/fi';
import { AiOutlineCamera, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';


import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useState } from 'react'
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const navigate = useNavigate();

    async function handleUpdate() {
        const updatedUser = {
            name,
            email,
            password,
            newPassword
        };
        const userUpdated = Object.assign(user, updatedUser);
        updateProfile(userUpdated)
    };

    return (
        <Container>
            <Header>
                <TextButton/>
            </Header>

            <Avatar>
                <img src="https://github.com/andregoncalves2.png" alt="Foto do usuário"/>

                <label htmlFor="Avatar">
                    <AiOutlineCamera/>

                    <input
                        id="Avatar"
                        type="file" 
                     />
                </label>
            </Avatar>

            <Form>
                <Input
                    type="text"
                    icon={<AiOutlineUser/>}
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <Input
                    type="email"
                    icon={<AiOutlineMail/>}
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                
                <Input
                    type="password"
                    icon={<FiLock/>}
                    placeholder="Senha atual"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                    type="password"
                    icon={<FiLock/>}
                    placeholder="Nova senha"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>
        </Container>
    );
};