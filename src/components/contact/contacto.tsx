"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from '@/hooks/use-toast'
import { Zap, Send } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 bg-[#5daa0bbb] text-white flex items-center justify-center min-h-screen">
      <div className="container px-4 md:px-6 max-w-2xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="flex items-center justify-center">
                <Zap className="w-12 h-12 mr-4 animate-pulse text-yellow-300" />
                Get in Touch
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-green-100">
              Ready to make a bold move? Lets connect and create something extraordinary!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <Input 
              id="name" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="bg-white/20 border-none placeholder-green-100 text-white focus:bg-white/30 transition-all duration-300 text-center"
            />
            <Input 
              id="email" 
              placeholder="Your Email" 
              type="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="bg-white/20 border-none placeholder-green-100 text-white focus:bg-white/30 transition-all duration-300 text-center"
            />
            <Input 
              id="subject" 
              placeholder="Subject" 
              required 
              value={formData.subject}
              onChange={handleChange}
              className="bg-white/20 border-none placeholder-green-100 text-white focus:bg-white/30 transition-all duration-300 text-center"
            />
            <Textarea 
              id="message" 
              placeholder="Your message" 
              required 
              value={formData.message}
              onChange={handleChange}
              className="min-h-[150px] bg-white/20 border-none placeholder-green-100 text-white focus:bg-white/30 transition-all duration-300 text-center"
            />
            <Button 
              type="submit" 
              className="w-full bg-green-800 text-white hover:opacity-90 transition-all duration-300 text-lg font-bold py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 h-6 w-6" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}