import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchRankingAlunos, fetchRankingTurmas } from "@/services/ranking";
import Select from "@/globalComponents/Select";

const Ranking = () => {
  const router = useRouter();
  const [tipo, setTipo] = useState("Alunos");
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = tipo === "Alunos" ? await fetchRankingAlunos() : await fetchRankingTurmas();
      setDados(response);
    };
    fetchData();
  }, [tipo]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ranking</h1>
      <Select options={["Alunos", "Turmas"]} value={tipo} onChange={setTipo} />
      <ul className="mt-4 border p-4 rounded-md">
        {dados.map((item, index) => (
          <li key={index} className="p-2 border-b last:border-0">
            <span className="font-bold">{item.nome}</span>: {item.pontuacao} pontos
          </li>
        ))}
      </ul>
      <button onClick={() => router.push("/home")} className="mt-4 p-2 bg-blue-500 text-white rounded">Voltar</button>
    </div>
  );
};

export default Ranking;
