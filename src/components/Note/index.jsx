import { Container } from './style';
import { ListTags } from '../ListTags';
import { Rating } from '../Rating';

export function Note({ title, description, tags, rating, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{title}</h2>

            <Rating rating={rating}/>

            <p>{description}</p>
            
            <ListTags tags={tags}/>
        </Container>
    );
}