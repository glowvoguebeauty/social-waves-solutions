'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  Award, 
  CreditCard, 
  Settings,
  Clock,
  Download,
  TrendingUp,
  Calendar
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export function DashboardContent({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState('courses')

  const enrolledCourses = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      progress: 65,
      lastWatched: '2 hours ago',
      nextLesson: 'SEO Advanced Techniques',
      thumbnail: '/courses/marketing-thumb.jpg'
    },
    {
      id: 2,
      title: 'Artificial Intelligence Fundamentals',
      progress: 30,
      lastWatched: 'Yesterday',
      nextLesson: 'Neural Networks Explained',
      thumbnail: '/courses/ai-thumb.jpg'
    }
  ]

  const certificates = [
    {
      id: 'CERT-2024-001',
      course: 'Digital Marketing Mastery',
      issuedAt: '2024-01-15',
      downloadUrl: '/certificates/marketing.pdf'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container px-4 py-8 mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback>{user?.firstName?.[0]}{user?.lastName?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Welcome back, {user?.firstName}!</h1>
                <p className="text-muted-foreground">Continue your learning journey</p>
              </div>
            </div>
            <Badge variant="outline" className="px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              Learning Streak: 7 days
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
              <BookOpen className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">+0 this month</p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5</div>
              <p className="text-xs text-muted-foreground">+6 this week</p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">+1 earned</p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47.5%</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="courses" className="space-y-4">
          <TabsList className="glass w-full justify-start">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {enrolledCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Last watched: {course.lastWatched}
                        </span>
                        <span>Next: {course.nextLesson}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="self-start">
                    Continue Learning
                  </Button>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            {certificates.map((cert) => (
              <Card key={cert.id} className="glass">
                <CardHeader>
                  <CardTitle>{cert.course}</CardTitle>
                  <CardDescription>Certificate ID: {cert.id}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Issued: {new Date(cert.issuedAt).toLocaleDateString()}</span>
                  </div>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View all your transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Payment history items would go here */}
                  <p className="text-muted-foreground text-center py-8">No payment history yet</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}