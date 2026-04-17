# The Art Hub UI Spec (Dev Handoff V1)

## Tech Stack Alignment

- Frontend: React + Next.js
- Styling: Tailwind CSS
- Components: Atomic reusable components
- State: Context API or Zustand

## Tailwind Theme Tokens

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#6A0DAD',
        secondary: '#F4A261',
        accent: '#2EC4B6',
        black: '#1A1A1A',
        grayDark: '#4F4F4F',
        grayLight: '#E0E0E0',
        background: '#F8F9FA',
        white: '#FFFFFF'
      }
    }
  }
};
```

## Typography Tokens

- `h1`: Poppins 48/700
- `h2`: Poppins 32/700
- `h3`: Poppins 24/500
- `body`: Inter 16/400

## Spacing Tokens

Use Tailwind spacing scale only (`p-2`, `p-4`, `p-6`, `p-8`) for component padding.

## Reusable Component Contracts

- `Button`:
  - `primary`: `bg-primary text-white`
  - `secondary`: `border border-primary text-primary`
  - `accent`: `bg-secondary text-white`
- `Input`: `border-grayLight`, `focus:border-primary`, `rounded-md`
- `ProfileCard`: avatar, name, genre, location, CTA
- `FeedCard`: thumbnail, caption, like/comment actions
- `GigCard`: title, budget, location
- `ChatBubble`: `sent` and `received` variants

## Pages

- `/`: hero, join CTA, featured creatives
- `/dashboard`: Feed, Gigs, Messages, Profile tabs
- `/profile/[id]`: avatar, bio, genre, LGA location, links
- `/gigs`: list + filters (genre/location/skill)
- `/messages`: conversations + chat panel
- `/tokens`: balance + buy token + explanation

## Token Gating

When `hasToken` is `false`, disable actions and show modal:

- Apply to gigs
- Messaging

Modal content:

- Title: Activate Access
- Price: ₦200/day
- CTA: Buy Token

## Data Shape

```json
{
  "user": {
    "name": "Artist",
    "genre": "Afrobeats",
    "location": "Surulere, Lagos",
    "hasToken": true
  },
  "gig": {
    "title": "Need Producer",
    "budget": 50000,
    "location": "Remote"
  }
}
```
