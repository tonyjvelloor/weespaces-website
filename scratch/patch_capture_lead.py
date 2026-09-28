import re

file_path = "src/app/api/capture-lead/route.ts"

with open(file_path, "r") as f:
    content = f.read()

# Let's find the Resend block and add a new promise that sends the guide to the user
target_code = """    // 2. Send Email Notification
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (resendApiKey && notificationEmail) {"""

replacement_code = """    // 2. Send Email Notification & Lead Magnets
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (resendApiKey) {
      // A. Send Lead Notification to Sales Team
      if (notificationEmail) {
        promises.push(
          fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'WeeSpaces Leads <onboarding@resend.dev>',
              to: notificationEmail,
              subject: `New Lead: ${body.name || 'Website Lead'} (${body.source})`,
              html: `
                <h2>New Lead Captured!</h2>
                <p><strong>Name:</strong> ${body.name || 'N/A'}</p>
                <p><strong>Email:</strong> ${body.email || 'N/A'}</p>
                <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
                <p><strong>Source:</strong> ${body.source}</p>
                <p><strong>Requirement:</strong> ${body.requirement || 'N/A'}</p>
                <p><strong>Team Size:</strong> ${body.teamSize || 'N/A'}</p>
                <p><strong>Location Pref:</strong> ${body.location || 'N/A'}</p>
                <p><strong>Budget:</strong> ${body.budget || 'N/A'}</p>
                <p><strong>Timeline:</strong> ${body.timeline || 'N/A'}</p>
                <br/>
                <p>This lead has also been saved to your Google Sheet.</p>
              `
            })
          }).catch(err => console.error("Failed to send email notification:", err))
        );
      }

      // B. Send Automated Nurture Email to the Lead (if they requested a guide)
      if (body.leadMagnet === 'pricing_guide' && body.email) {
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
    }"""

content = content.replace(target_code, replacement_code)
# Remove the old if block closing brace to avoid syntax errors
old_block_end = """              <p>This lead has also been saved to your Google Sheet.</p>
            `
          })
        }).catch(err => console.error("Failed to send email notification:", err))
      );
    }"""

new_block_end = """              <p>This lead has also been saved to your Google Sheet.</p>
            `
          })
        }).catch(err => console.error("Failed to send email notification:", err))
      );
    }
  }  // This extra brace was a mistake in my planning, actually string replace might just work fine if I isolate it properly."""

# A safer regex replacement for the entire block:
content = re.sub(
    r"// 2\. Send Email Notification\s+const resendApiKey = process\.env\.RESEND_API_KEY;\s+const notificationEmail = process\.env\.LEAD_NOTIFICATION_EMAIL;\s+if \(resendApiKey && notificationEmail\) \{[\s\S]*?\}\)\n      \);\n    \}",
    replacement_code,
    content
)

with open(file_path, "w") as f:
    f.write(content)

print("Capture Lead API Patched")
