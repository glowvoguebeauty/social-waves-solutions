export const courses = [
  {
    id: 'digital-marketing-mastery',
    title: 'Digital Marketing Mastery',
    slug: 'digital-marketing-mastery',
    description: 'Master SEO, Social Media, Email Marketing, and Analytics to grow any business online. Learn from industry experts with real-world case studies.',
    price: 299,
    discount: 199,
    category: 'MARKETING',
    level: 'BEGINNER',
    duration: 40,
    students: 15420,
    rating: 4.8,
    reviews: 1243,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'Digital Marketing Expert with 10+ years of experience at top agencies',
      students: 50000,
      courses: 4
    },
    createdAt: '2024-01-01',
    learningOutcomes: [
      'Master SEO strategies to rank #1 on Google',
      'Create engaging social media campaigns that convert',
      'Build effective email marketing funnels',
      'Analyze data and make data-driven decisions',
      'Develop complete digital marketing strategies',
      'Use AI tools to automate marketing tasks'
    ],
    prerequisites: ['Basic computer skills', 'Internet navigation'],
    includes: [
      '40 hours of video content',
      '150+ downloadable resources',
      'Certificate of completion',
      'Lifetime access',
      'Project files',
      'Weekly live Q&A sessions'
    ],
    modules: [
      {
        title: 'Marketing Fundamentals',
        duration: '4 hours',
        lessons: [
          {
            title: 'Introduction to Digital Marketing',
            duration: '15 min',
            description: 'Understanding the digital marketing landscape and career opportunities',
            videoUrl: 'https://example.com/video1',
            resources: ['slides.pdf', 'worksheet.docx']
          },
          {
            title: 'Understanding Customer Journey',
            duration: '20 min',
            description: 'Map out customer touchpoints and optimize conversion paths',
            quiz: {
              questions: 5,
              passingScore: 70
            }
          },
          {
            title: 'Market Research & Analysis',
            duration: '25 min',
            description: 'Conduct market research and competitor analysis',
            assignment: 'Research 3 competitors and create a SWOT analysis'
          },
          {
            title: 'Setting Marketing Goals & KPIs',
            duration: '18 min',
            description: 'Define SMART goals and track key performance indicators'
          },
          {
            title: 'Building Your Marketing Strategy',
            duration: '30 min',
            description: 'Create a comprehensive marketing strategy document'
          },
          {
            title: 'Marketing Budget Planning',
            duration: '22 min',
            description: 'Allocate budgets across channels for maximum ROI'
          },
          {
            title: 'Legal & Ethical Considerations',
            duration: '15 min',
            description: 'Understand GDPR, CAN-SPAM, and marketing regulations'
          },
          {
            title: 'Tools & Resources Overview',
            duration: '20 min',
            description: 'Explore essential marketing tools and software'
          },
          {
            title: 'Case Study: Successful Campaigns',
            duration: '25 min',
            description: 'Analyze real-world successful marketing campaigns'
          },
          {
            title: 'Project: Create Marketing Plan',
            duration: '60 min',
            description: 'Develop a complete marketing plan for a business of your choice'
          }
        ]
      },
      {
        title: 'SEO Mastery',
        duration: '6 hours',
        lessons: [
          {
            title: 'Search Engine Fundamentals',
            duration: '20 min',
            description: 'How search engines work and ranking factors'
          },
          {
            title: 'Keyword Research & Strategy',
            duration: '35 min',
            description: 'Find profitable keywords with high intent'
          },
          {
            title: 'On-Page SEO Optimization',
            duration: '40 min',
            description: 'Optimize titles, meta descriptions, headers, and content'
          },
          {
            title: 'Technical SEO Deep Dive',
            duration: '45 min',
            description: 'Site structure, XML sitemaps, robots.txt, and schema markup'
          },
          {
            title: 'Link Building Strategies',
            duration: '30 min',
            description: 'Build high-quality backlinks ethically'
          },
          {
            title: 'Local SEO Techniques',
            duration: '25 min',
            description: 'Optimize for local search and Google Maps'
          },
          {
            title: 'SEO Analytics & Reporting',
            duration: '30 min',
            description: 'Track rankings, traffic, and conversions'
          },
          {
            title: 'SEO Tools Workshop',
            duration: '40 min',
            description: 'Hands-on with Ahrefs, SEMrush, and Google Search Console'
          },
          {
            title: 'Algorithm Updates Explained',
            duration: '20 min',
            description: 'Navigate Google algorithm changes'
          },
          {
            title: 'Project: Optimize a Website',
            duration: '90 min',
            description: 'Perform a complete SEO audit and optimization'
          }
        ]
      },
      {
        title: 'Social Media Marketing',
        duration: '5 hours',
        lessons: [
          {
            title: 'Social Media Strategy Development',
            duration: '30 min',
            description: 'Create platform-specific strategies for each network'
          },
          {
            title: 'Facebook & Instagram Marketing',
            duration: '45 min',
            description: 'Master organic and paid strategies'
          },
          {
            title: 'LinkedIn for Business',
            duration: '30 min',
            description: 'Generate B2B leads and build authority'
          },
          {
            title: 'TikTok & Short-form Video',
            duration: '35 min',
            description: 'Create viral content and grow followers'
          },
          {
            title: 'Twitter/X Marketing',
            duration: '25 min',
            description: 'Build community and engagement'
          },
          {
            title: 'Social Media Analytics',
            duration: '30 min',
            description: 'Measure ROI and optimize campaigns'
          },
          {
            title: 'Social Media Advertising',
            duration: '50 min',
            description: 'Create and optimize paid social campaigns'
          },
          {
            title: 'Influencer Marketing',
            duration: '25 min',
            description: 'Partner with influencers for brand growth'
          },
          {
            title: 'Social Media Tools',
            duration: '20 min',
            description: 'Schedule, monitor, and analyze with Buffer, Hootsuite'
          },
          {
            title: 'Project: Social Media Campaign',
            duration: '60 min',
            description: 'Launch and manage a 30-day social media campaign'
          }
        ]
      },
      {
        title: 'Content Marketing',
        duration: '4.5 hours',
        lessons: [
          {
            title: 'Content Strategy Development',
            duration: '30 min',
            description: 'Create a content calendar and strategy'
          },
          {
            title: 'Blog Writing Mastery',
            duration: '40 min',
            description: 'Write engaging blog posts that rank'
          },
          {
            title: 'Video Content Creation',
            duration: '45 min',
            description: 'Produce professional videos for YouTube and social'
          },
          {
            title: 'Email Newsletter Excellence',
            duration: '35 min',
            description: 'Build and nurture email lists'
          },
          {
            title: 'Podcasting for Brands',
            duration: '30 min',
            description: 'Start and grow a successful podcast'
          },
          {
            title: 'Content Distribution',
            duration: '25 min',
            description: 'Amplify reach through multiple channels'
          },
          {
            title: 'Content Repurposing',
            duration: '20 min',
            description: 'Maximize content ROI through repurposing'
          },
          {
            title: 'Content Analytics',
            duration: '25 min',
            description: 'Measure content performance and engagement'
          },
          {
            title: 'AI Content Tools',
            duration: '30 min',
            description: 'Use AI to scale content production'
          },
          {
            title: 'Project: Content Funnel',
            duration: '60 min',
            description: 'Create a complete content marketing funnel'
          }
        ]
      },
      {
        title: 'Email Marketing',
        duration: '3.5 hours',
        lessons: [
          {
            title: 'Email Marketing Fundamentals',
            duration: '20 min',
            description: 'Understanding email marketing value and metrics'
          },
          {
            title: 'Building Your Email List',
            duration: '30 min',
            description: 'Lead magnets, opt-in forms, and list growth strategies'
          },
          {
            title: 'Email Automation Sequences',
            duration: '35 min',
            description: 'Create welcome sequences, abandoned cart, and re-engagement'
          },
          {
            title: 'Crafting High-Converting Emails',
            duration: '30 min',
            description: 'Subject lines, copywriting, and design best practices'
          },
          {
            title: 'Segmentation & Personalization',
            duration: '25 min',
            description: 'Target the right message to the right audience'
          },
          {
            title: 'A/B Testing Email Campaigns',
            duration: '20 min',
            description: 'Optimize open rates and click-through rates'
          },
          {
            title: 'Email Analytics & ROI',
            duration: '20 min',
            description: 'Track performance and calculate revenue'
          },
          {
            title: 'Email Deliverability',
            duration: '15 min',
            description: 'Ensure emails reach the inbox'
          },
          {
            title: 'Email Marketing Tools',
            duration: '20 min',
            description: 'Hands-on with Mailchimp, Klaviyo, ConvertKit'
          },
          {
            title: 'Project: Email Campaign',
            duration: '45 min',
            description: 'Build and launch a 5-email nurture sequence'
          }
        ]
      },
      {
        title: 'Analytics & Data',
        duration: '4 hours',
        lessons: [
          {
            title: 'Google Analytics Mastery',
            duration: '45 min',
            description: 'Set up, navigate, and extract insights from GA4'
          },
          {
            title: 'Conversion Tracking Setup',
            duration: '35 min',
            description: 'Track goals, events, and conversions'
          },
          {
            title: 'Data Visualization & Reporting',
            duration: '30 min',
            description: 'Create dashboards with Looker Studio'
          },
          {
            title: 'Marketing Attribution Models',
            duration: '25 min',
            description: 'Understand customer touchpoints and attribution'
          },
          {
            title: 'Cohort Analysis',
            duration: '20 min',
            description: 'Analyze user behavior over time'
          },
          {
            title: 'Funnel Analysis',
            duration: '30 min',
            description: 'Identify drop-off points and optimize'
          },
          {
            title: 'A/B Testing Best Practices',
            duration: '25 min',
            description: 'Design and run effective experiments'
          },
          {
            title: 'Data Privacy & Compliance',
            duration: '20 min',
            description: 'GDPR, CCPA, and data protection'
          },
          {
            title: 'Advanced Analytics Tools',
            duration: '30 min',
            description: 'Hotjar, Mixpanel, and Amplitude'
          },
          {
            title: 'Project: Analytics Dashboard',
            duration: '60 min',
            description: 'Create a comprehensive marketing dashboard'
          }
        ]
      },
      {
        title: 'PPC & Paid Advertising',
        duration: '5 hours',
        lessons: [
          {
            title: 'Google Ads Fundamentals',
            duration: '40 min',
            description: 'Search, Display, and Shopping campaigns'
          },
          {
            title: 'Keyword Research for PPC',
            duration: '30 min',
            description: 'Find profitable keywords for paid campaigns'
          },
          {
            title: 'Ad Copy Writing',
            duration: '25 min',
            description: 'Create compelling ads that convert'
          },
          {
            title: 'Bidding Strategies',
            duration: '30 min',
            description: 'Manual vs automated bidding'
          },
          {
            title: 'Quality Score Optimization',
            duration: '20 min',
            description: 'Improve ad relevance and lower costs'
          },
          {
            title: 'Facebook Ads Manager',
            duration: '45 min',
            description: 'Create and optimize Facebook/Instagram ads'
          },
          {
            title: 'Retargeting Campaigns',
            duration: '30 min',
            description: 'Re-engage website visitors'
          },
          {
            title: 'Display Advertising',
            duration: '25 min',
            description: 'Visual ads across the Google Display Network'
          },
          {
            title: 'YouTube Advertising',
            duration: '35 min',
            description: 'Video ads that engage and convert'
          },
          {
            title: 'Project: PPC Campaign',
            duration: '60 min',
            description: 'Launch and optimize a complete PPC campaign'
          }
        ]
      },
      {
        title: 'Career & Freelancing',
        duration: '3 hours',
        lessons: [
          {
            title: 'Building Your Marketing Portfolio',
            duration: '25 min',
            description: 'Showcase your work and case studies'
          },
          {
            title: 'Resume & LinkedIn Optimization',
            duration: '30 min',
            description: 'Stand out to employers and recruiters'
          },
          {
            title: 'Interview Preparation',
            duration: '20 min',
            description: 'Common marketing interview questions'
          },
          {
            title: 'Freelancing Essentials',
            duration: '35 min',
            description: 'Find clients, set rates, and manage projects'
          },
          {
            title: 'Marketing Certifications',
            duration: '15 min',
            description: 'Google, HubSpot, Facebook certifications'
          },
          {
            title: 'Networking & Community',
            duration: '20 min',
            description: 'Build relationships in marketing industry'
          },
          {
            title: 'Continuous Learning',
            duration: '15 min',
            description: 'Stay updated with latest trends'
          },
          {
            title: 'Pricing Your Services',
            duration: '20 min',
            description: 'Value-based pricing strategies'
          },
          {
            title: 'Client Management',
            duration: '25 min',
            description: 'Communicate, report, and retain clients'
          },
          {
            title: 'Final Project Review',
            duration: '45 min',
            description: 'Present your portfolio and get feedback'
          }
        ]
      },
      {
        title: 'Final Exam & Certification',
        duration: '2 hours',
        lessons: [
          {
            title: 'Comprehensive Final Exam',
            duration: '90 min',
            description: 'Test your knowledge across all modules',
            exam: {
              questions: 100,
              timeLimit: 90,
              passingScore: 80
            }
          },
          {
            title: 'Course Review & Feedback',
            duration: '15 min',
            description: 'Share your learning experience'
          },
          {
            title: 'Certificate Ceremony',
            duration: '15 min',
            description: 'Receive your official certification'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    slug: 'ai-fundamentals',
    description: 'Learn AI basics, machine learning, neural networks, and real-world applications with hands-on projects.',
    price: 399,
    discount: 249,
    category: 'AI',
    level: 'INTERMEDIATE',
    duration: 50,
    students: 8920,
    rating: 4.9,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. Alan Chen',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      bio: 'AI Research Scientist with PhD from MIT',
      students: 35000,
      courses: 3
    },
    createdAt: '2024-01-15',
    learningOutcomes: [
      'Understand core AI and ML concepts',
      'Build and train neural networks',
      'Implement computer vision solutions',
      'Work with NLP and language models',
      'Deploy AI models to production',
      'Apply ethical AI principles'
    ],
    prerequisites: ['Basic Python knowledge', 'High school math'],
    includes: [
      '50 hours of video content',
      'Python code notebooks',
      '20 real-world projects',
      'Dataset collections',
      'Model deployment guide',
      'Research paper summaries'
    ],
    modules: [
      {
        title: 'AI Foundations',
        duration: '5 hours',
        lessons: [
          {
            title: 'What is Artificial Intelligence?',
            duration: '20 min',
            description: 'History, definitions, and scope of AI'
          },
          {
            title: 'Types of AI Systems',
            duration: '25 min',
            description: 'Narrow AI, General AI, and Superintelligence'
          },
          {
            title: 'AI Ethics & Responsible AI',
            duration: '30 min',
            description: 'Bias, fairness, transparency, and accountability'
          },
          {
            title: 'Machine Learning Basics',
            duration: '35 min',
            description: 'Supervised, unsupervised, and reinforcement learning'
          },
          {
            title: 'Data Science Fundamentals',
            duration: '40 min',
            description: 'Data collection, cleaning, and preprocessing'
          },
          {
            title: 'Python for AI',
            duration: '60 min',
            description: 'NumPy, Pandas, and Matplotlib essentials'
          },
          {
            title: 'Setting Up Development Environment',
            duration: '20 min',
            description: 'Jupyter, Colab, and local setup'
          },
          {
            title: 'Your First ML Model',
            duration: '45 min',
            description: 'Build a linear regression model from scratch'
          },
          {
            title: 'Model Evaluation Metrics',
            duration: '30 min',
            description: 'Accuracy, precision, recall, and F1-score'
          },
          {
            title: 'Project: AI Use Case Analysis',
            duration: '60 min',
            description: 'Identify and analyze AI opportunities in an industry'
          }
        ]
      },
      {
        title: 'Machine Learning Deep Dive',
        duration: '8 hours',
        lessons: [
          {
            title: 'Linear Regression',
            duration: '45 min',
            description: 'Simple and multiple linear regression'
          },
          {
            title: 'Logistic Regression',
            duration: '40 min',
            description: 'Classification problems and probability'
          },
          {
            title: 'Decision Trees & Random Forests',
            duration: '50 min',
            description: 'Ensemble learning methods'
          },
          {
            title: 'Support Vector Machines',
            duration: '45 min',
            description: 'Kernel tricks and margin optimization'
          },
          {
            title: 'K-Nearest Neighbors',
            duration: '30 min',
            description: 'Instance-based learning'
          },
          {
            title: 'K-Means Clustering',
            duration: '35 min',
            description: 'Unsupervised learning for grouping'
          },
          {
            title: 'Principal Component Analysis',
            duration: '40 min',
            description: 'Dimensionality reduction techniques'
          },
          {
            title: 'Feature Engineering',
            duration: '50 min',
            description: 'Creating and selecting features'
          },
          {
            title: 'Cross-Validation',
            duration: '35 min',
            description: 'K-fold and stratified cross-validation'
          },
          {
            title: 'Project: End-to-End ML Pipeline',
            duration: '90 min',
            description: 'Build, train, and evaluate a complete ML model'
          }
        ]
      },
      {
        title: 'Neural Networks & Deep Learning',
        duration: '7 hours',
        lessons: [
          {
            title: 'Perceptron & Activation Functions',
            duration: '40 min',
            description: 'Understanding artificial neurons'
          },
          {
            title: 'Multi-Layer Perceptrons',
            duration: '45 min',
            description: 'Building deeper networks'
          },
          {
            title: 'Backpropagation Algorithm',
            duration: '50 min',
            description: 'How neural networks learn'
          },
          {
            title: 'Optimization Algorithms',
            duration: '40 min',
            description: 'SGD, Adam, RMSprop'
          },
          {
            title: 'Regularization Techniques',
            duration: '35 min',
            description: 'Dropout, L1/L2 regularization'
          },
          {
            title: 'Convolutional Neural Networks',
            duration: '60 min',
            description: 'CNNs for image recognition'
          },
          {
            title: 'Recurrent Neural Networks',
            duration: '50 min',
            description: 'RNNs for sequence data'
          },
          {
            title: 'LSTM & GRU Networks',
            duration: '45 min',
            description: 'Advanced sequence models'
          },
          {
            title: 'Transfer Learning',
            duration: '40 min',
            description: 'Using pre-trained models'
          },
          {
            title: 'Project: Image Classifier',
            duration: '90 min',
            description: 'Build a CNN for CIFAR-10 dataset'
          }
        ]
      },
      {
        title: 'Computer Vision',
        duration: '6 hours',
        lessons: [
          {
            title: 'Image Processing Basics',
            duration: '40 min',
            description: 'Pixels, channels, and transformations'
          },
          {
            title: 'Object Detection',
            duration: '50 min',
            description: 'YOLO, SSD, and R-CNN'
          },
          {
            title: 'Image Segmentation',
            duration: '45 min',
            description: 'Semantic and instance segmentation'
          },
          {
            title: 'Face Recognition',
            duration: '40 min',
            description: 'Detection and verification systems'
          },
          {
            title: 'Generative Adversarial Networks',
            duration: '55 min',
            description: 'Creating realistic images with GANs'
          },
          {
            title: 'Style Transfer',
            duration: '35 min',
            description: 'Applying artistic styles to images'
          },
          {
            title: 'Video Analysis',
            duration: '40 min',
            description: 'Action recognition and tracking'
          },
          {
            title: 'Medical Imaging AI',
            duration: '35 min',
            description: 'Healthcare applications'
          },
          {
            title: 'Edge AI & Mobile Vision',
            duration: '30 min',
            description: 'Deploying models on devices'
          },
          {
            title: 'Project: Real-time Object Detection',
            duration: '90 min',
            description: 'Build a live camera object detector'
          }
        ]
      },
      {
        title: 'Natural Language Processing',
        duration: '6 hours',
        lessons: [
          {
            title: 'Text Preprocessing',
            duration: '35 min',
            description: 'Tokenization, stemming, lemmatization'
          },
          {
            title: 'Word Embeddings',
            duration: '45 min',
            description: 'Word2Vec, GloVe, and FastText'
          },
          {
            title: 'Text Classification',
            duration: '40 min',
            description: 'Sentiment analysis and spam detection'
          },
          {
            title: 'Named Entity Recognition',
            duration: '35 min',
            description: 'Identifying entities in text'
          },
          {
            title: 'Topic Modeling',
            duration: '40 min',
            description: 'LDA and latent semantic analysis'
          },
          {
            title: 'Sequence-to-Sequence Models',
            duration: '50 min',
            description: 'Machine translation and summarization'
          },
          {
            title: 'Attention Mechanism',
            duration: '45 min',
            description: 'Focusing on relevant information'
          },
          {
            title: 'Transformer Architecture',
            duration: '55 min',
            description: 'BERT, GPT, and modern LLMs'
          },
          {
            title: 'Fine-tuning Language Models',
            duration: '50 min',
            description: 'Adapting pre-trained models'
          },
          {
            title: 'Project: Sentiment Analyzer',
            duration: '60 min',
            description: 'Build a product review sentiment classifier'
          }
        ]
      },
      {
        title: 'Reinforcement Learning',
        duration: '5 hours',
        lessons: [
          {
            title: 'RL Fundamentals',
            duration: '30 min',
            description: 'Agents, environments, rewards'
          },
          {
            title: 'Markov Decision Processes',
            duration: '35 min',
            description: 'Mathematical framework'
          },
          {
            title: 'Q-Learning',
            duration: '40 min',
            description: 'Value-based learning'
          },
          {
            title: 'Deep Q-Networks',
            duration: '45 min',
            description: 'Combining DL with RL'
          },
          {
            title: 'Policy Gradients',
            duration: '40 min',
            description: 'Direct policy optimization'
          },
          {
            title: 'Actor-Critic Methods',
            duration: '45 min',
            description: 'Best of both worlds'
          },
          {
            title: 'Multi-Agent RL',
            duration: '35 min',
            description: 'Multiple agents interacting'
          },
          {
            title: 'RL for Games',
            duration: '40 min',
            description: 'AlphaGo and game AI'
          },
          {
            title: 'Real-world RL Applications',
            duration: '30 min',
            description: 'Robotics, finance, healthcare'
          },
          {
            title: 'Project: Game-playing AI',
            duration: '60 min',
            description: 'Train an agent to play CartPole or Pong'
          }
        ]
      },
      {
        title: 'Model Deployment & MLOps',
        duration: '4.5 hours',
        lessons: [
          {
            title: 'Model Serialization',
            duration: '25 min',
            description: 'Saving and loading models'
          },
          {
            title: 'Flask API Development',
            duration: '40 min',
            description: 'Creating REST endpoints'
          },
          {
            title: 'Docker for ML',
            duration: '35 min',
            description: 'Containerization basics'
          },
          {
            title: 'Cloud Deployment',
            duration: '45 min',
            description: 'AWS, GCP, Azure options'
          },
          {
            title: 'Model Monitoring',
            duration: '30 min',
            description: 'Tracking performance in production'
          },
          {
            title: 'CI/CD for ML',
            duration: '35 min',
            description: 'Automated training and deployment'
          },
          {
            title: 'Feature Stores',
            duration: '25 min',
            description: 'Managing features at scale'
          },
          {
            title: 'Model Versioning',
            duration: '25 min',
            description: 'DVC and model registries'
          },
          {
            title: 'Edge Deployment',
            duration: '30 min',
            description: 'TensorFlow Lite and ONNX'
          },
          {
            title: 'Project: Deploy to Cloud',
            duration: '60 min',
            description: 'Deploy a model as a web service'
          }
        ]
      },
      {
        title: 'Advanced Topics & Future Trends',
        duration: '5 hours',
        lessons: [
          {
            title: 'Federated Learning',
            duration: '30 min',
            description: 'Privacy-preserving ML'
          },
          {
            title: 'Explainable AI',
            duration: '35 min',
            description: 'SHAP, LIME, and interpretability'
          },
          {
            title: 'AutoML & Neural Architecture Search',
            duration: '40 min',
            description: 'Automating model design'
          },
          {
            title: 'Graph Neural Networks',
            duration: '35 min',
            description: 'Learning on graph-structured data'
          },
          {
            title: 'Quantum Machine Learning',
            duration: '30 min',
            description: 'Introduction to quantum ML'
          },
          {
            title: 'AI for Climate Change',
            duration: '25 min',
            description: 'Environmental applications'
          },
          {
            title: 'AI in Healthcare',
            duration: '30 min',
            description: 'Diagnosis and treatment'
          },
          {
            title: 'Responsible AI Certification',
            duration: '35 min',
            description: 'Building ethical AI systems'
          },
          {
            title: 'Research & Development',
            duration: '30 min',
            description: 'How to read and implement papers'
          },
          {
            title: 'Final Project: AI Solution',
            duration: '120 min',
            description: 'Build and present a complete AI application'
          }
        ]
      },
      {
        title: 'Final Exam & Certification',
        duration: '3 hours',
        lessons: [
          {
            title: 'Comprehensive Final Exam',
            duration: '150 min',
            description: 'Theory, coding, and design questions',
            exam: {
              questions: 120,
              timeLimit: 150,
              passingScore: 85
            }
          },
          {
            title: 'Project Presentation',
            duration: '30 min',
            description: 'Present your final AI project'
          }
        ]
      }
    ]
  }
  // Additional courses (ChatGPT, Claude, Gemini, Shopify, WordPress) would follow same detailed structure
];