const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// We want to remove <ScrollReveal delay={...}> and </ScrollReveal> around the cards
// But leave the ones with direction="..." (used for headers)

// This regex matches <ScrollReveal delay={number}> and <ScrollReveal key={i} delay={...}>
// and we also need to remove the corresponding closing </ScrollReveal>
// It's easier to just strip lines that only contain <ScrollReveal delay=...> or <ScrollReveal key=...> or </ScrollReveal> 
// IF they are inside the grid sections. 

// A safer way is string replacement for the specific lines.
content = content.replace(/<ScrollReveal delay=\{[0-9.]+\}>/g, '');
content = content.replace(/<ScrollReveal key=\{i\} delay=\{i \* [0-9.]+\}>/g, '');
// Now we have extra </ScrollReveal> tags. But wait, <ScrollReveal direction=...> also have closing tags.
// If we just remove all <ScrollReveal delay={...}>, how do we remove their closing tags without breaking <ScrollReveal direction=...>?

// Let's use a simpler approach: replace the entire Audience Segmentation, Pricing Preview, and Testimonials grid blocks.
