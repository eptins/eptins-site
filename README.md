
# Eptins Next Kit — Ready to Deploy

Pages included
- `/` Home: hero, trust row, work teasers, services, approach, proof, CTA
- `/services`: four focused offers + CTA
- `/work`: index grid with three cases
- `/work/[slug]`: case template for Maga Floors, Dr. Alice Dental, Blizz Infrared Sauna
- `/contact`: brief form → API route at `/api/contact` (stubbed)

Run locally
```
npm install
npm run dev
```

Deploy
- **Vercel**: import repo → set production branch → deploy. Add domain.
- **Netlify**/**Cloudflare Pages** also work.

Next steps
- Replace placeholder logos in `/public`.
- Fill real KPIs/content in `app/lib/cases.js`.
- Wire `/api/contact` to email (Resend/Mailgun) or Slack/Discord webhook.
