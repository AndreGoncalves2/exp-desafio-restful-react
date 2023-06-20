import { Container } from './styles';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

export function NewTag({ isNew, value, ...rest }){
    return(
        <Container $isNew={isNew}>
            <input
                type="text"
                readOnly={!isNew}
                {...rest}
                placeholder='Novo marcador'
                value={value}
            >
            </input>

            <button>
                {isNew? <AiOutlinePlus /> : <AiOutlineClose />}
            </button>
        </Container>
    );
}