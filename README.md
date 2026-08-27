# Siddhi Magar — Portfolio ✦

> Many colors. One story.

A personal portfolio website built with **HTML5, CSS3, JavaScript, and Bootstrap 5**.
No frameworks, no build tools — just open `index.html` in a browser.

🔗 **Live site:** [add your live link here once deployed]

---

## What's inside

- `index.html` — all page sections (hero, about, work, projects, skills, creative side, interests, education, contact)
- `css/style.css` — all styling
- `js/script.js` — scroll animations, active nav highlighting, image fallback handling, contact form validation
- `images/` — where your real photos go (see below)

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── projects/   → auditorium.jpg, data-science.jpg
    ├── baking/     → cake-1.jpg, cake-2.jpg, cake-3.jpg, cake-4.jpg
    ├── rangoli/    → rangoli-1.jpg, rangoli-2.jpg, rangoli-3.jpg, rangoli-4.jpg
    └── events/     → anchoring-1.jpg, anchoring-2.jpg, anchoring-3.jpg
```

Each `images/` subfolder has a `README.txt` with the exact filenames expected. Drop a photo in with the matching filename and it appears automatically — until then, the site shows a labeled placeholder instead of a broken image.

---

## Running it locally

No install needed. Just open `index.html` in your browser by double-clicking it, or from a terminal:

```bash
# from inside the portfolio folder
open index.html        # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

---

## Before you publish — things to fill in

- [ ] Add your own photos to `images/projects`, `images/baking`, `images/rangoli`, `images/events`
- [ ] Project 2 in `index.html` — replace the `[ Add exact... ]` placeholders with your real data science project details
- [ ] GitHub / LinkedIn / email links (search `your-username`, `your-profile`, `your-email@example.com` in `index.html`)
- [ ] Add a `resume.pdf` file to the project root, or update the Resume button links
- [ ] Education section — university/college name and CGPA
- [ ] Contact form — it validates on the front end but doesn't send email yet. Wire it to a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) (see the comment in `js/script.js`)

---

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push this folder's contents to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish it at:
   ```
   https://your-username.github.io/portfolio/
   ```
   (takes a minute or two to go live)

---

## Built with

- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/) — Fraunces, Sora, JetBrains Mono

---

© 2026 Siddhi Magar
