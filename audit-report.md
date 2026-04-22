# MedinaHealthCare.org Audit Report

Audit date: April 17, 2026  
Scope reviewed: live homepage at `https://www.medinahealthcare.org/`  
Method: rendered content review via browser snapshot plus raw homepage HTML inspection

## Executive Summary

The current homepage contains legitimate trust-building content, but it is undermined by weak hierarchy, mixed audience targeting, heading misuse, avoidable copy errors, and an overly heavy Wix-generated page payload. The page tries to serve patients, donors, referral partners, grant announcements, press, and nonprofit storytelling all at once. That creates friction at the exact moment users need a fast answer to a simple question: "Can this clinic help me, and what should I do next?"

The highest-priority fixes are:

1. Re-center the homepage around patient actions, with one dominant CTA and one secondary referral CTA.
2. Repair the heading structure and content order so the page has one clear H1 and logical H2/H3 sections.
3. Replace or correct inaccurate schema markup.
4. Reduce page weight and visual clutter, especially above the fold.
5. Fix copy quality issues and make trust signals easier to scan.

## Findings

### 1. Visual hierarchy and layout weaknesses

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| High | The homepage lacks a single dominant narrative path. | Above the fold mixes appointment booking, referral messaging, phone, location, logo, donation, nonprofit positioning, and then quickly jumps into grants and press. | Make the hero answer patient needs first: what you offer, who it is for, and one primary CTA. Keep the referral CTA secondary. Move donation lower. |
| High | Major content blocks compete visually with each other. | Grant award headlines, press carousel, mission copy, impact, recognition, testimonial, and impact report all appear as similarly weighted sections. | Use stronger section hierarchy, more spacing discipline, and fewer competing hero-level treatments. |
| Medium | Several sections read like stacked promotional modules rather than one cohesive homepage. | Carousel content, isolated press cards, a separate "Your Impact" block, then another impact section, then recognition, then a story, then impact report. | Consolidate to a cleaner sequence: Hero, services, stats, testimonial, recognition, news, newsletter, footer. |
| Medium | The current page appears overly long for first-time patient visitors. | Users must scan through grant, press, impact, awards, story, and report material before reaching a clean service overview. | Shorten or combine supporting sections, especially on mobile. |
| Medium | Donation receives prominent top-level treatment despite patient care being the primary user goal. | `Donate` is visible in the header alongside clinical access actions. | Demote donation to the footer or a lower-priority support section. |

### 2. Content organization and information architecture

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| Critical | The homepage leads with mixed organizational messaging instead of patient needs. | After the appointment CTA, the page pivots into grants, press, mission, impact opportunities, newsletter, awards, and stories before clearly presenting service categories. | Lead with care access, services, insurance, and what to expect. Put history, grants, and development content lower. |
| High | The homepage is serving too many audiences at once without prioritization. | Patients, referring professionals, donors, community members, media readers, and grant supporters are all addressed in the first few scrolls. | Build the homepage for patients first. Support donor and media goals with secondary sections or deeper pages. |
| High | Key service information is not surfaced strongly enough on the homepage. | Primary care, specialty referrals, and insurance information exist in navigation or secondary pages, not as a clear homepage service summary. | Add a homepage service triad with short explanations and direct paths. |
| Medium | News and events are presented as loose links instead of structured summaries. | The current `News & Events` block is just a few text links. | Use card-based articles with title, category, date, and clean anchor text. |
| Medium | Trust material is fragmented. | Awards, grant support, article links, and impact report are scattered across different sections. | Group trust signals into a compact recognition bar and reserve deep storytelling for dedicated pages. |

### 3. SEO issues

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| Critical | Schema markup is inaccurate for the current clinic details. | Raw HTML includes `LocalBusiness` schema for `Medina Community Clinic` with address `1 West State Street, Trenton, NJ 08608` and phone `609-270-5067`, which conflicts with visible homepage details `828 N Olden Ave, Trenton, NJ 08638` and `609-323-5159`. | Replace with current `LocalBusiness` + `MedicalClinic` schema using the real clinic name, address, phone, hours, and nonprofit status. |
| High | Heading structure is overloaded and likely confusing for search engines and assistive tech. | Raw HTML count: `h1=5 h2=27 h3=2 h4=1 h6=1` on the homepage. | Use one H1, then logical H2 sections and H3 card titles only where needed. |
| Medium | The current title tag is serviceable but not as search-targeted as it could be. | Current title: `Medina Health Center | Accessible Care in Trenton, NJ | Nonprofit`. | Use a stronger local-intent title such as `Affordable Primary Care in Trenton, NJ | Medina Health Center`. |
| Medium | The homepage schema is generic and incomplete for local healthcare SEO. | In addition to the inaccurate local business data, another schema block is only `WebSite`. | Add fuller healthcare-specific schema: clinic type, opening hours, service area, sameAs, and nonprofit entity data. |
| Medium | Clean service-intent keyword targeting is weak on the homepage. | The rendered page emphasizes grants, press, nonprofit identity, and impact more than phrases like `primary care`, `accepted insurance`, or `specialty referral network`. | Strengthen service-oriented copy in hero and service sections. |
| Medium | URL structure appears inconsistent and weak in places. | Examples visible in indexed results include paths such as `/copy-of-vision-mission`, `/about-5`, and `/general-5`. | Rename pages to descriptive slugs such as `/patient-services`, `/impact`, `/privacy-policy`. Add redirects from legacy URLs. |
| High | Page-speed signals are poor due to a very heavy Wix-rendered homepage. | Raw HTML response measured at about `1,156,243` bytes before all other assets; page includes large inline viewer JSON, polyfills, and framework overhead. | Reduce homepage complexity, limit above-the-fold media, compress content blocks, and if possible avoid shipping a large builder runtime for a relatively simple informational homepage. |

