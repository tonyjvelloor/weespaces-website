import os
import glob

def get_context(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    for i, line in enumerate(lines):
        if '<SEOFAQ' in line:
            print(f"File: {filepath}")
            # print up to 5 lines before
            start = max(0, i-5)
            for j in range(start, i+1):
                print(f"  {j+1}: {lines[j].strip()}")
            print("-" * 40)

files = glob.glob('src/**/*.tsx', recursive=True)
for f in files:
    get_context(f)
