'use client';
import Image from "next/image";
import { Container, Title, Dropdown, List, ListItem } from './page.styles';

const teams = [
  { name: "Turma 1", points: 120 },
  { name: "Turma 2", points: 100 },
  { name: "Turma 3", points: 80 },
  { name: "Turma 4", points: 60 },
];

export default function Ranking() {
  return (
    <Container>
      <Title>Ranking</Title>
      <Dropdown>
        <option>Turmas</option>
        <option>Alunos</option>
      </Dropdown>
      <List>
        {teams.map((team, index) => (
          <ListItem key={index}>
            <span>{team.name}</span>
            <span>{team.points} pontos</span>
            <Image src="/moeda.svg" alt="Editar" width={30} height={30} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
