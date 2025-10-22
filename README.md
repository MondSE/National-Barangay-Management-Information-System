# National Barangay Management Infromation System - NBMIS

## Overview & requirements (interpreting your request)

- Two account types: admin and resident (people).

  - Admin can:

    - register residents (create an ID number per resident),
    - edit resident personal data (address, birth date, family members, etc.),
    - create violations tied to a resident (with complaint details),
    - record/validate work/tax-related items (e.g., tax assessments, payments),
    - view lists and search residents, violations, complaints.

  - Resident can:

    - login using the ID number (issued by admin) + password,
    - view their profile, family, violation history, tax status,
    - maybe file complaints (optional — included in API).
    - Authentication rule you specified: residents log in using ID number. Admin accounts created separately.
    - Data must be auditable and role-protected.

## Suggested tech stack

- Frontend: Next.js (App Router) + React + Tailwind CSS
- Backend & ORM: Prisma + MySQL
- Auth: Custom JWT + httpOnly cookie or NextAuth (Credentials provider). Example uses custom bcrypt + JWT for clarity.
- File storage (optional): local or S3 for attachments.
- Optional: Prisma Studio for quick admin inspection.
