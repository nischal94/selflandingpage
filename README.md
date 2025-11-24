# Nischal Sharma Portfolio & AI Chat

A Next.js portfolio website with AI chat functionality and community comments section.

## Features

- **AI Chat**: Chat with an AI version of Nischal powered by OpenAI (requires authentication)
- **Firebase Authentication**: Google Sign-In integration
- **Comments Section**: Users can comment on the homepage and like each other's comments
- **Portfolio Pages**: About, Svenklas, Philosophy & Vision, Media, and Contact pages

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Firebase (Authentication & Firestore)
- OpenAI API
- Vercel (deployment)

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment variables:**
   - The `.env.local` file already contains your OpenAI API key
   - Firebase config is in `lib/firebase.ts`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Step 1: Deploy to Vercel

1. **Login to Vercel:**
   ```bash
   npx vercel login
   ```

2. **Deploy:**
   ```bash
   npx vercel
   ```
   Follow the prompts:
   - Link to existing project? No
   - Project name: nischal-app (or your choice)
   - Directory: ./
   - Override settings? No

3. **Deploy to production:**
   ```bash
   npx vercel --prod
   ```

### Step 2: Set Environment Variables in Vercel

1. Go to your project dashboard on [vercel.com](https://vercel.com)
2. Navigate to Settings → Environment Variables
3. Add the following variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** `your-openai-api-key-here`
   - Select all environments (Production, Preview, Development)
4. Redeploy after adding the environment variable

### Step 3: Configure Firebase

#### Enable Google Sign-In:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `nischalapp-71d67`
3. Navigate to **Authentication** → **Sign-in method**
4. Enable **Google** sign-in provider
5. Add your Vercel domain as an authorized domain:
   - Click on **Authorized domains** tab
   - Add your Vercel domain (e.g., `nischal-app.vercel.app`)

#### Set up Firestore:

1. In Firebase Console, navigate to **Firestore Database**
2. If not created, click **Create database**
   - Start in **production mode**
   - Choose a location closest to your users (e.g., `asia-south1` for India)
3. Navigate to **Rules** tab
4. Replace the rules with the content from `firestore.rules` file in this project
5. Click **Publish**

### Step 4: Test Your Deployment

1. Visit your Vercel URL
2. Test Google Sign-In
3. Try adding a comment on the homepage
4. Test the AI chat at `/chat`

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts       # OpenAI API route
│   ├── about/
│   ├── chat/                  # AI chat page
│   ├── contact/
│   ├── media/
│   ├── philosophy/
│   ├── svenklas/
│   ├── layout.tsx
│   ├── page.tsx               # Homepage
│   └── globals.css
├── components/
│   ├── AuthButton.tsx         # Sign in/out button
│   ├── Comments.tsx           # Comments section
│   └── ContentLayout.tsx      # Layout for content pages
├── lib/
│   ├── AuthContext.tsx        # Authentication context
│   └── firebase.ts            # Firebase configuration
├── firestore.rules            # Firestore security rules
├── .env.local                 # Environment variables
└── package.json

```

## Security Notes

- OpenAI API key is stored as an environment variable (never in client code)
- Firestore rules enforce authentication for writes
- Users can only delete their own comments
- Users can only like/unlike (not modify like counts directly)
- Comment length is limited to 500 characters

## Support

For issues or questions, please contact through the Connect page.
