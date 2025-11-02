# Deployment Guide

This guide will help you deploy the Samarpana Yoga Wellness Center website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `samarpanaYogaWellnessCenter` (or any name you prefer)
5. Choose "Public" (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Initialize Git in Your Project

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Add website files"
```

## Step 3: Connect to GitHub and Push

```bash
# Add remote repository
git remote add origin https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

If prompted, enter your GitHub credentials.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**

## Step 5: Access Your Live Website

Your website will be available at:
```
https://anirudhari7.github.io/samarpanaYogaWellnessCenter/
```

**Note**: It may take a few minutes for the site to become live after enabling Pages.

## Updating Your Website

After making changes to your files:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

Changes will automatically update on GitHub Pages (may take 1-2 minutes).

## Custom Domain (Optional)

To use a custom domain:

1. In GitHub Pages settings, enter your custom domain
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS records with your domain provider

## Troubleshooting

### Site not loading
- Wait 5-10 minutes after enabling Pages
- Check repository Settings > Pages to ensure it's enabled
- Verify all files are in the root directory

### 404 Error
- Make sure `index.html` is in the root directory
- Check that the branch name matches (main or master)

### Changes not showing
- Clear browser cache
- Wait a few minutes for GitHub to rebuild
- Check if push was successful: `git status`

## Alternative Hosting Options

### Netlify
1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder, or
3. Connect your GitHub repository for automatic deployments

### Vercel
1. Go to [vercel.com](https://www.vercel.com)
2. Import your GitHub repository
3. Deploy automatically

### Other Static Hosts
- **Surge.sh**: `surge ./`
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3 + CloudFront**: For advanced users

---

**Need Help?** Check GitHub Pages documentation or open an issue in the repository.

