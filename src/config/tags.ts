export const tagColors: Record<string, string> = {
  // JavaScript Ecosystem
  javascript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', // JavaScript yellow
  typescript: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // TypeScript blue
  nodejs: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // Node.js green
  deno: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300', // Deno
  bun: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300', // Bun pink

  // Frontend Frameworks
  react: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300', // React blue
  vue: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300', // Vue.js green
  svelte: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300', // Svelte orange
  solid: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // SolidJS blue
  qwik: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // Qwik purple

  // Meta Frameworks
  nextjs: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300', // Next.js black
  nuxt: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // Nuxt.js green
  remix: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300', // Remix indigo
  astro: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // Astro purple
  gatsby: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // Gatsby purple

  // Backend Languages & Frameworks
  java: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', // Java red
  spring: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // Spring green
  python: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // Python blue
  django: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // Django green
  flask: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300', // Flask black
  fastapi: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300', // FastAPI teal
  go: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300', // Go cyan
  rust: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300', // Rust orange
  dotnet: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // .NET purple
  php: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300', // PHP indigo
  laravel: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', // Laravel red
  ruby: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', // Ruby red
  rails: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', // Rails red

  // AI & Machine Learning
  ai: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // AI purple
  machinelearning: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // ML blue
  deeplearning: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300', // Deep Learning
  tensorflow: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300', // TensorFlow orange
  pytorch: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', // PyTorch red
  opencv: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // OpenCV green
  computervision: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // Computer Vision
  nlp: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300', // NLP
  gpt: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300', // GPT
  openai: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300', // OpenAI
  huggingface: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', // Hugging Face
  langchain: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // LangChain
  llm: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // LLM

  // State Management
  redux: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // Redux purple
  mobx: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300', // MobX orange
  zustand: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', // Zustand
  jotai: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300', // Jotai
  recoil: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // Recoil blue

  // Styling
  tailwind: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300', // Tailwind CSS cyan
  css: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // CSS blue
  sass: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300', // Sass pink
  styledcomponents: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300', // Styled Components pink
  emotion: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300', // Emotion pink

  // Testing
  jest: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', // Jest red
  vitest: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // Vitest green
  cypress: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300', // Cypress
  playwright: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // Playwright purple

  // Build Tools
  vite: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // Vite purple
  webpack: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // Webpack blue
  rollup: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', // Rollup red
  esbuild: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', // esbuild yellow
  turbopack: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300', // Turbopack pink

  // Backend & API
  graphql: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300', // GraphQL pink
  rest: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // REST
  trpc: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // tRPC blue
  prisma: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300', // Prisma indigo
  mongodb: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', // MongoDB green

  // DevOps & Deployment
  docker: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // Docker blue
  kubernetes: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', // Kubernetes blue
  aws: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300', // AWS orange
  vercel: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300', // Vercel black
  netlify: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300', // Netlify teal

  // Other
  pwa: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300', // PWA
  performance: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  security: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  accessibility: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  seo: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',

  // Default fallback
  default: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300',
};

export function getTagColor(tag: string): string {
  return tagColors[tag.toLowerCase()] || tagColors.default;
}
