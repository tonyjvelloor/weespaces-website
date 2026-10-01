file_path = "src/components/VOExitIntentPopup.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Replace generate_lead with lead_callback
content = content.replace("'generate_lead'", "'lead_callback'")

with open(file_path, "w") as f:
    f.write(content)
