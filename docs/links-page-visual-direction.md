# Links Page --- Visual & Content Direction

## Objective

Create a personal links page in the style of a **digital identity hub**,
not a generic Linktree clone.

The page should connect the same ecosystem:

-   `vlopcas.dev` --- complete portfolio and professional presentation
-   `links.vlopcas.dev` --- fast access to the most relevant
    destinations
-   redirect page --- transition experience
-   physical business card + QR code --- physical entry point

All surfaces should feel like parts of the same visual system.

------------------------------------------------------------------------

## 1. Role of the Links Page

The links page should be intentionally simpler than the main portfolio.

Its job is to answer, almost immediately:

1.  Who is Victor Castro?
2.  What does he work with?
3.  Where can I see his work?
4.  Where can I find his professional profiles?
5.  How can I contact him?

It should not duplicate the entire portfolio.

Think of it as a compact **digital identity page**.

------------------------------------------------------------------------

## 2. Suggested URL

``` text
links.vlopcas.dev
```

This keeps the links page directly associated with the main domain and
avoids introducing another unrelated brand.

------------------------------------------------------------------------

## 3. Visual Language

The page should inherit the visual identity already established for the
main site and redirect page.

Core characteristics:

-   minimal composition;
-   strong negative space;
-   graphite / near-black surfaces in dark mode;
-   off-white surfaces in light mode;
-   orange as the primary accent;
-   thin geometric lines;
-   subtle architectural lighting;
-   restrained motion;
-   clean typography;
-   no visual clutter.

The page should feel technical, architectural, and deliberate.

------------------------------------------------------------------------

## 4. Background

Do not simply reuse the hero image from the main site.

Instead, reproduce the same visual language through lightweight CSS.

### Dark theme

Suggested base:

``` css
#080B0E
```

Alternative:

``` css
#0A0D10
```

### Light theme

Suggested base:

``` css
#F7F7F5
```

Alternative:

``` css
#FAFAF8
```

### Accent

Suggested orange:

``` css
#FF6500
```

Orange should remain an accent rather than becoming a dominant
background color.

Subtle gradients, glows, lines, and illuminated edges can be used to
reference the architectural orange lighting of the main site.

------------------------------------------------------------------------

## 5. Header / Identity Area

The top of the page should be centered.

Suggested hierarchy:

``` text
VC.

Victor Castro

DADOS • SOFTWARE • IA

Building useful things with data, code and AI.
```

### VC.

The logo is the strongest visual anchor.

-   relatively large;
-   `VC` white in dark mode;
-   `VC` near-black in light mode;
-   orange dot in both themes.

### Victor Castro

Use as the identity immediately below the mark.

It should be visible but less dominant than `VC.`.

### Professional positioning

Use:

``` text
DADOS • SOFTWARE • IA
```

Small, uppercase, spaced typography works well here.

This should behave almost like a professional signature.

### Supporting sentence

Suggested:

``` text
Building useful things with data, code and AI.
```

Keep it visually secondary.

------------------------------------------------------------------------

## 6. Link Hierarchy

Do not make every destination an identical Linktree-style button.

The page should establish an actual hierarchy.

Recommended order:

### 1. Main Portfolio

Primary destination:

``` text
vlopcas.dev
```

Suggested presentation:

``` text
vlopcas.dev →

Meu trabalho em software, dados e IA.
```

This can be the largest card on the page.

It should clearly communicate that the complete experience lives on the
main website.

------------------------------------------------------------------------

### 2. Projects

Suggested label:

``` text
Projetos
```

Supporting text:

``` text
Software, dados, machine learning e IA aplicada.
```

This should link directly to the projects area/page of the main
portfolio.

Projects deserve high priority because they demonstrate actual work
rather than simply linking to another profile.

------------------------------------------------------------------------

### 3. Curriculum

Suggested label:

``` text
Currículo
```

Supporting text:

``` text
Experiência, formação e competências.
```

Open the current CV directly.

Projects and Curriculum can appear as two secondary cards side by side
on desktop and stacked on mobile.

------------------------------------------------------------------------

### 4. GitHub

Suggested label:

``` text
GitHub
```

This gives direct access to repositories, source code, experiments, and
technical projects.

Use a more compact link treatment than the portfolio/projects cards.

------------------------------------------------------------------------

### 5. LinkedIn

Suggested label:

``` text
LinkedIn
```

Professional network and career profile.

Use the same compact hierarchy as GitHub.

------------------------------------------------------------------------

### 6. WhatsApp

Suggested label:

``` text
Vamos conversar
```

or:

``` text
Falar comigo
```

WhatsApp should be the primary direct-contact action.

There is no need to display the raw phone number on this page if the
WhatsApp action already provides direct contact.

------------------------------------------------------------------------

## 7. Recommended Final Link Set

Keep the page selective.

``` text
vlopcas.dev
Projetos
Currículo
GitHub
LinkedIn
WhatsApp
```

Avoid adding links simply to fill the page.

For now, avoid:

-   Instagram without a clear professional purpose;
-   raw phone number;
-   duplicated contact methods;
-   unnecessary social networks;
-   multiple links that lead to nearly the same content.

The objective is clarity rather than quantity.

------------------------------------------------------------------------

## 8. Card Structure

Avoid six identical rectangular buttons.

Recommended desktop structure:

