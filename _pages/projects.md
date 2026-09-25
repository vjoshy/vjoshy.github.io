---
layout: page
permalink: /projects/
title: Projects
description: Some projects I've worked for my own learning
nav: true
nav_order: 5
_styles: >
  .app-embed {
    position: relative;
    width: 100%;
    height: 80vh;
    min-height: 600px;
    margin-bottom: 0.75rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    overflow: hidden;
  }
  .app-embed iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
  .app-embed-note {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }
  @media (max-width: 768px) {
    .app-embed {
      display: none;
    }
  }
---

### **Causal Inference Simulator**

<div class="app-embed">
  <iframe
    src="https://causal-simulator-541479313754.us-central1.run.app/?embed=true"
    title="Causal Inference Simulator"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
</div>

<p class="app-embed-note">
  <a href="https://causal-simulator-541479313754.us-central1.run.app" target="_blank" rel="noopener">Open the simulator in a new tab &rarr;</a>
  It's hosted on Cloud Run, so it may take a few seconds to spin up on first visit.
</p>
