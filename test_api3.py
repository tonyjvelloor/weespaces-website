import urllib.request
import json
import ssl

url = "https://weespaces.in/api/capture-lead"
data = {
    "name": "Live API Test 3",
    "phone": "9999999999",
    "source": "Automated Debugging"
}
req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers={'Content-Type': 'application/json'})

try:
    context = ssl._create_unverified_context()
    response = urllib.request.urlopen(req, context=context)
except urllib.error.HTTPError as e:
    print("HTTP Error:", e.code)
    print("Headers:", e.headers)
    print("Read:", e.read().decode('utf-8'))
except Exception as e:
    print("Error:", e)
