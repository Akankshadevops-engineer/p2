# Portfolio Website

A simple static site (HTML/CSS/JS, no build step) — `index.html`, `style.css`, `script.js`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy options

**Option A — GitHub Pages (free, simplest)**
1. On GitHub: repo → Settings → Pages
2. Source: "Deploy from a branch" → Branch: `main` → folder `/ (root)`
3. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.

**Option B — Azure Static Web Apps (good DevOps practice, ties into your Azure skills)**
1. In the Azure Portal, create a new "Static Web App" resource.
2. Connect it to your GitHub repo/branch when prompted — Azure will auto-generate a
   GitHub Actions workflow file and commit it to your repo.
3. Every future push to `main` will auto-deploy through that pipeline — a nice concrete
   example of CI/CD you can talk about in interviews.

## Customizing

- Edit the content directly in `index.html` (skills, experience, certifications).
- Colors and layout live in `style.css` under the `:root` variables at the top.
