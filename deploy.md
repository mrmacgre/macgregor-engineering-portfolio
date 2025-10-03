# Deployment Script for GitHub Pages

This script helps you deploy your portfolio to GitHub Pages.

## Quick Setup

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   ```

2. **Create GitHub Repository**
   - Go to GitHub.com
   - Click "New repository"
   - Name it `your-username.github.io` (for custom domain) or any name
   - Don't initialize with README (we already have files)

3. **Connect Local Repository to GitHub**
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Access Your Site**
   - Your site will be available at: `https://your-username.github.io/repository-name`
   - For custom domain: `https://your-username.github.io`

## Updating Your Portfolio

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Changes will be live within a few minutes.

## Troubleshooting

- **Site not updating**: Clear browser cache or wait 5-10 minutes
- **404 Error**: Check that GitHub Pages is enabled in repository settings
- **Styling issues**: Ensure all file paths are correct and files are committed

## Custom Domain Setup

1. Create a `CNAME` file in your repository root:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add CNAME record: `www` → `your-username.github.io`
   - Add A records for root domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. Enable HTTPS in GitHub Pages settings
