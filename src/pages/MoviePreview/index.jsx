import { Container } from './styles';

import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Rating } from '../../components/Rating';
import { ListTags } from '../../components/ListTags';
import { Button } from '../../components/Button';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

import  avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import moment from 'moment/moment';

export function MoviePreview() {
    const [note, setNote]   = useState([]);

    const { user } = useAuth();
    const { id } = useParams();

    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
 
    async function handleDelete() {

        if (confirm("Tem certeza que deseja excluir essa nota ?")) {
            await api.delete(`/notes/${id}`);
            navigate("/");
        };
    };
    
    const dateFormatted = moment(new Date ((note.updated_at + "z"))).format("DD.MM.YYYY HH:mm:ss");
    console.log(dateFormatted.toString());

    useEffect(() => {
        async function renderNote() {
            const { data } = await api.get(`/notes/${id}`);
            setNote(data.note);
        };
        renderNote();
        
    }, []);

    return (
        <Container>
            <Header />

            <main>
                <TextButton/>

                <div className='rating'>
                    <h2>{note.title}</h2>
                    <Rating rating={note.rating} />
                </div>

                <div className='author-inf'>
                    <img src={avatarUrl} alt="Foto do usuário" />

                    <h3>{`Por ${user.name}`}</h3>

                    <AiOutlineClockCircle/>

                    <h3>{dateFormatted}</h3>
                </div>
                {
                    note.tags &&
                    <ListTags tags={note.tags} />
                }

                {   
                    note.tags &&
                    <p>{note.description}</p>    
                }

                <Button
                    title="Excluir nota"
                    className="save"
                    onClick={handleDelete}
                />
            </main>
        </Container>
    );
}