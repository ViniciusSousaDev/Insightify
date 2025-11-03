import { useState } from "react";
import axios from "axios";

export default function ChatBox({ summary }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question) return;
    const res = await axios.post("http://localhost:8000/ask", { question, summary });
    setAnswer(res.data.answer);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Faça sua pergunta sobre a planilha"
        className="border p-2 w-2/3"
      />
      <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded" onClick={handleAsk}>
        Perguntar
      </button>
      {answer && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <strong>Resposta:</strong> {answer}
        </div>
      )}
    </div>
  );
}
