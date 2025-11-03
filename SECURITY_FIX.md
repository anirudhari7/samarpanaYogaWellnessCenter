# Security Warning Fix Guide

If you're seeing a "Dangerous site" warning on your GitHub Pages site, follow these steps:

## Immediate Steps

### 1. Check Google Safe Browsing Status
Visit: https://transparencyreport.google.com/safe-browsing/search?url=anirudhari7.github.io/samarpanaYogaWellnessCenter

If your site is flagged, you can request a review.

### 2. Request Google Safe Browsing Review
1. Go to: https://search.google.com/search-console
2. Add your property: `anirudhari7.github.io`
3. Verify ownership
4. Go to Security Issues
5. Request a review if your site is incorrectly flagged

### 3. Clear Browser Cache
- Clear Chrome's cache and cookies
- Try accessing the site in Incognito mode
- Try a different browser

## What We've Fixed in the Code

1. ✅ Added Content Security Policy (CSP) headers
2. ✅ Added X-Content-Type-Options header
3. ✅ Added X-Frame-Options header
4. ✅ Added X-XSS-Protection header
5. ✅ Added Referrer-Policy header
6. ✅ Created .nojekyll file to ensure proper GitHub Pages rendering
7. ✅ Verified all external resources use HTTPS

## Additional Steps

### Verify Your Repository Settings

1. Go to your GitHub repository
2. Settings → Pages
3. Ensure:
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Custom domain: (leave empty if not using one)

### Wait for Propagation

Sometimes GitHub Pages takes 10-15 minutes to update. After pushing changes:
- Wait 15 minutes
- Clear browser cache
- Try again

### Contact GitHub Support

If the issue persists:
1. GitHub Support: https://support.github.com
2. Report the false positive

## Testing Your Site

After fixes, test with:
- https://www.sslshopper.com/ssl-checker.html
- https://securityheaders.com/
- https://observatory.mozilla.org/

## Common Causes

1. **False Positive**: New sites sometimes get flagged incorrectly
2. **Previous Owner**: If the GitHub username was previously used maliciously
3. **External Resources**: Loading insecure (HTTP) resources (we've fixed this)
4. **Malware**: If the site was compromised (unlikely for static HTML)

## Next Steps

1. Commit and push the security fixes
2. Wait 15-30 minutes for GitHub Pages to update
3. Clear browser cache
4. Test in Incognito mode
5. Request Google Safe Browsing review if needed

---

**Note**: The security warnings in the HTML are added to help browsers understand your site is safe. The main issue is likely a false positive from Google Safe Browsing that needs manual review.

