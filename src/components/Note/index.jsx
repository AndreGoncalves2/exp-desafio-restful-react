import { Container } from './style';
import { ListTags } from '../ListTags';
import { Rating } from '../Rating';
import { ListTags } from '../ListTags';

export function Note({ title, description, tags }) {
    return (
        <Container>
            <h2>{title}</h2>
            <Rating/>
            <p>{description}</p>

            <ListTags>
                {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ListTags>
        </Container>
    );
}