export interface ProjectCategory {
  id: string;
  name: string;
  group: 'main' | 'frontend' | 'core' | 'styling' | 'backend' | 'database';
}

export const projectCategories: ProjectCategory[] = [
  // Main Category
  {
    id: 'all',
    name: 'All Projects',
    group: 'main'
  },

  // Frontend Frameworks
  {
    id: 'react',
    name: 'React',
    group: 'frontend'
  },
  {
    id: 'next',
    name: 'Next.js',
    group: 'frontend'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    group: 'frontend'
  },
  {
    id: 'angular',
    name: 'Angular',
    group: 'frontend'
  },

  // Core Technologies
  {
    id: 'javascript',
    name: 'JavaScript',
    group: 'core'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    group: 'core'
  },

  // Styling
  {
    id: 'css',
    name: 'CSS',
    group: 'styling'
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    group: 'styling'
  },
  {
    id: 'sass',
    name: 'Scss',
    group: 'styling'
  },

  // Backend
  {
    id: 'node',
    name: 'Node.js',
    group: 'backend'
  },
  {
    id: 'python',
    name: 'Python',
    group: 'backend'
  },

  // Database
  {
    id: 'firebase',
    name: 'Firebase',
    group: 'database'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    group: 'database'
  }
];

// Group categories by their type
export const groupedCategories = {
  main: projectCategories.filter(cat => cat.group === 'main'),
  frontend: projectCategories.filter(cat => cat.group === 'frontend'),
  core: projectCategories.filter(cat => cat.group === 'core'),
  styling: projectCategories.filter(cat => cat.group === 'styling'),
  backend: projectCategories.filter(cat => cat.group === 'backend'),
  database: projectCategories.filter(cat => cat.group === 'database')
};

export default projectCategories;