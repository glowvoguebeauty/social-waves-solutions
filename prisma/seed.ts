import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create admin user
  const adminPassword = await hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@socialwaves.solutions' },
    update: {},
    create: {
      email: 'admin@socialwaves.solutions',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN',
      emailVerified: true,
    },
  })

  console.log('Created admin user:', admin.email)

  // Create sample courses
  const courses = [
    {
      title: 'Digital Marketing Mastery',
      slug: 'digital-marketing-mastery',
      description: 'Complete digital marketing course covering SEO, social media, email marketing, and analytics.',
      price: 299,
      discount: 199,
      category: 'MARKETING',
      level: 'BEGINNER',
      duration: 40,
      image: '/courses/marketing.jpg',
      instructor: 'Sarah Johnson',
    },
    // Add more courses...
  ]

  for (const courseData of courses) {
    const course = await prisma.course.upsert({
      where: { slug: courseData.slug },
      update: courseData,
      create: courseData,
    })
    console.log('Created course:', course.title)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })