import { Container } from './styles';

export function Input({  icon: Icon, placeholder,...rest }) {
    return (
        <Container {...rest} >
            {Icon}
            <input 
                placeholder={placeholder}
            />
        </Container>
    );
}