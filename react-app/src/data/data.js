// Coaches Data
export const coaches = [
  {
    id: 1,
    name: 'Jack',
    role: 'Advanced Talent Coach | Ex-Everton FC',
    bio: 'A highly knowledgeable and experienced coach with a strong academy playing background at Accrington Stanley, Stoke City, and Manchester City. As an ex–Everton FC Advanced Talent Coach, he has developed a reputation for his ability to analyse and adjust technique, identify a player\'s specific needs, and design sessions that deliver clear, measurable improvement. Dedicated, supportive, and technically driven, he brings professional insight and a passion for helping players unlock their full potential.',
    image: '/images/coaches/jack.jpg',
    alt: 'Jack - Advanced Talent Coach'
  },
  {
    id: 2,
    name: 'Henry',
    role: 'Defender | Chester FC Professional',
    bio: 'A technically strong and highly disciplined defender, now a professional at Chester FC, brings over a decade of elite academy experience to 1-to-1 coaching. Having spent 10 years developing at Everton\'s Academy, he has been immersed in top-level training environments. Known for his game intelligence, calmness in possession, and defensive leadership, he translates his professional experience into tailored, engaging, and development-focused coaching sessions.',
    image: '/images/coaches/henry.jpg',
    alt: 'Henry - Defender'
  },
  {
    id: 3,
    name: 'Ellie',
    role: 'Women\'s Professional | Everton FC',
    bio: 'A talented and driven women\'s professional footballer at Everton, known for her technical quality, athleticism, and consistency at the highest level. Having developed through the prestigious Liverpool Academy, she brings a calm, supportive, and highly engaging approach to coaching. Her sessions focus on improving technique, confidence, and decision-making, while showing players what it takes to reach the elite level.',
    image: '/images/coaches/ellie.jpg',
    alt: 'Ellie - Women\'s Professional'
  },
  {
    id: 4,
    name: 'Harry',
    role: 'Right Back | Chester FC Scholar',
    bio: 'A dynamic and attack-minded right back, currently a scholar at Chester FC, with first-team appearances already to his name. He brings a decade of top-level youth experience from 10 years in Everton\'s Academy. Known for his high energy up and down the flank, reliable 1v1 defending, and composure in possession, he delivers high-quality 1-to-1 coaching shaped by both academy and senior football experience.',
    image: '/images/coaches/harry.jpg',
    alt: 'Harry - Right Back'
  },
  {
    id: 5,
    name: 'Isaac',
    role: 'Striker | Chester FC Scholar',
    bio: 'An explosive and clinical striker currently a scholar at Chester FC, known for his pace, sharp finishing, and natural attacking instinct. Having spent most of his childhood developing at Warrington Rylands FC, he is loved by younger players for his positivity, energy, and joyful personality. His sessions combine dynamic attacking drills with confidence-building challenges, helping players improve their speed, movement, and finishing.',
    image: '/images/coaches/isaac.jpg',
    alt: 'Isaac - Striker'
  },
  {
    id: 6,
    name: 'Jake',
    role: 'Central Midfielder | Chester FC Scholar',
    bio: 'A composed and hard-working central midfielder currently a scholar at Chester FC, recognised for his leadership, intelligence on the ball, and ability to control the tempo of the game. Growing up and developing at Warrington Rylands FC, he is a natural captain who brings calmness, clarity, and encouragement to every session. His 1-to-1 coaching focuses on ball mastery, decision-making, awareness, and the fundamentals of intelligent midfield play.',
    image: '/images/coaches/jake.jpg',
    alt: 'Jake - Central Midfielder'
  },
  {
    id: 7,
    name: 'Kian',
    role: 'Right Back | Chester FC Scholar',
    bio: 'A dependable and intelligent right back, currently a scholar at Chester FC, known for his defensive sharpness and confidence in possession. His journey through two elite youth environments — Manchester United and Wrexham — has shaped his technical quality, discipline, and understanding of high-level football. He specialises in developing defensive fundamentals, 1v1 ability, awareness, and effective attacking play from wide areas.',
    image: '/images/coaches/kian.jpg',
    alt: 'Kian - Right Back'
  }
];

// Features/Benefits Data
export const features = [
  {
    id: 1,
    image: '/images/features/footballers.jpg',
    title: 'Current Footballers',
    description: 'All sessions led by active or former professional players.'
  },
  {
    id: 2,
    image: '/images/features/academy.jpg',
    title: 'Elite Academy Experience',
    description: 'Methods inspired by top UK academies.'
  },
  {
    id: 3,
    image: '/images/features/personalised.jpg',
    title: 'Personalised Coaching',
    description: 'Individual feedback tailored to every player.'
  },
  {
    id: 4,
    image: '/images/features/standards.jpg',
    title: 'Professional Standards',
    description: 'High-energy sessions with clear technical outcomes.'
  }
];