``` text
                    VC.

                Victor Castro

             DADOS • SOFTWARE • IA

    Building useful things with data, code and AI.


        ┌─────────────────────────────┐
        │ vlopcas.dev              →  │
        │ Meu trabalho em software,   │
        │ dados e IA.                 │
        └─────────────────────────────┘


        ┌──────────────┐ ┌──────────────┐
        │ Projetos   → │ │ Currículo  → │
        │              │ │              │
        └──────────────┘ └──────────────┘


        GitHub       →
        LinkedIn     →
        Vamos conversar →
```

On mobile, all elements can stack vertically.

------------------------------------------------------------------------

## 9. Interaction & Motion

Motion should reuse the language established for the redirect screen.

### Card hover

When hovering over an important card:

-   slightly increase border contrast;
-   introduce a subtle orange glow;
-   move the arrow a few pixels horizontally;
-   optionally animate a thin orange line along part of the card edge.

Avoid large scale transforms.

### Orange light line

A particularly coherent interaction would be a thin orange line that
travels horizontally along the lower edge of a card on hover.

This references the redirect loading animation and the illuminated
architectural lines of the broader visual identity.

### VC. dot

The orange dot can receive a very subtle light/pulse effect.

Do not make every element animate simultaneously.

------------------------------------------------------------------------

## 10. Dark Mode

Suggested hierarchy:

-   background: `#080B0E`
-   primary text: soft white
-   secondary text: neutral gray
-   card surfaces: slightly elevated graphite
-   borders: subtle gray/white transparency
-   accent: `#FF6500`
-   glow: orange at low opacity

Cards should remain subtle until interaction.

------------------------------------------------------------------------

## 11. Light Mode

Maintain exactly the same information architecture.

Suggested hierarchy:

-   background: `#F7F7F5`
-   primary text: near-black
-   secondary text: medium gray
-   cards: white / slightly differentiated off-white
-   borders: light neutral gray
-   accent: `#FF6500`
-   glow: very restrained orange

Do not create a different design for light mode.

The theme should change the surfaces and contrast, not the identity.

------------------------------------------------------------------------

## 12. Relationship With the Redirect Page

The redirect page and links page should clearly belong to the same
system.

Shared elements:

-   VC. mark;
-   graphite / off-white backgrounds;
-   orange accent;
-   thin lines;
-   orange illuminated motion;
-   restrained typography;
-   generous negative space.

The redirect page is intentionally almost empty.

The links page takes that same visual vocabulary and expands it into an
interactive navigation surface.

------------------------------------------------------------------------

## 13. Relationship With vlopcas.dev

The links page should not compete with the main portfolio.

### Main site

``` text
vlopcas.dev
```

Purpose:

-   full professional presentation;
-   selected work;
-   projects;
-   areas of expertise;
-   trajectory;
-   experience;
-   contact.

### Links page

``` text
links.vlopcas.dev
```

Purpose:

-   fast identification;
-   direct navigation;
-   professional profiles;
-   curriculum;
-   contact.

The links page is the **shortcut layer**.

The main site remains the **complete experience**.

------------------------------------------------------------------------

## 14. QR Code Strategy

Once the links page exists, consider pointing the physical business-card
QR code to:

``` text
links.vlopcas.dev
```

instead of directly to the portfolio home page.

Reason:

A person scanning a physical card usually has several possible
intentions:

-   see the portfolio;
-   inspect projects;
-   open the CV;
-   visit GitHub;
-   visit LinkedIn;
-   start a conversation.

The links page lets the visitor choose immediately while keeping the
full portfolio one tap away.

If analytics or destination flexibility are important, the QR can also
point to a stable redirect URL that ultimately routes to the links page.

------------------------------------------------------------------------

## 15. Suggested User Flow

``` text
Physical Business Card
        ↓
      QR Code
        ↓
 Redirect Experience
        ↓
 links.vlopcas.dev
        ↓
 ┌─────────────────────────────┐
 │ Portfolio                   │
 │ Projects                    │
 │ Curriculum                  │
 │ GitHub                      │
 │ LinkedIn                    │
 │ WhatsApp                    │
 └─────────────────────────────┘
```

This creates a coherent transition from physical identity to digital
identity.

------------------------------------------------------------------------

## 16. What to Avoid

Avoid:

-   generic Linktree appearance;
-   many identical buttons;
-   excessive social icons;
-   large profile photo unless it adds a clear purpose;
-   repeating the entire portfolio;
-   heavy hero imagery;
-   excessive glassmorphism;
-   aggressive gradients;
-   excessive glow;
-   multiple accent colors;
-   animated backgrounds that distract from navigation;
-   long biography text;
-   too many destinations;
-   fake complexity.

The page should load quickly and communicate immediately.

------------------------------------------------------------------------

## 17. Final Direction

The intended experience is:

``` text
VC.
↓
Victor Castro
↓
DADOS • SOFTWARE • IA
↓
short positioning statement
↓
vlopcas.dev
↓
Projects + Curriculum
↓
GitHub + LinkedIn + WhatsApp
```

The visual hierarchy should communicate:

``` text
IDENTITY
   ↓
WHAT I DO
   ↓
MY WORK
   ↓
CREDENTIALS
   ↓
PROFILES / CONTACT
```

The result should feel like a **personal digital identity hub**, not a
collection of social-media buttons.

The three main surfaces then have distinct responsibilities:

``` text
vlopcas.dev
Complete professional experience

links.vlopcas.dev
Identity + navigation hub

Redirect page
Transition between entry point and destination
```

All three should use the same visual grammar:

**VC. + Dados / Software / IA + graphite / off-white + orange light +
geometric lines + restrained motion.**
