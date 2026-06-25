const url = "https://script.google.com/macros/s/AKfycby-ZZi3pA2o7oW_i0ESKH3qAPc4UT2KZSfTQcGCNxk5a1q0AV3Jq7KSeEdxWqCAhViF/exec";
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Test Lead",
    phone: "+919999999999",
    source: "Automated Test",
    timestamp: new Date().toISOString()
  })
})
.then(r => r.text())
.then(console.log)
.catch(console.error);
