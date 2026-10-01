file_path = "src/components/CampaignHeader.tsx"
with open(file_path, "r") as f:
    content = f.read()

content = content.replace('href="#form-id"', 'href="#lead-form"')
with open(file_path, "w") as f:
    f.write(content)
