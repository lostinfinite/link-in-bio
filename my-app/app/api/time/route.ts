import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const time = new Date().toLocaleTimeString('en-US', { 
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    
    return NextResponse.json({ time })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch time' }, { status: 500 })
  }
}

