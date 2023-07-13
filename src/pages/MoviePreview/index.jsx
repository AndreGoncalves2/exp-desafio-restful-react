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
import moment from 'moment';

export function MoviePreview() {
    const [note, setNote]   = useState([]);
    const [newData, setNewData]   = useState("");
    
    const { user } = useAuth();
    const { id } = useParams();
    
    let newDate = moment(note.updated_at).format("DD/MM/YYYY HH:mm:ss");
    // newDate = moment(newDate).add(-3, "hours");
    setNewData(newDate)
    console.log(newDate);

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();
    
    async function handleDelete() {

        if (confirm("Tem certeza que deseja excluir essa nota ?")) {
            await api.delete(`/notes/${id}`);
            navigate("/");
        };
    };

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

                    <h3>{newData}</h3>
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