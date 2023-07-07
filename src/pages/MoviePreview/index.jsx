import { Container } from './styles';

import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Rating } from '../../components/Rating';
import { ListTags } from '../../components/ListTags';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

export function MoviePreview() {
    const [note, setNote]   = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        async function renderNote() {
            const { data } = await api.get("/notes/7");
            setNote(data.note);
        };
        renderNote();
    }, [])
    return (
        <Container>
            <Header />

            <main>
            <TextButton/>
                <div className='rating'>
                    <h2>{note.title}</h2>
                    <Rating/>
                </div>

                <div className='author-inf'>
                    <img src="https://github.com/andregoncalves2.png" alt="Foto do usuário" />
                    <h3>{`Por ${user.name}`}</h3>
                    <AiOutlineClockCircle/>
                    <h3>{note.updated_at}</h3>
                </div>
                {
                    note.tags &&
                    <ListTags tags={note.tags} />
                }

                {   
                    note.tags &&
                    <p>{note.description}</p>    
                }
            </main>
        </Container>
    );
}