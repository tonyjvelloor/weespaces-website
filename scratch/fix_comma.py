file_path = "src/data/comparisons.ts"
with open(file_path, "r") as f:
    content = f.read()

content = content.replace("  }\n  'incuspaze': {", "  },\n  'incuspaze': {")

with open(file_path, "w") as f:
    f.write(content)
