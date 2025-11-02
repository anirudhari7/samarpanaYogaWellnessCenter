# Quick Git Push Guide

## Prerequisites
- Git installed on your computer
- GitHub account (username: anirudhari7)
- Repository created on GitHub

## Step-by-Step Commands

Open PowerShell, Command Prompt, or Git Bash in your project folder:
`C:\Users\HP\Desktop\Projects\samarpanaYogaWellnessCenter`

### 1. Initialize Git (if not already done)
```bash
git init
```

### 2. Check status (optional - see what files will be added)
```bash
git status
```

### 3. Add all files to staging
```bash
git add .
```

### 4. Create your first commit
```bash
git commit -m "Initial commit: Samarpana Yoga Wellness Center website"
```

### 5. Add remote repository (replace if repository name is different)
```bash
git remote add origin https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git
```

**Note**: If you get "remote origin already exists" error, use:
```bash
git remote set-url origin https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git
```

### 6. Rename branch to main (if needed)
```bash
git branch -M main
```

### 7. Push to GitHub
```bash
git push -u origin main
```

## Authentication

### If prompted for credentials:
- **Username**: anirudhari7
- **Password**: Use a Personal Access Token (not your GitHub password)

### How to create a Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "My Computer")
4. Select scopes: ✅ `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use this token as your password when pushing

## Quick Copy-Paste Commands (All at once)

```bash
git init
git add .
git commit -m "Initial commit: Samarpana Yoga Wellness Center website"
git remote add origin https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git
git branch -M main
git push -u origin main
```

## After First Push - Updating Your Code

When you make changes and want to push updates:

```bash
git add .
git commit -m "Description of your changes"
git push
```

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: "authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Check your username is correct: anirudhari7

### Check if repository is connected
```bash
git remote -v
```

This should show:
```
origin  https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git (fetch)
origin  https://github.com/anirudhari7/samarpanaYogaWellnessCenter.git (push)
```

## Alternative: Using GitHub Desktop (Easier)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. File → Add Local Repository
4. Browse to: `C:\Users\HP\Desktop\Projects\samarpanaYogaWellnessCenter`
5. Click "Publish repository" button
6. Name it: `samarpanaYogaWellnessCenter`
7. Make it Public
8. Click "Publish Repository"

## Verify Success

After pushing, go to:
```
https://github.com/anirudhari7/samarpanaYogaWellnessCenter
```

You should see all your files there!

## Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Branch `main`, Folder: `/ (root)`
4. Save
5. Your site will be live at: `https://anirudhari7.github.io/samarpanaYogaWellnessCenter/`

---

**Need Help?** Check the error message and see Troubleshooting section above.

