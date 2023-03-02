import dados.json
with open('faturamento.json') as f:
    faturamento = dados.json.load(f)
faturamento_diario = faturamento['faturamento_diario']
dias = len(faturamento_diario)

soma_faturamento = sum