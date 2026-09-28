file_path = "src/app/api/capture-lead/route.ts"
with open(file_path, "r") as f:
    content = f.read()

target = """        }).catch(err => console.error("Failed to send email notification:", err))
      );
    }

    // 3. Try forwarding to Growth OS"""

replacement = """        }).catch(err => console.error("Failed to send email notification:", err))
      );
    }
    
    // B. Send Automated Nurture Email to the Lead (if they requested a guide)
    if (resendApiKey && body.leadMagnet === 'pricing_guide' && body.email) {
      promises.push(
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'WeeSpaces <hello@weespaces.in>',
            to: body.email,
            subject: 'Your 2026 Workspace Pricing Guide is here!',
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
                <h2>Hi there,</h2>
                <p>Thanks for requesting the <strong>South India Workspace Pricing Guide</strong>.</p>
                <p>As promised, here is the direct link to download your copy:</p>
                <div style="margin: 30px 0;">
                  <a href="https://weespaces.in/pricing-guide.pdf" style="background-color: #fca311; color: #14213d; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 6px;">Download The Guide (PDF)</a>
                </div>
                <p>Inside, you'll find the exact per-seat breakdown for Kochi, Trivandrum, Calicut, and Coimbatore, plus hidden fees to watch out for.</p>
                <p>If you're ready to explore spaces, just reply directly to this email or <a href="https://weespaces.in/">book a tour online</a>.</p>
                <p>Best,<br>The WeeSpaces Team</p>
              </div>
            `
          })
        }).catch(err => console.error("Failed to send nurture email:", err))
      );
    }

    // 3. Try forwarding to Growth OS"""

content = content.replace(target, replacement)

with open(file_path, "w") as f:
    f.write(content)
print("Safe patch applied.")
