# Awareness Hub

A cybersecurity education platform that makes online safety accessible and understandable for everyone. Built by a team of 12 undergraduate cybersecurity students.

---

## Description

Awareness Hub is a static, client-side web application that provides practical cybersecurity education through interactive tools, curated guides, and clear explanations. The platform targets everyday internet users who want to improve their digital security without needing a technical background.

---

## Features

- **Awareness** — In-depth guides on password hygiene, social media privacy, MFA, identity protection, and child online safety
- **Password Checker** — Real-time client-side strength analysis with visual feedback (no data ever leaves your device)
- **Password Generator** — Fully customizable password generation with length and character-set controls
- **Helper** — Curated recommendations for VPN services, antivirus software, and parental control tools
- **FAQs** — Common cybersecurity questions answered in plain language
- **About Us** — Meet the team of 12 students behind the project

---

## Architecture Overview

Pure frontend — no backend server, no database, no build step required.

```
Browser
  └── HTML pages (navigation, content, layout)
        ├── CSS stylesheets (theming, responsive layout)
        └── Vanilla JavaScript (password logic, UI interactions)
```

All password operations (checking and generation) run entirely in the browser. No user data is transmitted anywhere.

---

## Folder Structure

```
AWARNESS HUB/
├── .env.example          # Environment variable template
├── .gitignore
├── README.md
└── code/
    ├── html/             # One HTML file per page
    │   ├── HOME.HTML
    │   ├── AWARNESS.HTML
    │   ├── TOOLS.HTML
    │   ├── HELPER.HTML
    │   ├── FAQS.HTML
    │   └── ABOUT US.HTML
    ├── css/              # Per-page and shared stylesheets
    │   ├── home.css
    │   ├── awarnees.css
    │   ├── tools.css
    │   ├── helper.css
    │   ├── faqs.css
    │   ├── about us.css
    │   ├── navBarStyle.css
    │   └── footerStyle.css
    ├── js/               # Client-side logic
    │   ├── main.js           # Password generator
    │   └── check-password.js # Password strength checker
    └── jpg/              # Images and logo assets
```

---

## Installation

No build tools or package managers are required.

### Option 1 — Open directly in a browser

```bash
# Clone the repository
git clone https://github.com/MazenAlaa305/AWARNESS-HUB.git
cd AWARNESS-HUB

# Open the home page
start code/html/HOME.HTML        # Windows
open code/html/HOME.HTML         # macOS
xdg-open code/html/HOME.HTML     # Linux
```

### Option 2 — Serve with VS Code Live Server (recommended for development)

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension
2. Open the project folder in VS Code
3. Right-click `code/html/HOME.HTML` and select **Open with Live Server**

### Option 3 — Serve with Python

```bash
cd "AWARNESS HUB/code"
python -m http.server 8080
# Visit http://localhost:8080/html/HOME.HTML
```

---

## Configuration

This project has no required configuration for local development. The `.env.example` file documents environment variable names in case you re-integrate a backend or analytics service in the future.

```bash
# Copy the example file if needed
cp .env.example .env
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `FIREBASE_API_KEY` | Firebase project API key |
| `FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `FIREBASE_DATABASE_URL` | Realtime Database URL |
| `FIREBASE_PROJECT_ID` | Firebase project ID |
| `FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `FIREBASE_APP_ID` | Firebase app ID |
| `FIREBASE_MEASUREMENT_ID` | Firebase measurement ID |

> These variables are only needed if you re-add a Firebase backend integration. **Never hardcode API keys in HTML files.**

---

## Usage Examples

### Password Checker

1. Navigate to the **Tools** page
2. Type a password into the "Check Your Password" field
3. Click the button — the strength level (Weak / Medium / Strong) is shown instantly
4. All analysis happens locally; the password is never sent anywhere

### Password Generator

1. On the **Tools** page, adjust the length slider (8–25 characters)
2. Check/uncheck character types (lowercase, uppercase, numbers, symbols)
3. Click **Generate Password**
4. Click the copy icon to copy the password to your clipboard

---

## Screenshots

> _Add screenshots here by placing images in `code/jpg/screenshots/` and linking them below._

| Home | Tools | Awareness |
|------|-------|-----------|
| _(screenshot)_ | _(screenshot)_ | _(screenshot)_ |

---

## Troubleshooting

**Page styles not loading**
Ensure you open `HOME.HTML` from inside the `code/html/` directory (or via a local server), so relative CSS paths (`../css/`) resolve correctly.

**Copy-to-clipboard not working**
The Clipboard API requires a secure context. Use a local server (Live Server or Python) instead of opening the file directly with `file://`.

**Images not displaying**
All images are referenced relative to the `code/` directory. Do not move HTML or image files independently.

---

## Future Improvements

- [ ] Migrate to lowercase filenames (e.g., `home.html`) for cross-platform compatibility
- [ ] Replace spaces in filenames (`ABOUT US.HTML`, `about us.css`) with hyphens
- [ ] Add a mobile hamburger menu for small screens
- [ ] Introduce a lightweight CSS framework or design system for consistency
- [ ] Add a Content Security Policy (CSP) header when deploying to a web host
- [ ] Replace Font Awesome CDN kit URL with a self-hosted or SRI-pinned version
- [ ] Write automated UI tests (Playwright or Cypress)
- [ ] Deploy to GitHub Pages or Netlify for a public URL

---

## Security Notes

- All password operations are **100% client-side** — no passwords are ever transmitted or stored
- No third-party analytics or tracking scripts collect user data
- If you add a Firebase or any other backend integration, load credentials from environment variables and never commit them to the repository

---

## Team

Built by 12 undergraduate cybersecurity students. Contact: [awarnesshub12@gmail.com](mailto:awarnesshub12@gmail.com)

---

## License

This project is released for educational purposes. All rights reserved by the Awareness Hub team.
