import { Container } from './styles';

export function Input({  icon: Icon, placeholder, type, value, onChange, ...rest }) {
    return (
        <Container {...rest} >
            {Icon}
            <input 
                {...rest}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    );
}