import { Container, NoteHeader, NewTags, HighLighter, Controls } from "./styles";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";

import { useState } from "react";
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";

export function CreateNote() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function tagsAdd() {
        setTags(prevent => [...prevent, newTag]);
        setNewTag("");
    };

    function removeTag(tagName) {
        const tagsFiltered = tags.filter(tag => tag != tagName);
        setTags(tagsFiltered);
    };

    async function handleSaveNote() {
        const note = {
            title,
            description,
            rating,
            tags
        };

        try {
            await api.post("/notes", note);
            alert("Nota criada com sucesso !");
            navigate("/");
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error);
            };
        };
    };
    
    return (
        <Container>
            <Header/>

            <main>
                <TextButton/>
                <h1>Novo filme</h1>

                <NoteHeader>
                    <Input
                        type="text"
                        placeholder="Titulo"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Sua nota (de 0 a 5)"
                        onChange={(e) => setRating(e.target.value)}
                    />
                </NoteHeader>

                <textarea
                    placeholder="Observações"
                    onChange={(e) => setDescription(e.target.value)}
                />
                
                <HighLighter>
                    <h2>Marcadores</h2>

                    <NewTags>
                        {
                            tags.map((tag, index) => (
                                <NewTag 
                                    key={index}
                                    value={tag}
                                    onClick={() => removeTag(tag)}
                                />
                            ))
                        }

                        <NewTag 
                            isNew
                            onChange={(e)=> setNewTag(e.target.value)}
                            onClick={tagsAdd}
                            value={newTag}
                        />
                    </NewTags>
                </HighLighter>

                <Controls>
                    <Button 
                        title="Excluir filme"
                        className="delete"
                    />

                    <Button 
                        title="Salvar alterações"
                        className="save"
                        onClick={handleSaveNote}
                    />
                </Controls>
            </main>
        </Container>
    );
};