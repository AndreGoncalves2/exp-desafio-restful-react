import { Container, NoteHeader } from "./styles";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { HighLighter } from "../../components/HighLighter";

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

                <HighLighter/>
            </main>
        </Container>
    );
}