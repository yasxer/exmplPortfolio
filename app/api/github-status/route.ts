import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace 'yourusername' with your actual GitHub username
    const username = 'yourusername';
    
    // Fetch recent events from GitHub API
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Optional: Add GitHub token for higher rate limits
          // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const events = await response.json();
    
    // Find the most recent push event
    const pushEvent = events.find((event: { type: string; created_at: string }) => event.type === 'PushEvent');
    
    let lastCommit = 'No recent activity';
    
    if (pushEvent) {
      const date = new Date(pushEvent.created_at);
      const now = new Date();
      const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
      
      if (diffInHours < 1) {
        lastCommit = 'Just now';
      } else if (diffInHours < 24) {
        lastCommit = `${diffInHours}h ago`;
      } else {
        const diffInDays = Math.floor(diffInHours / 24);
        lastCommit = `${diffInDays}d ago`;
      }
    }

    return NextResponse.json({
      lastCommit,
      isOnline: true,
      username,
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    
    return NextResponse.json(
      {
        lastCommit: 'Unavailable',
        isOnline: false,
      },
      { status: 200 } // Return 200 to avoid client errors
    );
  }
}
