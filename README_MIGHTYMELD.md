# MightyMeld Setup

1. Check out the repo.
2. `yarn`
3. Rename `.env.template` to `.env`, and add your MM instance ID.
4. Start with `npx mightymeld`

# Babel plugin and devigner development

1. In spiderbox/client-pgk: `yarn link`
2. In this repo: `yarn link @mightymeld/runtime`

To clear cache created by babel plugin: `rm -rf node_modules/.cache`
