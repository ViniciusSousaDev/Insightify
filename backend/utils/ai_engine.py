import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")  # Configure a variável de ambiente

def ask_gpt(question: str, data_summary: str):
    prompt = f"Você é um assistente de dados. Aqui está um resumo dos dados:\n{data_summary}\nPergunta: {question}\nResposta:"
    response = openai.Completion.create(
        engine="text-davinci-003",  # ou gpt-4 se disponível
        prompt=prompt,
        max_tokens=500,
        temperature=0
    )
    return response.choices[0].text.strip()
