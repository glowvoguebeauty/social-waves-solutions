'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Globe, 
  BookOpen, 
  TrendingUp,
  Star,
  Target,
  Heart,
  Calendar,
  MapPin,
  Quote
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats counter
      const stats = document.querySelectorAll('.stat-number')
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0')
        let current = 0
        const increment = target / 50
        const updateCounter = () => {
          if (current < target) {
            current += increment
            stat.textContent = Math.floor(current).toLocaleString()
            requestAnimationFrame(updateCounter)
          } else {
            stat.textContent = target.toLocaleString()
          }
        }
        
        ScrollTrigger.create({
          trigger: statsRef.current,
          start: 'top 80%',
          onEnter: () => updateCounter(),
          once: true
        })
      })
    }, statsRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { icon: Users, value: 50000, label: 'Active Students', suffix: '+' },
    { icon: BookOpen, value: 150, label: 'Premium Courses', suffix: '+' },
    { icon: Globe, value: 120, label: 'Countries', suffix: '+' },
    { icon: Award, value: 98, label: 'Success Rate', suffix: '%' }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Founded',
      description: 'Social Waves Solutions launched with a vision to democratize education'
    },
    {
      year: '2021',
      title: '1000 Students',
      description: 'Reached first milestone of 1000 enrolled students'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to serve students in 50+ countries'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Launched AI-powered personalized learning paths'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Awarded "Best EdTech Platform" by Education Weekly'
    }
  ]

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards in course quality and instruction'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by genuine passion for education and student success'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly evolving with the latest industry trends and technologies'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive ecosystem of learners and mentors'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transforming Lives Through
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Quality Education
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Our mission is to make premium education accessible to everyone, everywhere. 
            We believe in the power of knowledge to transform careers and lives.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold stat-number" data-target={stat.value}>
                  0
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2020 by a team of passionate educators and industry experts, 
                Social Waves Solutions emerged from a simple idea: quality education should 
                be accessible to anyone with the drive to learn.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started as a small platform with 5 courses has grown into a global 
                community of over 50,000 learners across 120+ countries. We've partnered 
                with industry leaders to bring you cutting-edge content that prepares you 
                for the future of work.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be recognized as one of the fastest-growing EdTech 
                platforms, but our mission remains unchanged: to empower individuals with 
                the skills they need to succeed.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <p className="text-xl italic mb-6">
                  "Education is not just about acquiring knowledge; it's about transforming 
                  potential into reality. Every course we create is designed with this philosophy 
                  in mind."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">James Donovan</p>
                    <p className="text-sm text-muted-foreground">CEO & Co-founder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 text-center"
            >
              <Target className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize education by providing world-class, accessible, and 
                affordable learning experiences that prepare individuals for the 
                challenges of tomorrow's workforce.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the world's most trusted learning platform, empowering 1 million 
                learners by 2026 to achieve their career goals and transform their lives 
                through education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-primary/50 to-secondary/50"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <div className="glass rounded-lg p-6">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center group hover:scale-105 transition-transform"
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Chief Learning Officer',
                bio: 'PhD in Educational Technology, 15+ years experience',
                image: 'https://randomuser.me/api/portraits/women/2.jpg'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Head of Engineering',
                bio: 'Former Lead Engineer at Google, AI specialist',
                image: 'https://randomuser.me/api/portraits/men/3.jpg'
              },
              {
                name: 'Emma Thompson',
                role: 'Director of Content',
                bio: 'Award-winning curriculum designer, published author',
                image: 'https://randomuser.me/api/portraits/women/3.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center bg-gradient-to-r from-primary/20 to-secondary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Learning Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of something extraordinary. Start your learning journey today and 
              transform your future.
            </p>
            <Button size="lg" className="group">
              Start Learning Now
              <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}