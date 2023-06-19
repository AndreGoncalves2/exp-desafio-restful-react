import { Container } from './style';
import { ListTags } from '../ListTags';
import { Rating } from '../Rating';

export function Note({ title, description, tags }) {
    return (
        <Container>
            <h2>{title}</h2>
            <Rating/>
            <p>{description}</p>

            <ListTags tags={tags}/>
        </Container>
    );
}