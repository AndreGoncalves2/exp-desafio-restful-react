import { Container, NoteHeader, NewTags, HighLighter, Controls } from "./styles";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";

export function CreateNote() {
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
                    />

                    <Input
                        type="text"
                        placeholder="Sua nota (de 0 a 5)"
                    />
                </NoteHeader>

                <textarea
                    placeholder="Observações"
                />
                
                <HighLighter>
                    <h2>Marcadores</h2>

                    <NewTags>
                        <NewTag value="React"/>
                        <NewTag isNew/>
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
                    />
                </Controls>
            </main>
        </Container>
    );
}