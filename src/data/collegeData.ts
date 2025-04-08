
export type CategoryType = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tips: string[];
  resources: {
    title: string;
    url: string;
  }[];
};

export const collegeCategories: CategoryType[] = [
  {
    id: "academics",
    title: "Academics",
    description: "Strategies for academic success in college",
    icon: "book-open",
    color: "college-blue",
    tips: [
      "Create a study schedule and stick to it",
      "Take advantage of professor office hours",
      "Form study groups with classmates",
      "Use active learning techniques like summarizing and teaching concepts",
      "Break large assignments into smaller tasks"
    ],
    resources: [
      {
        title: "Cornell Note-Taking System",
        url: "https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/"
      },
      {
        title: "Pomodoro Technique for Studying",
        url: "https://todoist.com/productivity-methods/pomodoro-technique"
      }
    ]
  },
  {
    id: "health",
    title: "Health & Wellness",
    description: "Taking care of your physical and mental health",
    icon: "heart-pulse",
    color: "college-red",
    tips: [
      "Make time for regular physical activity",
      "Prioritize sleep with a consistent schedule",
      "Learn stress management techniques",
      "Don't skip meals - your brain needs fuel",
      "Know when to seek professional support"
    ],
    resources: [
      {
        title: "Student Mental Health Resources",
        url: "https://www.activeminds.org/resources/"
      },
      {
        title: "Exercise Guidelines for College Students",
        url: "https://www.cdc.gov/physicalactivity/basics/adults/index.htm"
      }
    ]
  },
  {
    id: "social",
    title: "Social Life",
    description: "Building meaningful connections and friendships",
    icon: "users",
    color: "college-purple",
    tips: [
      "Join clubs or organizations aligned with your interests",
      "Attend campus events and activities",
      "Be open to meeting people from different backgrounds",
      "Schedule regular time with friends",
      "Balance social activities with academic responsibilities"
    ],
    resources: [
      {
        title: "Making Friends in College Tips",
        url: "https://www.bestcolleges.com/blog/how-to-make-friends-in-college/"
      },
      {
        title: "Finding Campus Organizations",
        url: "https://www.collegeboard.org/membership"
      }
    ]
  },
  {
    id: "finance",
    title: "Financial Management",
    description: "Handling money wisely during your college years",
    icon: "wallet",
    color: "college-green",
    tips: [
      "Create and follow a monthly budget",
      "Apply for scholarships throughout your college career",
      "Use student discounts whenever possible",
      "Consider part-time work that doesn't impact academics",
      "Avoid unnecessary credit card debt"
    ],
    resources: [
      {
        title: "Student Financial Planning Guide",
        url: "https://studentaid.gov/resources/prepare-for-college/students/budgeting"
      },
      {
        title: "Scholarship Search Tools",
        url: "https://www.fastweb.com/"
      }
    ]
  },
  {
    id: "career",
    title: "Career Preparation",
    description: "Building skills and experience for your future career",
    icon: "briefcase",
    color: "college-orange",
    tips: [
      "Visit your university career center early",
      "Complete internships in your field of interest",
      "Build a professional network through events and LinkedIn",
      "Develop transferable skills through extracurriculars",
      "Create a polished resume and online presence"
    ],
    resources: [
      {
        title: "Internship Search Platforms",
        url: "https://www.internships.com/"
      },
      {
        title: "Resume Building Guide for Students",
        url: "https://www.indeed.com/career-advice/resumes-cover-letters/college-student-resume"
      }
    ]
  },
  {
    id: "government",
    title: "Government Jobs",
    description: "Preparing for government exams while in college",
    icon: "landmark",
    color: "college-teal",
    tips: [
      "Research specific government exams relevant to your field early",
      "Create a balanced study schedule that complements your coursework",
      "Form study groups with peers preparing for similar exams",
      "Take advantage of mock tests and previous year papers",
      "Develop time management skills to handle both college and exam prep"
    ],
    resources: [
      {
        title: "Government Job Exam Calendars",
        url: "https://www.usajobs.gov/Search/Results?hp=student"
      },
      {
        title: "Civil Service Exam Preparation",
        url: "https://www.govloop.com/community/blog/5-ways-prepare-civil-service-exam/"
      }
    ]
  }
];

export const quotes = [
  {
    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle"
  },
  {
    text: "Your education is a dress rehearsal for a life that is yours to lead.",
    author: "Nora Ephron"
  },
  {
    text: "College is the first step on the road to success, not the last.",
    author: "Anonymous"
  }
];
