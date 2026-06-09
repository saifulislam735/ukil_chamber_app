P**roduct lifecycle workflow** .

Think of React Native development as:

```txt
Idea
 ↓
Requirements
 ↓
System Design
 ↓
UI/UX Design
 ↓
Project Setup
 ↓
Development
 ↓
Testing
 ↓
APK / IPA Build
 ↓
Beta Testing
 ↓
Store Publishing
 ↓
Maintenance
 ↓
New Features
```

---

# Phase 0 — Product Planning

Before writing code:

## Business Planning

```txt
Problem
Target Users
Features
Monetization
Competitors
MVP Scope
```

Example:

```txt
Ukil Chamber

Users:
- Clients
- Lawyers

MVP:
- Browse lawyers
- Search lawyers
- View profile
- Book consultation
```

---

## System Design

```txt
Frontend
Backend
Database
Storage
Authentication
Notifications
Payments
```

Example:

```txt
React Native (Expo)

Backend:
NestJS / Express

Database:
PostgreSQL

Storage:
Cloudinary / S3

Auth:
JWT

Notifications:
FCM

Payments:
SSLCommerz
```

---

# Phase 1 — Project Creation

## Create App

```bash
npx create-expo-app@latest ukil-chamber-app
```

SDK 54

---

## Node Version

Use:

```txt
Node 22 LTS
```

Check:

```bash
node -v
```

---

## Run

```bash
npm install

npx expo start
```

---

# Phase 2 — Project Structure

Professional structure:

```txt
src/
│
├── api/
├── assets/
├── components/
├── constants/
├── contexts/
├── data/
├── hooks/
├── navigation/
├── screens/
├── services/
├── store/
├── theme/
├── types/
├── utils/
│
└── App.tsx
```

---

# Phase 3 — Navigation

Install:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs

npx expo install react-native-screens
npx expo install react-native-safe-area-context
```

---

Navigation:

```txt
Auth Stack

Login
Register
Forgot Password
```

```txt
Main Tabs

Home
Search
Booking
Account
```

---

# Phase 4 — State Management

Small apps:

```txt
Context API
```

Medium:

```txt
Zustand
```

Large:

```txt
Redux Toolkit
```

Recommended:

```bash
npm install zustand
```

---

# Phase 5 — API Layer

Install:

```bash
npm install axios
```

Structure:

```txt
src/api
├── authApi.ts
├── lawyerApi.ts
├── bookingApi.ts
```

---

# Phase 6 — Backend

Options:

### Existing MERN/PERN Skills

Use:

```txt
NestJS
PostgreSQL
Prisma
```

Recommended.

---

Backend:

```txt
Auth
Users
Lawyers
Bookings
Payments
Notifications
```

---

# Phase 7 — Database Design

Create:

```txt
ER Diagram
```

Entities:

```txt
Users
Lawyers
Consultations
Bookings
Payments
Reviews
Notifications
```

---

# Phase 8 — Authentication

Install:

```bash
npm install axios

npx expo install expo-secure-store
```

Store:

```txt
JWT Access Token
Refresh Token
```

inside:

```txt
Secure Store
```

---

# Phase 9 — Forms

Install:

```bash
npm install react-hook-form
npm install zod
```

Used for:

```txt
Login
Registration
Booking
Profile Edit
```

---

# Phase 10 — Data Fetching

Install:

```bash
npm install @tanstack/react-query
```

Benefits:

```txt
Caching
Refetching
Pagination
Optimistic Updates
```

---

# Phase 11 — Notifications

Install:

```bash
npx expo install expo-notifications
```

Use:

```txt
Firebase Cloud Messaging
```

---

# Phase 12 — Payments

Bangladesh:

```txt
SSLCommerz
aamarPay
ShurjoPay
```

Global:

```txt
Stripe
```

---

# Phase 13 — File Uploads

Install:

```bash
npx expo install expo-image-picker
```

Use:

```txt
Cloudinary
S3
```

---

# Phase 14 — Maps

Install:

```bash
npx expo install react-native-maps
```

---

# Phase 15 — Testing

Unit:

```bash
npm install jest
```

E2E:

```txt
Detox
```

---

# Phase 16 — Environment Variables

Install:

```bash
npm install dotenv
```

Example:

```env
API_URL=
STRIPE_KEY=
```

---

# Phase 17 — Android Build

Install:

```bash
npm install -g eas-cli
```

Login:

```bash
eas login
```

Configure:

```bash
eas build:configure
```

---

APK:

```bash
eas build -p android --profile preview
```

Output:

```txt
APK
```

Share directly.

---

AAB:

```bash
eas build -p android --profile production
```

Output:

```txt
AAB
```

Google Play upload.

---

# Phase 18 — iOS Build

No code change needed.

Build:

```bash
eas build -p ios
```

Requirements:

```txt
Apple Developer Account
$99/year
```

Output:

```txt
IPA
```

Upload:

```txt
App Store Connect
```

---

# Phase 19 — Release

Android:

```txt
Google Play Console
```

iOS:

```txt
App Store Connect
```

---

# Phase 20 — CI/CD

GitHub:

```txt
main
development
feature/*
```

Deploy automatically:

```txt
EAS Build
GitHub Actions
```

---

# Production React Native Stack I Recommend

For almost every SaaS/mobile startup:

```txt
Frontend
--------
Expo SDK 54+
React Native
TypeScript
React Navigation
React Query
Zustand
React Hook Form
Zod

Backend
-------
NestJS
Prisma
PostgreSQL
Redis

Storage
-------
Cloudinary

Notifications
-------------
Firebase

Payments
--------
Stripe / SSLCommerz

Deployment
----------
EAS Build

Monitoring
----------
Sentry

Analytics
---------
PostHog
```

This stack is capable of taking a product from **MVP → thousands of users → App Store & Play Store release** with a single shared React Native codebase for Android and iOS.
