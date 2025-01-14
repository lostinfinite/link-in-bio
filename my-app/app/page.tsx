'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Youtube } from 'lucide-react'

export default function LinkInBio() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('/api/time')
        if (!response.ok) throw new Error('Failed to fetch time')
        const data = await response.json()
        setTime(data.time)
      } catch (error) {
        console.error('Error fetching time:', error)
        setTime(null)
      }
    }

    fetchTime()
    const interval = setInterval(fetchTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen py-12 px-4 bg-[#1d1d1d]">
      <Card className="max-w-md mx-auto bg-[#252525] no-border custom-shadow">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-6 text-white">
            <Avatar className="w-32 h-32 custom-border border-4">
              <AvatarImage 
                src="https://cdn.discordapp.com/avatars/749493846618013706/f84aabd20752d5803cc6436f013eac41.webp" 
                alt="ContentLTD"
              />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold">ContentLTD</h1>
              {time && (
                <p className="text-sm text-gray-300">
                  EST (UTC -5) • {time}
                </p>
              )}
            </div>

            <div className="w-full space-y-6">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-semibold">Why hello there!</h2>
                <p className="text-gray-300">
                  Hello there, I am ContentLTD (AKA Content AKA ContentDeleted). 
                  You can call me content. I am a website designer and ER;LC server owner.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Button 
                  className="w-full bg-[#333333] hover:bg-[#444444] text-white"
                  asChild
                >
                  <a href="https://contentltd.net" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Visit contentltd.net
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button 
                  className="w-full bg-[#333333] hover:bg-[#444444] text-white"
                  asChild
                >
                  <a href="https://youtube.com/@contentltd_rblx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    YouTube Channel
                    <Youtube className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="text-xs text-center text-gray-400 animate-pulse">
                Stay Tuned. Something&apos;s Happening...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

