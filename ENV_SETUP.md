# Environment Variables Setup

## Required Environment Variables for Zoho SMTP

You need to set up the following environment variables in Netlify:

### 1. Zoho SMTP Configuration

```
ZOHO_SMTP_USER=hello@devxworks.com
ZOHO_SMTP_PASS=your-app-specific-password
```

### 2. How to Set Up in Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add the following variables:

| Variable Name | Value |
|---------------|-------|
| `ZOHO_SMTP_USER` | `hello@devxworks.com` |
| `ZOHO_SMTP_PASS` | `your-app-specific-password` |

### 3. How to Get Zoho App-Specific Password

1. Log in to your Zoho Mail account (hello@devxworks.com)
2. Go to **Account Settings** → **Security**
3. Enable **Two-Factor Authentication** if not already enabled
4. Go to **App Passwords** or **Application-Specific Passwords**
5. Create a new app password for "SMTP/Email Client"
6. Use this generated password as `ZOHO_SMTP_PASS`

### 4. For Local Development

Create a `.env` file in your project root (this file should be gitignored):

```
ZOHO_SMTP_USER=hello@devxworks.com
ZOHO_SMTP_PASS=your-app-specific-password
```

**Note:** The `.env` file should never be committed to version control. Add it to your `.gitignore` file.

### 5. Email Configuration

- **From Email:** hello@devxworks.com
- **To Email:** ayush@devxworks.com
- **SMTP Server:** smtp.zoho.com
- **Port:** 587 (with TLS)

The function will send beautifully formatted HTML emails with all the contact form details to ayush@devxworks.com whenever someone submits the contact form.
