import styled from "styled-components";
import Colors from "./colors";

const InputComponent = styled.input`
    padding: 10px 20px;
    background-color: transparent;
    color: ${Colors.gray};
    border: 1px solid ${Colors.gray};
    border-radius: 5px;
    font-size: 12px;
    width: 100%;
`

const Label = styled.label`
    color: ${Colors.black};
    font-weight: 600;
    font-size: 13px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

interface InputProps{
    label: string;
    placeholder: string;
    type: string;
    value: string;
    setValue: (value: string) => void;
}

export default function Input({label, placeholder, type, value, setValue}: InputProps) {
    return ( <Container>
        <Label>{label}</Label>
        <InputComponent value={value} onChange={e => setValue(e.target.value)} type={type} placeholder={placeholder} />
    </Container>
    )
}