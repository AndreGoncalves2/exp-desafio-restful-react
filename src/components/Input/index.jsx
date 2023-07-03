import { Container } from './styles';

export function Input({  icon: Icon, placeholder, type, value, ...rest }) {
    return (
        <Container {...rest} >
            {Icon}
            <input 
                value={value}
                type={type}
                placeholder={placeholder}
            />
        </Container>
    );
}