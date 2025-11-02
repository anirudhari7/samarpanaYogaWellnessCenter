# Quick Setup Guide

Follow these steps to get your project ready for GitHub.

## Option 1: Using GitHub Desktop (Easiest)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. File > Add Local Repository
4. Browse to your project folder
5. Click "Publish repository" button
6. Enable GitHub Pages in repository Settings > Pages

## Option 2: Using Command Line

### Windows (PowerShell/Git Bash)

```powershell
# Navigate to your project folder
cd C:\Users\HP\Desktop\Projects\samarpanaYogaWellnessCenter

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Samarpana Yoga Wellness Center website"

# Add remote repository
git remote add origin https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Mac/Linux (Terminal)

```bash
# Navigate to your project folder
cd ~/Desktop/Projects/samarpanaYogaWellnessCenter

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Samarpana Yoga Wellness Center website"

# Add remote repository
git remote add origin https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Verify Files Are Ready

Your project should have these files:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `README.md`
- ✅ `.gitignore`
- ✅ `LICENSE`
- ✅ `DEPLOYMENT.md`

## Next Steps

1. Create GitHub repository (see DEPLOYMENT.md)
2. Push your code
3. Enable GitHub Pages
4. Share your live website!

---

**Tip**: If you're new to Git, GitHub Desktop is the easiest way to get started!

