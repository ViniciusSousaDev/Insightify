def generate_summary(df):
    """Gera resumo simples da planilha para enviar à IA"""
    summary = f"A planilha possui {df.shape[0]} linhas e {df.shape[1]} colunas.\n"
    summary += "Colunas: " + ", ".join(df.columns) + "\n"
    summary += "Exemplo de dados:\n"
    summary += df.head(5).to_string(index=False)
    return summary
