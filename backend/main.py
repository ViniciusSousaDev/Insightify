from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from utils.data_reader import read_spreadsheet
from utils.insight_generator import generate_summary
from utils.ai_engine import ask_gpt

app = FastAPI()

# Configuração CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    df = read_spreadsheet(file_path)
    summary = generate_summary(df)
    
    return {"filename": file.filename, "summary": summary}

@app.post("/ask")
async def ask_question(question: str, summary: str):
    answer = ask_gpt(question, summary)
    return {"answer": answer}
