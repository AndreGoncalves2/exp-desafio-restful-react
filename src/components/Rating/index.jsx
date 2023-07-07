import { Container } from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export function Rating({ rating }) {
    let ratings = [];
    for (let i = 0; i <= 4; i++) {
        i < rating ? ratings[i] = <AiFillStar key={i}/> : ratings[i] = <AiOutlineStar key={i}/>;
    };

    return (
        <Container>
            {ratings} 
        </Container>
    );
}