# Luna Dental | Where Beauty Meets Dentistry

Luna Dental is a premium dental clinic website built with Next.js 15, Tailwind CSS, and Sanity.io. It features a modern, aesthetic design focused on patient experience and high-fidelity visual presentation.

## 🏗️ Architecture

The project is structured as a monorepo-lite containing both the frontend application and the content management system.

- **`/app`**: The main Next.js 15 application.
  - **Framework**: Next.js (App Router)
  - **Styling**: Tailwind CSS
  - **Animations**: Framer Motion
  - **Form Handling**: Supabase (Integration for appointment requests)
- **`/studio-blog-stoma`**: Sanity Studio instance for managing blog posts, services, and doctors.

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, React 19
- **CMS**: Sanity.io (Headless CMS)
- **Database/Backend**: Supabase (for persistent form data)
- **Icons**: Lucide React
- **Deployment**: Optimized for Netlify

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 20+
- A Sanity.io project
- A Supabase project

### 2. Installation
Clone the repository and install dependencies in both folders:

```bash
# In the root or /app folder
cd app
npm install

# In the studio folder
cd ../studio-blog-stoma
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the `app` directory based on `.env.local.example`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_token
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### 4. Running Locally
```bash
# Start Next.js
cd app
npm run dev

# Start Sanity Studio (in a separate terminal)
cd studio-blog-stoma
npm run dev
```

## 📄 License

Internal project for Luna Dental.
