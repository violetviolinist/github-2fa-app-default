# Authenticator App Default for GitHub 2FA

A Chrome extension that takes you straight to the **authenticator app** code entry on GitHub's two-factor page, skipping the passkey / GitHub Mobile prompt and the "More options" → "Authenticator app" clicks.

## How it works

A content script runs on `https://github.com/sessions/two-factor*` at `document_start` and redirects to `/sessions/two-factor/app`.

- Leaves the authenticator app, recovery code, and SMS pages alone.
- If you switch methods on purpose from another 2FA page (e.g. "Use passkey"), it doesn't redirect you back.
- No permissions, no data collection, no network requests.

## Install from source

1. Clone this repo.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Click **Load unpacked** and select the repo folder.

Not affiliated with or endorsed by GitHub, Inc.
