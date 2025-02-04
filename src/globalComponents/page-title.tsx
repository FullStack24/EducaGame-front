import styled from "styled-components";
import Colors from "./colors";

const PageTitleComponent = styled.h1`
    font-size: 22px;
    font-weight: bold;
    color: ${Colors.white};
`

interface PageTitleProps{
    label: string;
}
export default function PageTitle({label}: PageTitleProps) {
    return <PageTitleComponent>{label}</PageTitleComponent>
}