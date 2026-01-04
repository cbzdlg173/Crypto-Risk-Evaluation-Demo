import pandas as pd
import json

file_path = 'cmc_market_cap_with_risk_demo.xlsx'

try:
    df = pd.read_excel(file_path)
    # Convert to list of dicts
    data = df.to_dict(orient='records')
    # Print as JSON string
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, default=str)
    print("Data written to data.json")
except Exception as e:
    print(f"Error: {e}")
