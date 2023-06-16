import { Container, ListTags } from './style';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Note({ title, description, tags }) {
    return (
        <Container>
            <h2>{title}</h2>
            <div> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/> </div>
            <p>{description}</p>

            <ListTags>
                {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ListTags>
        </Container>
    );
}