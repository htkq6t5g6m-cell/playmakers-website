// Coaches Data
export const coaches = [
  {
    id: 1,
    name: 'Coach Jack - Founder',
    role: 'Advanced Talent Coach | Ex-Everton FC',
    bio: 'A highly knowledgeable and experienced coach with a strong academy playing background at Accrington Stanley, Stoke City, and Manchester City. As an ex–Everton FC Advanced Talent Coach, he has developed a reputation for his ability to analyse and adjust technique, identify a player\'s specific needs, and design sessions that deliver clear, measurable improvement. Dedicated, supportive, and technically driven, he brings professional insight and a passion for helping players unlock their full potential.',
    image: '/images/coaches/jack.jpg',
    alt: 'Jack - Advanced Talent Coach'
  },
  {
    id: 2,
    name: 'Coach Henry',
    role: 'Defender | Chester FC Professional',
    bio: 'A technically strong and highly disciplined defender, now a professional at Chester FC, brings over a decade of elite academy experience to 1-to-1 coaching. Having spent 10 years developing at Everton\'s Academy, he has been immersed in top-level training environments. Known for his game intelligence, calmness in possession, and defensive leadership, he translates his professional experience into tailored, engaging, and development-focused coaching sessions.',
    image: '/images/coaches/henry.jpg',
    alt: 'Henry - Defender'
  },
  {
    id: 3,
    name: 'Coach Ellie',
    role: 'Women\'s Professional | Everton FC',
    bio: 'A talented and driven women\'s professional footballer at Everton, known for her technical quality, athleticism, and consistency at the highest level. Having developed through the prestigious Liverpool Academy, she brings a calm, supportive, and highly engaging approach to coaching. Her sessions focus on improving technique, confidence, and decision-making, while showing players what it takes to reach the elite level.',
    image: '/images/coaches/ellie.jpg',
    alt: 'Ellie - Women\'s Professional'
  },
  {
    id: 4,
    name: 'Coach Harry',
    role: 'Right Back | Chester FC Scholar',
    bio: 'A dynamic and attack-minded right back, currently a scholar at Chester FC, with first-team appearances already to his name. He brings a decade of top-level youth experience from 10 years in Everton\'s Academy. Known for his high energy up and down the flank, reliable 1v1 defending, and composure in possession, he delivers high-quality 1-to-1 coaching shaped by both academy and senior football experience.',
    image: '/images/coaches/harry.jpg',
    alt: 'Harry - Right Back'
  },
  {
    id: 5,
    name: 'Coach Isaac',
    role: 'Striker | Chester FC Scholar',
    bio: 'An explosive and clinical striker currently a scholar at Chester FC, known for his pace, sharp finishing, and natural attacking instinct. Having spent most of his childhood developing at Warrington Rylands FC, he is loved by younger players for his positivity, energy, and joyful personality. His sessions combine dynamic attacking drills with confidence-building challenges, helping players improve their speed, movement, and finishing.',
    image: '/images/coaches/isaac.jpg',
    alt: 'Isaac - Striker'
  },
  {
    id: 6,
    name: 'Coach Jake',
    role: 'Central Midfielder | Chester FC Scholar',
    bio: 'A composed and hard-working central midfielder currently a scholar at Chester FC, recognised for his leadership, intelligence on the ball, and ability to control the tempo of the game. Growing up and developing at Warrington Rylands FC, he is a natural captain who brings calmness, clarity, and encouragement to every session. His 1-to-1 coaching focuses on ball mastery, decision-making, awareness, and the fundamentals of intelligent midfield play.',
    image: '/images/coaches/jake.jpg',
    alt: 'Jake - Central Midfielder'
  },
  {
    id: 7,
    name: 'Coach Kian',
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
    description: 'We are able to come out and deliver training sessions for your team. This is great to mix up the team\'s training schedule, or if you want to level up the training for the kids.',
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
    src: 'videos/groupcoach.mov',
    poster: '/images/page-images/group.jpg',
    title: 'Group Session Highlights',
    description: 'High-energy group training with professional coaches'
  },
  // Only 1-to-1 and Group Session videos retained per request
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
    name: 'Arthur Williams',
    label: 'Everton U10 (Melissa)',
    text: "The coaches at Playmakers are fantastic, very engaging and positive. They always use a balanced approach of support, encouragement, and set realistic expectations to push the kids to ensure they reach their full potential. Arthur has never had a 1-1 session prior to starting with Playmakers but has thoroughly enjoyed the sessions up to now — working on his left foot is definitely showing progress! The group sessions are fab! Different ages and abilities all mixed to challenge one another. Arth has especially enjoyed these sessions! Overall I definitely recommend Playmakers!! If you want your kid to develop and build their confidence! ❤️⚽️",
    avatar: null
  },
  {
    id: 2,
    name: 'Charlie',
    label: 'U7 CQ Nomads (Josh)',
    text: "My son started with Playmakers 6 months ago when he was only 5 attending 2 sessions a week with a number of different coaches who have all been fantastic!! Henry is his main 1-2-1 coach and we owe him so much for the amount of knowledge he passed on! Charlie’s footwork and confidence has excelled massively thanks to Playmakers and the sessions they provide! The kids are more than just a number — the coaches really care and put in so much effort to improve the players! We are so unbelievably grateful for everything they have done for Charlie and the player they have made him! We can’t wait to see what another 6 months brings and the opportunities Playmakers create with their hard work and dedication to the kids!",
    avatar: null
  },
  {
    id: 3,
    name: 'Paddy',
    label: 'Flint U13 (Felicity)',
    text: "Hey Jack — it’s Paddy's mum. I just wanted to say a big thank you to Coach Isaac for the 121s and ball mastery sessions so far. We have seen a massive difference since he has gone back to preseason training with Flint and we have had a lot of parent comments too about his performance. He is loving it and he is improving week on week. Thanks — Felicity",
    avatar: null
  },
  {
    id: 4,
    name: 'Coleman',
    label: 'Vauxhall U15',
    text: "Sessions are going really well. Owen’s sessions are quick and dynamic and he gets into them. Jake is very technical and demanding. Isaac is very charismatic in pushing them and getting a lot out of them.",
    avatar: null
  },
  {
    id: 5,
    name: 'Reagan',
    label: 'U10 Everton talent programme',
    text: "Since joining Playmakers Reagan’s game has changed completely — he’s much more confident when driving with the ball and it’s great to see him using different skills in his games. Jack’s attention to detail is brilliant and he is a great coach and mentor for Reagan in his development. Each session is really tailored to improve Reagan’s game. All the other coaches are brilliant and really get the best out of Reagan and he enjoys the banter with the coaches.",
    avatar: null
  },
  {
    id: 6,
    name: 'William',
    label: 'U12 Borras Park Albion (Katy)',
    text: "Hi — William really enjoyed it yesterday. He finds the sessions really helpful as each one is focussed on something different and a particular skill that he wants to work on, e.g. yesterday was improving his left foot. He finds Ellie really approachable and the sessions are pitched at a good level — he feels challenged with things he can work on at home between the sessions.",
    avatar: null
  },
  {
    id: 7,
    name: 'Tommy',
    label: 'U8 Wrexham Trialist',
    text: "Tommy really enjoyed it and is looking forward to Tuesday. He tried hard to use some of the things she was talking about at his Wrexham training on Wednesday (outside of foot and left foot). Ellie was lovely, and we were really pleased with the session — nothing to do differently, just keep working on his speed of decisions, touch and go etc.",
    avatar: null
  },
  {
    id: 8,
    name: 'Alex',
    label: 'U12',
    text: "Hi Jack — he enjoyed it. Henry worked him hard (even with sore legs from box jumps last night) and he balanced the intensity to take into account he was tired. Alex really looks up to him so they have a good rapport — the right mix of fun and hard work and competitiveness which Alex needs at the moment.",
    avatar: null
  },
  {
    id: 9,
    name: 'Ronnie',
    label: '',
    text: "I’ve been really impressed with Jake — very knowledgeable and confident and a really nice lad, clear and vocal with his instructions. Ron loves the sessions, couldn’t speak highly enough of him to be honest.",
    avatar: null
  },
  {
    id: 10,
    name: 'Saxon',
    label: 'U11 Witton Albion',
    text: "It was great! All positive for us, Harry is doing an amazing job on Saxon. He's absolutely loving it — he goes in with a smile on his face and comes away with a smile on his face. We're mega happy.",
    avatar: null
  },
  {
    id: 11,
    name: 'Elliott Chappell',
    label: '',
    text: "Hi Jack — Elliott really enjoyed it thanks. Jake was brilliant with him, very positive and encouraging. Elliott responds well to him and had a smile on his face the whole time. Jake asked what Elliott would like to work on at the start so that was great.",
    avatar: null
  },
  {
    id: 12,
    name: 'Dylan',
    label: '(Isaac coach)',
    text: "I just wanted to message after Dylan having his 1-2-1 with Isaac — instantly impressed with Isaac and how quickly he made Dylan feel relaxed. Normally Dylan gets very anxious going to new things but we could see from the start how much he was enjoying it and he even said when we finished how much he loved it!",
    avatar: null
  },
  {
    id: 13,
    name: 'Rory',
    label: '',
    text: "Rory is loving his sessions with Jake — Jake’s a breath of fresh air. He’s loud, outgoing, confident, encouraging, friendly and positive. All of which is just perfect for Rory in building his confidence and fitness.",
    avatar: null
  },
  {
    id: 14,
    name: 'Romeo',
    label: 'Chester U11',
    text: "Playmakers Football Academy is an excellent place for kids to learn, grow, and enjoy football. The atmosphere is always positive and encouraging, making it an environment where players can truly progress and improve. A special mention has to go to Coach Jack. His patience is truly impressive — he works brilliantly with kids of all different abilities, adapting his coaching style so that every child feels included and supported. The combination of Jack’s thoughtful coaching and the welcoming, enjoyable atmosphere at Playmakers creates the perfect place for young players to develop their game while having fun. Highly recommended.",
    avatar: null
  }
];
