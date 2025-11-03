import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ChatBox from "./components/ChatBox";

export default function App() {
  const [summary, setSummary] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Insightify</h1>
      <UploadForm setSummary={setSummary} />
      {summary && <ChatBox summary={summary} />}
    </div>
  );
}