// Sessions/Services Data
export const sessions = [
  {
    id: 1,
    title: '1-to-1 Coaching',
    description: 'Personalised technical and tactical development sessions tailored to individual strengths and areas for improvement.',
    schedule: null
  },
  {
    id: 2,
    title: 'Coached Matches',
    description: 'Are you looking for higher level matches for your son or daughter or just want extra game time?',
    schedule: {
      heading: 'Match Schedule',
      times: [
        { day: 'Tuesdays 6-7pm', details: 'Age 6-8' },
        { day: 'Wednesdays 6-7pm', details: 'Age 10-12' },
        { day: 'Thursdays 6-7pm', details: 'Age 10-12' }
      ]
    }
  },
  {
    id: 3,
    title: 'Group Sessions',
    description: 'An energetic group session focusing on ball mastery, ball manipulation and improving 1v1 battles.',
    schedule: {
      heading: 'Schedule',
      times: [
        { day: 'Tuesdays 5-6pm', details: 'High level • Age 8-9' },
        { day: 'Wednesdays 6:30-7:30pm', details: 'Mid-high level • Ages 9-13' },
        { day: 'Fridays 6-7pm', details: 'Mid-high level • Ages 6-9' },
        { day: 'Fridays 7-8pm', details: 'High level • Ages 9-13' }
      ]
    }
  },
  {
    id: 4,
    title: 'Team Training',
    description: 'Are you a grassroots club or academy looking to level up your training for your kids?',
    schedule: {
      heading: 'Our Services',
      times: [
        { details: '• An experienced Playmakers coach dedicated to your team' },
        { details: '• One-off sessions to mix up the training schedule' },
        { details: '• Block booked training sessions to take the pressure off of the manager and provide kids with great training' }
      ]
    }
  },
  {
    id: 5,
    title: 'Scouting Reports',
    description: 'Detailed player reviews and development plans to track progress and identify key areas for growth.',
    schedule: null
  }
];

// Video Gallery Data
export const videos = [
  {
    id: 1,
    type: 'local',
    src: 'videos/121.mp4',
    poster: '/images/page-images/121.jpg',
    title: '1-to-1 Training Session',
    description: 'Elite coaching focusing on ball mastery and technical development'
  },
  {
    id: 2,
    type: 'local',
    src: 'videos/group.mov',
    poster: '/images/page-images/group.jpg',
    title: 'Group Session Highlights',
    description: 'High-energy group training with professional coaches'
  },
  {
    id: 3,
    type: 'local',
    src: 'videos/coached.mov',
    poster: '/images/page-images/coached.jpg',
    title: 'Coached Match Action',
    description: 'Real match scenarios with live feedback and analysis'
  },
  {
    id: 4,
    type: 'local',
    src: 'videos/mental.mp4',
    poster: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=450&fit=crop',
    title: 'Mental Development',
    description: 'Building confidence, resilience and mental strength'
  },
  {
    id: 5,
    type: 'local',
    src: 'videos/skills.mp4',
    poster: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=450&fit=crop',
    title: 'Skills Development',
    description: 'Advanced technical drills and ball manipulation'
  },
  {
    id: 6,
    type: 'local',
    src: 'videos/shooting.mp4',
    poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop',
    title: 'Shooting',
    description: 'Professional shooting techniques and drills'
  }
];

// Instagram Posts Data
export const instagramPosts = [
  {
    id: 1,
    // Keeping only the centre reel as requested
    image: '/images/instagram/post2.jpg',
    alt: 'Latest reel from @playmakers_football',
    caption: 'Latest post from @playmakers_football',
    url: 'https://www.instagram.com/playmakers_football/reel/DQG8yOzjIca/'
  }
];

// Club Logos Data
export const clubs = [
  'Everton',
  'Man City',
  'Man Utd',
  'Liverpool',
  'Chester FC',
  'Wrexham',
  'Accrington Stanley'
];

// Contact Information
export const contactInfo = {
  phone: '07482768570',
  phoneFormatted: '07482 768570',
  whatsapp: 'https://wa.me/447727105747',
  instagram: 'https://instagram.com/playmakers_football',
  instagramHandle: '@playmakers_football',
  facebook: 'https://m.facebook.com/playmakerscheshirefootballcoaching/?utm_source=ig&utm_medium=social&utm_content=link_in_bio'
};

// Testimonials Data (parents) - easily editable
export const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    label: 'Parent of U9 Player',
    text: 'My son has grown in confidence and technique week after week. The coaching is detailed yet really enjoyable. He looks forward to every session.',
    avatar: null // placeholder; swap with image path if desired
  },
  {
    id: 2,
    name: 'David R.',
    label: 'Parent of U10 Player',
    text: 'Professional, encouraging and tailored. The coaches understand exactly what each player needs and explain things clearly. Huge improvement in decision-making.',
    avatar: null
  },
  {
    id: 3,
    name: 'Emma T.',
    label: 'Parent of U12 Player',
    text: 'The sessions are high quality and structured like academy training. My daughter comes away motivated with clear things to work on at home.',
    avatar: null
  },
  {
    id: 4,
    name: 'James P.',
    label: 'Parent of U8 Player',
    text: 'Outstanding technical focus delivered in a really positive environment. We have seen noticeable improvement in ball control and awareness.',
    avatar: null
  },
  {
    id: 5,
    name: 'Laura M.',
    label: 'Parent of U11 Player',
    text: 'The personalised feedback and genuine care shown by the coaches sets this apart. My son is more composed and purposeful in matches now.',
    avatar: null
  }
];
