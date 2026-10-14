// Courses & Exams catalog.
//
// DEMONSTRATION DATA: the 3 courses and 3 exams below are sample listings used
// to lay out the Courses & Exams page. They are not verified, approved or
// accredited programs. Replace them with confirmed details before publishing.
// Entries flagged `isPlaceholder: true` are labelled "Sample" in the UI.
//
// Shape:
//   id            unique slug
//   title         display title
//   description   short summary shown on the card
//   category      category label (filter chips are built from these)
//   duration      optional, free text (e.g. "5 days")
//   level         optional, courses only (e.g. "Beginner")
//   format        optional, exams only (e.g. "Multiple choice, computer-based")
//   relatedCourse optional, exams only: id of a related course
//   keywords      extra search terms
//   image         thumbnail URL

const IMAGES = {
  runway: 'https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/2319a00238e7c1fdbdf8471446c18c5a.webp',
  simulator: 'https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/3023cc0c7a9639b023f9d8521dc58ae8.png',
  groundHandling: 'https://images.unsplash.com/photo-1676186318068-df5df0b35130?auto=format&fit=crop&w=800&q=75',
  airport: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=75',
  consulting: 'https://images.unsplash.com/photo-1692081822085-6f6e154087cd?auto=format&fit=crop&w=800&q=75',
  operations: 'https://images.unsplash.com/photo-1686778278295-e119e84e2e59?auto=format&fit=crop&w=800&q=75',
};

export const courses = [
  {
    id: 'aviation-fundamentals',
    title: 'Aviation Fundamentals',
    description: 'Introduction to aviation operations, industry standards, and essential aviation knowledge.',
    category: 'Aviation Fundamentals',
    duration: '2 weeks',
    level: 'Beginner',
    keywords: ['basics', 'introduction', 'career', 'industry standards', 'operations'],
    image: IMAGES.runway,
    isPlaceholder: true,
  },
  {
    id: 'ground-handling-operations',
    title: 'Ground Handling Operations',
    description: 'Learn the fundamentals of aircraft ground operations, ramp safety, and turnaround procedures.',
    category: 'Ground Handling',
    duration: '5 days',
    level: 'Intermediate',
    keywords: ['ramp', 'turnaround', 'apron', 'loading', 'marshalling'],
    image: IMAGES.groundHandling,
    isPlaceholder: true,
  },
  {
    id: 'aviation-safety-management',
    title: 'Aviation Safety Management',
    description: 'Understand aviation safety principles, risk assessment, and safety management systems.',
    category: 'Safety Management',
    duration: '3 days',
    level: 'Advanced',
    keywords: ['sms', 'risk', 'hazard', 'compliance', 'safety culture'],
    image: IMAGES.consulting,
    isPlaceholder: true,
  },
];

export const exams = [
  {
    id: 'aviation-fundamentals-assessment',
    title: 'Aviation Fundamentals Assessment',
    description: 'A sample assessment covering basic aviation knowledge and industry principles.',
    category: 'Aviation Fundamentals',
    relatedCourse: 'aviation-fundamentals',
    duration: '60 minutes',
    format: 'Multiple choice, computer-based',
    keywords: ['basics', 'knowledge test', 'theory'],
    image: IMAGES.simulator,
    isPlaceholder: true,
  },
  {
    id: 'ground-handling-safety-exam',
    title: 'Ground Handling Safety Exam',
    description: 'A sample examination covering ramp safety, ground handling procedures, and operational safety.',
    category: 'Ground Handling',
    relatedCourse: 'ground-handling-operations',
    duration: '45 minutes',
    format: 'Written and practical',
    keywords: ['ramp', 'apron safety', 'procedures'],
    image: IMAGES.airport,
    isPlaceholder: true,
  },
  {
    id: 'aviation-safety-management-exam',
    title: 'Aviation Safety Management Exam',
    description: 'A sample assessment covering hazard identification, risk management, and aviation safety principles.',
    category: 'Safety Management',
    relatedCourse: 'aviation-safety-management',
    duration: '60 minutes',
    format: 'Scenario-based written',
    keywords: ['sms', 'risk', 'hazard', 'case study'],
    image: IMAGES.operations,
    isPlaceholder: true,
  },
];

// Filter chips only list categories that actually have entries.
export const TRAINING_CATEGORIES = [...new Set([...courses, ...exams].map((item) => item.category))];

export const getCourseById = (id) => courses.find((course) => course.id === id);
