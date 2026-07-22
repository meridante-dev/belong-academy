# Belong Academy — going live (standing up the real backend)

_Written 2026-07-17. Belong currently runs in **preview mode**: the brand ships a placeholder
Firebase key (`BELONG_DEMO`), so the app auto-detects "backend not wired", hides sign-in, and lets
anyone explore as a guest (progress saved on that device only). Everything below flips it to a real,
multi-device, evidence-recording backend — the same one EdenRise runs on._

_Legend: 🧑 = only you can do it (Firebase Console / re-auth) · 🤖 = Claude does it once you have._

---

## What's already true (no action needed)
- ✅ The full engine is live: courses, tutor, progress, the **evidence ladder** (server-true ledger,
  Bitcoin anchoring, manager-confirm) — all inherited from core, all tested.
- ✅ `core/firestore.rules` is **byte-identical** to EdenRise's deployed, 19/19-tested rules.
- ✅ The app degrades honestly while unwired (verified): no cryptic Firebase error, on-brand
  "Preview" card, guest exploration fully walkable.
- ✅ Swapping to the real backend is a **one-file change** — `brands/belong/brand.js`, the `firebase`
  block only. Nothing else in the codebase needs touching.

## The gap (why it isn't live yet)
1. **No real Firebase project.** `apiKey: 'BELONG_DEMO'` is a placeholder.
2. **No real course video.** The 6 courses have finished copy but **0 video lessons** — going live
   with empty courses isn't really live. This needs Belong's actual Vimeo/YouTube IDs (same shape as
   EdenRise's `moduleMedia`).

---

## Step 1 · Create the Firebase project 🧑 ⏱ ~3 min
Firebase Console → **Add project** → name it (e.g. `belong-academy`; if that ID is taken the console
appends a suffix — that's fine, we read the real id from the config in step 2). Google Analytics is
optional; skip it for now. Spark (free) tier is enough — Auth + Firestore have no cost at this scale.

## Step 2 · Register a Web App + copy the config 🧑 ⏱ ~2 min
In the new project → **Project settings** (gear) → **Your apps** → **Web** (`</>`) → register (nickname
"Belong Academy web", no Hosting needed). Copy the `firebaseConfig` object it shows —
`apiKey / authDomain / projectId / storageBucket / messagingSenderId / appId`. Paste it to me, or
straight into `brands/belong/brand.js` (replace the `firebase: { … }` block). The moment a real
`apiKey` lands there, the app auto-detects the backend as ready and the sign-in UI returns — no code
change required.

## Step 3 · Turn on Auth 🧑 ⏱ ~2 min (Console-only — no CLI can do this)
Build → **Authentication** → Get started → **Sign-in method**:
- Enable **Email/Password**.
- Enable **Google** (pick a support email).

## Step 4 · Authorize the live domain 🧑 ⏱ ~1 min (Console-only)
Authentication → **Settings** → **Authorized domains** → **Add domain** →
`meridante-dev.github.io`. (Also keep `localhost` for local testing.) Without this, Google sign-in is
rejected on the live site.

## Step 5 · Create the Firestore database 🧑 ⏱ ~1 min
Build → **Firestore Database** → Create database → **production mode** → pick an EU region
(**`europe-west1`** or `eur3`) — data residency is part of the EU sales story, so keep it in Europe.
Leave the default locked rules; step 6 replaces them.

## Step 6 · Deploy the rules 🤖 (needs your re-auth first)
Once steps 1–5 are done, from `~/Workflows/belong-academy`:
```bash
firebase login --reauth          # 🧑 the CLI token expires ~hourly; this is the one CLI auth step
firebase deploy --only firestore:rules --project <the-real-project-id>
```
Then I verify it the same way as EdenRise — fetch the released ruleset back and run the rules test API
(the ledger create-only + tenancy + confirmation cases). **I will not trust "Deploy complete!" alone.**

## Step 7 · Real course video 🧑 content + 🤖 wiring
Give me Belong's actual lesson videos (Vimeo or YouTube IDs, per module, like EdenRise's
`moduleMedia`). I wire them into `brands/belong/content.js`, and the in-video checkpoints + evidence
events start flowing. Until then the courses are shells.

## Step 8 · Ship + prove 🤖
Bump `?v=belN` + the SW version together (per the deploy protocol), push, poll the live site for the
marker, then a real end-to-end check: sign in on the live domain, complete a module, confirm an
`events` doc appears under `users/{uid}/events` with a **server** `recordedAt`, and an anchor.

---

### Design note — why its own project (not a tenant of EdenRise)
We built multi-tenancy so several companies *can* share one backend, but the white-label direction you
chose is **fully separate**: Belong's learners live in Belong's own database, its own auth, its own EU
region. Cleaner data isolation and a cleaner story for a buyer ("your people are never in another
company's system"), at the cost of one more rules deploy to keep in sync — which the planned
Cloudflare/core-sync work addresses separately.