### 4. Accessibility concerns

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| High | Heading misuse harms screen-reader navigation. | Multiple H1s and many heading levels are used for decorative/stat blocks rather than semantic structure. | Rebuild the heading outline around meaning, not styling. |
| Medium | Carousel and press-style rotating content may be difficult for keyboard and screen-reader users. | The rendered homepage includes carousel-like press content and numbered slider controls. | Avoid auto-advancing content or provide accessible controls, labels, and pause behavior. |
| Medium | Some alt text is generic, duplicated, or not meaningful. | Visible examples include generic `Image` labels and repetitive logo/award alt text. | Use descriptive alt text for informative images and empty alt text for decorative ones. |
| Medium | No obvious skip-to-content link is exposed. | Not present in the rendered homepage snapshot. | Add a visible-on-focus skip link before the header. |
| Medium | Keyboard experience likely includes extra noise. | The rendered page exposes utility text like `Use tab to navigate through the menu items.` and many framework-generated controls. | Simplify navigation patterns and keep tab order focused on meaningful actions. |
| Medium | Contrast needs validation across all light-gray and teal combinations. | The current design uses light backgrounds and subtle text in several areas; some decorative text may be borderline. | Rework colors to pass WCAG AA consistently for body text, buttons, and metadata. |

### 5. Missing or weak calls-to-action

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| High | The site has more than one competing primary action. | Appointment, referral, donate, learn more, article reads, newsletter signup, and impact-report viewing all compete for attention. | Keep one primary CTA: `Request an Appointment`. Use `Refer a Client` as the clear secondary CTA. |
| Medium | Some CTA labels are vague or low-intent. | `Learn More` under `Your Impact` does not tell users what outcome to expect. | Rewrite CTAs with clear destination intent such as `Explore volunteer opportunities` or `View accepted insurances`. |
| Medium | News links do not consistently explain destination value. | Text links like `Read the article` or `Read about the ...` are repetitive and less descriptive. | Use descriptive anchor text tied to the article subject. |
| Medium | Newsletter success messaging appears visible in the rendered text flow. | `Thanks for submitting!` appears in the page snapshot. | Only show confirmation after submission and keep it tied to the form region. |

### 6. Trust signals and credibility

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| Medium | Trust signals exist but are not curated into a fast-scan credibility section. | Awards, ratings, grants, and article mentions are spread across the page. | Create a compact trust bar or badge row near the top third of the homepage. |
| Medium | The homepage does not quickly answer common trust questions. | Cost clarity, insurance acceptance, local access, hours, and contact info exist, but they are not synthesized into one reassuring section. | Surface key operational facts in the hero or sticky header. |
| Low | Community recognition and transparency are present but diluted by competing modules. | Best of Trenton, NAFC Gold, and Candid Platinum appear lower on the page. | Group these into one structured section with concise supporting text. |

### 7. Mobile responsiveness issues

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| Medium | The homepage likely becomes an exhausting long scroll on mobile. | Large number of stacked modules and repeated trust/editorial sections. | Collapse sections, trim redundancy, and ensure each mobile section has one clear job. |
| Medium | Above-the-fold density is high for small screens. | Header, booking CTA, referral CTA, phone, location, logo, and nonprofit messaging compete immediately. | Simplify the mobile header and keep the hero focused on care access. |
| Medium | Carousel/press elements are usually fragile on mobile. | Current homepage contains slider-like presentation for press items. | Use static cards or a single featured item plus links. |

### 8. Copywriting and spelling errors

| Severity | Issue | Evidence | Recommended fix |
|---|---|---|---|
| High | Misspelling on the impact stats section. | `SPECIALTY REFERRAL COORIDNATED` should be `SPECIALTY REFERRALS COORDINATED`. | Correct spelling and pluralization immediately. |
| Medium | Duplicate wording creates noise. | `Serving Trenton, NJ since 2014` appears twice in close proximity. | Remove duplication and tighten supporting copy. |
| Medium | Some copy is organizationally inward rather than user-centered. | `Your Impact` speaks to professionals and volunteers while patients are still learning what the clinic offers. | Rewrite homepage copy around patient outcomes and practical next steps. |
| Low | CTA capitalization and link phrasing are inconsistent. | Examples include `Read The Article` and mixed capitalization patterns. | Standardize capitalization and CTA language sitewide. |

## Recommended Homepage Structure

1. Hero with one H1, visible hours/address/phone, one primary CTA, one secondary CTA.
2. Three-card services section: Primary Care, Specialty Referral Network, Accepted Insurances.
3. Impact stats strip with high-confidence metrics.
4. Testimonial or short patient story.
5. Recognition bar for awards, ratings, and grant-backed credibility.
6. News card grid with structured article summaries.
7. Newsletter signup.
8. Footer with contact info, service links, and social links.

## What Was Confirmed in Source

- Current title tag exists.
- Current meta description exists.
- Open Graph title/description/url/site_name/type tags exist.
- Homepage includes inaccurate `LocalBusiness` schema.
- Homepage contains multiple heading tags, including multiple H1s.
- Homepage HTML payload is unusually large for an informational clinic homepage.

## Files Delivered

- `audit-report.md`: this audit report
- `index.html`: self-contained demo homepage redesign with embedded CSS and JS
