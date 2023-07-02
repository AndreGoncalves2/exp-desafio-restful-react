import { Container } from './styles';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

export function NewTag({ isNew, value, onChange, ...rest }){
    return(
        <Container $isNew={isNew}>
            <input
                type="text"
                readOnly={!isNew}
                placeholder='Novo marcador'
                value={value}
                onChange={onChange}
            >
            </input>

            <button
                type='button'
                {...rest}
            >
                {isNew? <AiOutlinePlus /> : <AiOutlineClose />}
            </button>
        </Container>
    );
}