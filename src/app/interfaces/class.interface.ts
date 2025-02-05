export default interface IClass {
  id: number;
  name: string;
  professor: {
    name: string;
  };
  alunos: {
    length: number;
  };
}
