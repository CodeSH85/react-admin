# Use a minimal Node.js image
FROM node:20-slim AS base

# Set up PNPM manually (bypassing Corepack)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm@latest

# Set the working directory
WORKDIR /app

# Copy only package manager files first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies separately for production and development
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS dev-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Now copy the rest of the source code
COPY . .

# Development stage
FROM dev-deps AS dev
# Adjust to your app's port
EXPOSE 3000
CMD ["pnpm", "dev"]
