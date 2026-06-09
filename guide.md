For  **React Native + Expo + Android/iOS** , this is the shortest practical workflow:

# 1. Create Project

```bash
npx create-expo-app@latest my-app
cd my-app
```

---

# 2. Run App

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

# 3. Install Common Packages

Navigation:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

API:

```bash
npm install axios
```

State:

```bash
npm install zustand
```

Forms:

```bash
npm install react-hook-form zod
```

Server State:

```bash
npm install @tanstack/react-query
```

---

# 4. Project Structure

```txt
src/
├── api/
├── components/
├── navigation/
├── screens/
├── services/
├── store/
├── theme/
├── types/
└── utils/
```

---

# 5. Build APK

Install EAS:

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

Build APK:

```bash
eas build -p android --profile preview
```

Result:

```txt
APK Download Link
```

Share with anyone.

---

# 6. Build Play Store Version

```bash
eas build -p android --profile production
```

Result:

```txt
AAB
```

Upload to Google Play.

---

# 7. Build iPhone Version

No code changes needed.

```bash
eas build -p ios
```

Requirements:

```txt
Apple Developer Account ($99/year)
```

Result:

```txt
IPA
```

Upload to App Store Connect.

---

# Real Product Flow

```txt
Idea
↓
Design
↓
Create Expo App
↓
Build Screens
↓
Connect Backend API
↓
Test in Expo Go
↓
Build APK
↓
Beta Testing
↓
Build AAB
↓
Play Store
↓
Build IPA
↓
App Store
```

# Commands You'll Use Most

```bash
# Run
npx expo start

# Install package
npm install package-name

# Android APK
eas build -p android --profile preview

# Play Store Build
eas build -p android --profile production

# iOS Build
eas build -p ios

# Check project
npx expo-doctor
```

If you remember only  **5 commands** , remember:

```bash
npx create-expo-app@latest app-name
npx expo start
eas build:configure
eas build -p android --profile preview
eas build -p ios
```

These cover ~90% of the React Native + Expo workflow from project creation to Android APK and iOS app builds.
