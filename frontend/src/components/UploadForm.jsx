import { useState } from "react";
import axios from "axios";

export default function UploadForm({ setSummary }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:8000/upload", formData);
    setSummary(res.data.summary);
    alert("Upload concluído!");
  };

  return (
    <div className="p-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleUpload}>
        Enviar Planilha
      </button>
    </div>
  );
}
