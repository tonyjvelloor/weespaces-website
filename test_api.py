import urllib.request
import json
import ssl

url = "https://weespaces.in/api/capture-lead/"
data = {
    "name": "Live API Test",
    "phone": "9999999999",
    "source": "Automated Debugging"
}
req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers={'Content-Type': 'application/json'})

try:
    context = ssl._create_unverified_context()
    response = urllib.request.urlopen(req, context=context)
    print("Status:", response.status)
    print("Response:", response.read().decode('utf-8'))
except Exception as e:
    print("Error:", e)
