export const courses = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    slug: 'digital-marketing',
    description: 'Master SEO, Social Media, Email Marketing, and Analytics to grow any business online.',
    price: 299,
    discount: 199,
    category: 'MARKETING',
    level: 'BEGINNER',
    duration: 40,
    students: 15420,
    rating: 4.8,
    image: '/courses/marketing.jpg',
    instructor: 'Sarah Johnson',
    modules: [
      {
        title: 'Marketing Fundamentals',
        lessons: [
          'Introduction to Digital Marketing',
          'Understanding Customer Journey',
          'Market Research & Analysis',
          'Setting Marketing Goals & KPIs',
          'Building Your Marketing Strategy',
          'Marketing Budget Planning',
          'Legal & Ethical Considerations',
          'Tools & Resources Overview',
          'Case Study: Successful Campaigns',
          'Assignment: Create Marketing Plan'
        ]
      },
      {
        title: 'SEO Mastery',
        lessons: [
          'Search Engine Fundamentals',
          'Keyword Research & Strategy',
          'On-Page SEO Optimization',
          'Technical SEO Deep Dive',
          'Link Building Strategies',
          'Local SEO Techniques',
          'SEO Analytics & Reporting',
          'SEO Tools Workshop',
          'Algorithm Updates Explained',
          'Project: Optimize a Website'
        ]
      },
      // ... 8 more modules with 5-10 lessons each
    ]
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence Fundamentals',
    slug: 'artificial-intelligence',
    description: 'Learn AI basics, machine learning, neural networks, and real-world applications.',
    price: 399,
    discount: 249,
    category: 'AI',
    level: 'INTERMEDIATE',
    duration: 50,
    students: 8920,
    rating: 4.9,
    image: '/courses/ai.jpg',
    instructor: 'Dr. Alan Chen',
    modules: [
      {
        title: 'AI Foundations',
        lessons: [
          'What is Artificial Intelligence?',
          'History & Evolution of AI',
          'Types of AI Systems',
          'AI Ethics & Responsible AI',
          'Machine Learning Basics',
          'Data Science Fundamentals',
          'Python for AI',
          'Setting Up Development Environment',
          'Your First AI Project',
          'Assignment: AI Use Case Analysis'
        ]
      },
      // ... 8 more modules
    ]
  },
  {
    id: 'chatgpt-mastery',
    title: 'ChatGPT Mastery',
    slug: 'chatgpt-mastery',
    description: 'Master prompt engineering and build AI-powered applications with ChatGPT.',
    price: 199,
    discount: 149,
    category: 'AI',
    level: 'BEGINNER',
    duration: 25,
    students: 21340,
    rating: 4.9,
    image: '/courses/chatgpt.jpg',
    instructor: 'Mike Roberts',
    modules: [
      {
        title: 'Getting Started with ChatGPT',
        lessons: [
          'Understanding GPT Models',
          'Setting Up ChatGPT Account',
          'Basic Prompting Techniques',
          'Understanding Token Limits',
          'ChatGPT Web vs API',
          'Best Practices & Limitations',
          'Privacy & Security',
          'Practical Exercise: First Conversations'
        ]
      },
      // ... 8 more modules
    ]
  },
  {
    id: 'claude-ai',
    title: 'Claude AI Mastery',
    slug: 'claude-ai',
    description: 'Master Anthropic\'s Claude AI for advanced analysis and creative tasks.',
    price: 199,
    discount: 149,
    category: 'AI',
    level: 'INTERMEDIATE',
    duration: 20,
    students: 5670,
    rating: 4.7,
    image: '/courses/claude.jpg',
    instructor: 'Emma Watson',
    modules: []
  },
  {
    id: 'gemini-ai',
    title: 'Google Gemini AI',
    slug: 'gemini-ai',
    description: 'Master Google\'s most advanced AI model for multimodal applications.',
    price: 249,
    discount: 179,
    category: 'AI',
    level: 'INTERMEDIATE',
    duration: 22,
    students: 4320,
    rating: 4.8,
    image: '/courses/gemini.jpg',
    instructor: 'David Park',
    modules: []
  },
  {
    id: 'shopify',
    title: 'Shopify E-commerce Mastery',
    slug: 'shopify',
    description: 'Build a profitable online store and scale your e-commerce business.',
    price: 349,
    discount: 249,
    category: 'BUSINESS',
    level: 'BEGINNER',
    duration: 35,
    students: 12890,
    rating: 4.8,
    image: '/courses/shopify.jpg',
    instructor: 'Lisa Zhang',
    modules: []
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    slug: 'wordpress',
    description: 'Master WordPress from basics to advanced custom development.',
    price: 299,
    discount: 199,
    category: 'DEVELOPMENT',
    level: 'BEGINNER',
    duration: 45,
    students: 15340,
    rating: 4.7,
    image: '/courses/wordpress.jpg',
    instructor: 'Chris Martin',
    modules: []
  }
]

// Generate detailed content for each course module
export function generateCourseContent(courseId: string) {
  // This function would generate complete lesson content,
  // quizzes, assignments, and resources for each course
  // Implementation would include 8-12 modules with 5-10 lessons each
  // Each lesson includes video content, text, code examples, and exercises
}