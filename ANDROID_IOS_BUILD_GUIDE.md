# Android & iOS Build Guide (Expo + React Native)

## Prerequisites

### Install Node.js

Recommended:

```bash
node -v
```

Use:

```txt
Node.js 22 LTS
```

### Install Expo CLI

```bash
npm install -g eas-cli
```

### Verify

```bash
eas --version
```

---

# Create Project

```bash
npx create-expo-app@latest my-app
cd my-app
```

Run:

```bash
npm install
npx expo start
```

---

# Development Workflow

Start project:

```bash
npx expo start
```

Open:

```txt
Expo Go
↓
Scan QR
↓
Run App
```

---

# EAS Setup

Login:

```bash
eas login
```

Check:

```bash
eas whoami
```

Configure:

```bash
eas build:configure
```

This creates:

```txt
eas.json
```

---

# Android

## Android Testing APK

Build:

```bash
eas build -p android --profile preview
```

Output:

```txt
APK
```

Use for:

* Client demos
* QA testing
* Internal testing
* Sharing via Drive, Telegram, WhatsApp

Install:

```txt
Download APK
↓
Install
↓
Use App
```

Cost:

```txt
Free
```

---

## Android Production Build

Build:

```bash
eas build -p android --profile production
```

Output:

```txt
AAB
```

Use for:

```txt
Google Play Store
```

---

## Google Play Release

Requirements:

```txt
Google Play Console Account
```

Fee:

```txt
$25 (one-time)
```

Flow:

```txt
Build AAB
↓
Google Play Console
↓
Upload
↓
Review
↓
Publish
```

---

# iOS

## Free Testing

Run:

```bash
npx expo start
```

On iPhone:

```txt
Install Expo Go
↓
Scan QR
↓
Run App
```

Cost:

```txt
Free
```

---

## iOS Build

Build:

```bash
eas build -p ios
```

Output:

```txt
IPA
```

---

## TestFlight

Flow:

```txt
Build IPA
↓
Upload
↓
TestFlight
↓
Invite Testers
```

Requirements:

```txt
Apple Developer Account
```

Fee:

```txt
$99/year
```

---

## App Store Release

Flow:

```txt
Build IPA
↓
App Store Connect
↓
Submit
↓
Review
↓
Publish
```

Requirements:

```txt
Apple Developer Account
```

Fee:

```txt
$99/year
```

---

# Platform Comparison

| Feature                | Android             | iOS  |
| ---------------------- | ------------------- | ---- |
| Expo Go Testing        | Free                | Free |
| Installable Build      | APK                 | IPA  |
| Direct Installation    | Yes                 | No   |
| Store Account Cost     | $25 once | $99/year |      |
| Play/App Store Release | Yes                 | Yes  |

---

# Common Commands

## Start Development

```bash
npx expo start
```

## Check Project

```bash
npx expo-doctor
```

## Configure EAS

```bash
eas build:configure
```

## Android APK

```bash
eas build -p android --profile preview
```

## Android Play Store Build

```bash
eas build -p android --profile production
```

## iOS Build

```bash
eas build -p ios
```

---

# React Native Product Lifecycle

```txt
Idea
↓
Design
↓
Create Expo Project
↓
Develop Features
↓
Connect Backend
↓
Test in Expo Go
↓
Android APK Build
↓
QA Testing
↓
Android Production Build (AAB)
↓
Google Play Store
↓
iOS Build (IPA)
↓
TestFlight
↓
App Store
```

---

# Recommended Production Stack

Frontend

```txt
React Native
Expo
TypeScript
React Navigation
React Query
Zustand
React Hook Form
Zod
```

Backend

```txt
NestJS
PostgreSQL
Prisma
Redis
```

Infrastructure

```txt
Cloudinary
Firebase
EAS Build
Sentry
PostHog
```

---

# Quick Reference

Android Test APK:

```bash
eas build -p android --profile preview
```

Android Play Store:

```bash
eas build -p android --profile production
```

iPhone Testing:

```bash
npx expo start
```

iPhone App Store Build:

```bash
eas build -p ios
```
