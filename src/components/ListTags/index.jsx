import { Container } from './styles';

export function ListTags({ tags }) {
    return (
        <Container>
            {tags.map(tag => (
                <li key={tag}>
                    <button>{tag}</button>    
                </li>
            ))}
        </Container>
    );
}