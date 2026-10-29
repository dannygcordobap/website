---
nav: Projects

projects:
  - id: P01
    title: OneCard
    # Rendered as the OneCard lockup, not a photo
    visual: onecard-lockup
    tagline: Which card? That one.
    body: A rewards companion that picks the right credit card for each purchase, with a lightweight LLM classifier for messy merchant data. Built for friends and family who want points without spreadsheets.
    tags: [react native, fastapi, dynamodb]

  - id: P02
    title: Home lab and networking
    # Rendered as the terminal tile below, not a photo
    visual: terminal
    terminal:
      - "$ sudo wg show"
      - "interface: wg0"
      - "  listening port: 51820"
      - "peer: [ redacted ]"
      - "  preshared key: [ redacted ]"
      - "  endpoint: 203.0.113.7:40849"
      - "  allowed ips: 10.186.80.4/32"
      - "  latest handshake: 51 seconds ago"
      - "  transfer: 16.25 GiB received, 99.84 GiB sent"
    body: An RTX workstation and a Raspberry Pi cluster running VPN, DNS, Home Assistant, and local LLM inference, with Dockerized GPU orchestration.
    tags: [wireguard, home assistant, ollama]

# The one-line mention under the cards
also: "Also: ==first place at MagicHacks 2023== with [Effortless Meal Plan](https://dannygcordobap.github.io/effortlessmealplan/), a macro-to-recipe planner."
---
