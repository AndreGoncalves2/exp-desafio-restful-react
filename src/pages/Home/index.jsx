import { Container, ButtonDiv } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { FiPlus } from 'react-icons/fi';
import { Note } from '../../components/Note';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function renderNotes() {
            const { data } = await api.get("/notes");
            setNotes(data.notes);
        };
        renderNotes();
    }, []);

    return (
        <Container>
            <Header/>
            
            <ButtonDiv>
                <h2>Meus Filmes</h2>
                <Button 
                    title="Adicionar filme" 
                    icon={FiPlus}
                    onClick={() => navigate("/new")}
                />
            </ButtonDiv>

            <main>
                {
                    notes.map((note, index) => (
                        <Note 
                            key={index}
                            title={note.title}
                            description={note.description}
                            tags={note.tags}
                            onClick={() => navigate(`/preview/${note.id}`)}
                        />
                    ))
                }   
            </main>
        </Container>
    );
};