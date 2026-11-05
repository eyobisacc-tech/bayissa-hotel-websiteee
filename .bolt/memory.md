# Project memory

## Product intent & audience

- Existing marketing site for **Bayissa Hotel & Spa** (Ethiopian hospitality: rooms, dining/drinks, events/entertainment, venue packages, spa/wellness).
- Current task: add clearly labeled SAMPLE/DEMO prices in ETB wherever customers could see a price, without rebuilding/redesigning.

## Brand personality & voice

- Premium, professional hotel/spa tone; Ethiopian context (ETB currency).

## Visual design & UX direction

- Keep existing layout, navigation, responsive behavior, animations, and visual style intact.
- Price displays must look premium/professional and work on mobile and desktop.
- Sample prices use "Sample Price" / "Demo Price" tags plus a note: demo prices for presentation only; final prices confirmed by Bayissa Hotel & Spa.

## Decisions, constraints & rationale

- Framework: **vite-react**.
- Added optional `price` field to content data rather than new services; no fake reviews or invented services.
- Reusable price display + demo disclaimer components created and wired into RoomCard, EventCard, SplitSection, and Dining VenueCard.
- About page has no prices and was left untouched.
- Build passes with no compile errors; visual layout not browser-tested (user asked to verify on phone/desktop).
- Content sources updated: `stayPage.rooms`, `staySection.rooms`, `diningPage.sections`, `diningPage.venueSections`, `eventsPage.eventCards`, `eventsSection.cards`, `eventsPage.sections`.
- Home page demo note added under room and event grids.

## Open questions & assumptions

- Assumption: ETB sample price ranges are realistic-looking but not official; actual pricing to be supplied by Bayissa.
- Unverified: whether a dedicated Spa/wellness section exists beyond current pages (none surfaced in this task).
- Pending user confirmation of mobile/desktop visual review for price tag placement.