# Matthew MacGregor Engineering Portfolio

A simple, clean portfolio website that displays a PDF version of my engineering portfolio.

## What's Included

- **index.html** - Main page with PDF viewer and contact section
- **Matthew_MacGregor_Engineering_Portfolio.pdf** - The portfolio document

## Deployment to GitHub Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### Step 3: Access Your Site

Your portfolio will be available at:
- `https://your-username.github.io/your-repo-name`

Or if you named your repo `your-username.github.io`:
- `https://your-username.github.io`

## Updating the Portfolio

Simply update the PDF file:

```bash
git add Matthew_MacGregor_Engineering_Portfolio.pdf
git commit -m "Update portfolio"
git push origin main
```

Changes will be live within a few minutes.

---

Built with GitHub Pages.