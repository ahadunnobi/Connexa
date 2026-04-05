# Connexa AI - Briefing Document

Connexa AI is an **AI-powered Social Growth Engine** designed to automate and personalize LinkedIn networking and content creation. It acts as a "Personal Brand Machine" that blends technical depth with philosophical insights.

## 🚀 Tech Stack
- **Framework**: Next.js 16.2.2 (App Router)
- **Styling**: TailwindCSS 4.0
- **Database**: Prisma 7.6.0 with PostgreSQL
- **AI**: OpenAI (SDK v6.33.0)
- **Icons**: Lucide React

## 📂 Project Structure
- `src/app/`: Core application routes.
  - `/content`: AI Content Generation interface.
  - `/networking`: AI-driven networking management.
  - `/analytics`: growth metrics.
  - `/settings`: AI persona and API configuration.
- `src/components/`: Reusable UI components (e.g., `Sidebar`).
- `src/app/api/`: Backend endpoints for AI and database interactions.
- `prisma/`: Database schema and configuration.

## 🛠️ Current Status: "The UI Shell"
The project currently has a high-end, premium UI design but most functional logic is either mocked or incomplete.

### ✅ What's Done
- **Navigation & Layout**: Sidebar and responsive main container.
- **Dashboard**: Visual metrics and interaction lists (static data).
- **Settings UI**: Interface for configuring AI persona and API keys.

### ⚠️ Identified Problems
1. **Prisma Schema Incomplete**:
   - `prisma/schema.prisma` is missing models (Users, Posts, Interactions).
   - The generator provider is incorrectly set to `prisma-client` (should be `prisma-client-js`).
2. **Mocked AI Logic**:
   - `src/app/api/ai/content/route.ts` returns static text instead of calling OpenAI.
3. **Environment Variables**:
   - `.env` contains a `DATABASE_URL` but no `OPENAI_API_KEY`.
4. **Broken Dependencies**:
   - The UI uses several components and icons that are imported but may need actual backend data to be useful.

## 🔑 Missing Requirements
To make the application fully functional, the following are needed:

| Requirement | Status | Impact |
| :--- | :--- | :--- |
| **OpenAI API Key** | ❌ Missing | Content generation will not work. |
| **LinkedIn API / OAuth** | ❌ Missing | Networking automation cannot interact with LinkedIn. |
| **Database Schema** | 🛑 Incomplete | Data cannot be saved or retrieved (Settings, Posts, Logs). |

## 🎯 Next Steps
1. **Fix Prisma Schema**: Define models for AI persona, content queue, and networking logs.
2. **Implement AI Service**: Migrate from mock responses to actual OpenAI completions.
3. **Connect Frontend**: Bind UI triggers (like "Generate New Content") to the API.
4. **Environment Setup**: Add `OPENAI_API_KEY` to `.env`.

---
> [!IMPORTANT]
> Please provide your **OpenAI API Key** and any **LinkedIn Developer Credentials** when you are ready to proceed with the integration.
