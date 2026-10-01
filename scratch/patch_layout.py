file_path = "src/app/layout.tsx"
with open(file_path, "r") as f:
    content = f.read()

pixel_script = """{/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'PLACEHOLDER_PIXEL_ID'); // Replace with actual Pixel ID
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
               src="https://www.facebook.com/tr?id=PLACEHOLDER_PIXEL_ID&ev=PageView&noscript=1"/>
        </noscript>
"""

content = content.replace("{/* Google Tag Manager */}", pixel_script + "\n        {/* Google Tag Manager */}")

with open(file_path, "w") as f:
    f.write(content)
