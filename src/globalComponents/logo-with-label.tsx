import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-family: "Baloo Bhai 2", cursive;
`

const Image = styled.img`
    width: 40px;
`
export default function LogoWithLabel() {
    return (
        <Container>
            <Image src="/icon.svg" alt="Logo" />
            <Title>EducaGame</Title>
        </Container>
    )
}