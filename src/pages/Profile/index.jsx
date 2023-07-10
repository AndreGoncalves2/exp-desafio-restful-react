import { Container, Header, Avatar, Form } from './styles';

import { FiLock } from 'react-icons/fi';
import { AiOutlineCamera, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';


import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useState } from 'react'
import { useAuth } from '../../hooks/auth';

import  avatarPlaceholder from '../../assets/avatar_placeholder.svg';
export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const avatarUrl = user.avatar ? `${api.default.baseurl}/files/%{user.avatar}` : avatarPlaceholder;
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatar, setAvatar] = useState(avatarUrl);

    async function handleUpdate() {
        const updatedUser = {
            name,
            email,
            password,
            newPassword
        };
        const userUpdated = Object.assign(user, updatedUser);
        await updateProfile({ user: userUpdated, avatarFile })
    };

    async function handleAvatar(event) {
        
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    };

    return (
        <Container>
            <Header>
                <TextButton/>
            </Header>

            <Avatar>
                <img src={avatar} alt="Foto do usuário"/>

                <label htmlFor="Avatar">
                    <AiOutlineCamera/>

                    <input
                        id="Avatar"
                        type="file" 
                        onChange={handleAvatar}
                     />
                </label>
            </Avatar>

            <Form>
                <Input
                    type="text"
                    icon={<AiOutlineUser/>}
                    placeholder={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    type="email"
                    icon={<AiOutlineMail/>}
                    placeholder={email}
                    onChange={(e) => setEmail(e.target.value)}
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