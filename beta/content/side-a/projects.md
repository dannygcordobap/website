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
    link: "[TODO: App Store or project link, or delete this line]"

  - id: P02
    title: Home lab and networking
    # Rendered as the terminal tile below, not a photo
    visual: terminal
    terminal:
      - "$ sudo wg show"
      - "interface: wg0"
      - "  listening port: 51820"
      - "peer: [ redacted ]"
      - "  endpoint: [TODO: what you want to show, or delete]"
    body: An RTX workstation and a Raspberry Pi cluster running VPN, DNS, Home Assistant, and local LLM inference, with Dockerized GPU orchestration.
    tags: [wireguard, home assistant, ollama]

# The one-line mention under the cards
also: "Also: ==first place at MagicHacks 2023== with [Effortless Meal Plan](https://dannygcordobap.github.io/effortlessmealplan/), a macro-to-recipe planner."
---
