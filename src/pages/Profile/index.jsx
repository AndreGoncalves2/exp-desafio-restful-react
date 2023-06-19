import { Container, Header, Avatar, Form } from './styles';

import { FiLock } from 'react-icons/fi';
import { AiOutlineCamera, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';


import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
export function Profile() {
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
                />

                <Input
                    type="email"
                    icon={<AiOutlineMail/>}
                    placeholder="E-mail"
                />
                
                <Input
                    type="password"
                    icon={<FiLock/>}
                    placeholder="Senha atual"
                />

                <Input
                    type="password"
                    icon={<FiLock/>}
                    placeholder="Nova senha"
                />

                <Button
                    title="Salvar"
                />
            </Form>
        </Container>
    );
}