import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const { userId } = auth()
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (user?.role !== 'ADMIN') {
      return new NextResponse('Forbidden', { status: 403 })
    }

    const courses = await prisma.course.findMany({
      include: {
        enrollments: {
          select: { id: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(courses)
  } catch (error) {
    console.error('Error fetching courses:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (user?.role !== 'ADMIN') {
      return new NextResponse('Forbidden', { status: 403 })
    }

    const body = await req.json()
    const { title, slug, description, price, discount, category, level, duration, image } = body

    const course = await prisma.course.create({
      data: {
        title,
        slug,
        description,
        price,
        discount,
        category,
        level,
        duration,
        image,
        instructor: user.name || 'Admin',
        students: 0,
        rating: 0
      }
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error('Error creating course:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}