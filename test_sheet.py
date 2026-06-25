import urllib.request
import json
import ssl

url = "https://script.google.com/macros/s/AKfycby-ZZi3pA2o7oW_i0ESKH3qAPc4UT2KZSfTQcGCNxk5a1q0AV3Jq7KSeEdxWqCAhViF/exec"
data = {
    "name": "Test Lead from Python",
    "phone": "+919999999999",
    "source": "Automated Test",
    "timestamp": "2026-06-24T12:00:00Z"
}
req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers={'Content-Type': 'application/json'})

try:
    context = ssl._create_unverified_context()
    response = urllib.request.urlopen(req, context=context)
    print("Status:", response.status)
    print("Response:", response.read().decode('utf-8'))
except Exception as e:
    print("Error:", e)
