import styled from "styled-components"
import Colors from "./colors"

const LabelLinkComponent = styled.span`
    color: ${Colors.red};
    cursor: pointer;
    text-decoration: underline;
    font-size: 12px;
    text-align: center;
`

interface LabelLinkProps{
    label: string
    onClick: () => void
}

export default function LabelLink({label, onClick} : LabelLinkProps){
    return <LabelLinkComponent onClick={onClick}>
        {label}
    </LabelLinkComponent>
}