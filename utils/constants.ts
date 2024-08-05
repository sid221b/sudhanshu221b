import { CompanyRecord, MiniProjectRecord, SkillsRecord } from './types'

export const miniProjects: MiniProjectRecord[] = [
  {
    route: '/snippets/gradient-bg',
    title: 'Gradient Background',
    id: 1,
    background: 'linear-gradient(45deg, #292e73, #694411)',
  },
  {
    route: '/snippets/gradient-text',
    title: 'Gradient Text',
    id: 1,
    background: 'linear-gradient(75deg, #91007b, #1f4236)',
  },
]

export const skillsData: SkillsRecord[] = [
  {
    id: 1,
    name: 'JavaScript',
    stars: 4.5,
    icon: '/assets/javascript.webp',
  },
  {
    id: 2,
    name: 'React',
    stars: 4.5,
    icon: '/assets/react.webp',
  },
  {
    id: 3,
    name: 'Redux',
    stars: 4.5,
    icon: '/assets/redux.webp',
  },
  {
    id: 4,
    name: 'HTML',
    stars: 4.5,
    icon: '/assets/html.webp',
  },
  {
    id: 5,
    name: 'CSS',
    stars: 4.5,
    icon: '/assets/css.webp',
  },
  {
    id: 6,
    name: 'TypeScript',
    stars: 3,
    icon: '/assets/typescript.webp',
  },
  {
    id: 7,
    name: 'Node',
    stars: 3,
    icon: '/assets/node.webp',
  },
  {
    id: 8,
    name: 'Tailwind',
    stars: 3.5,
    icon: '/assets/tailwind.webp',
  },
  {
    id: 9,
    name: 'SCSS/SASS',
    stars: 4,
    icon: '/assets/sass.webp',
  },
  {
    id: 10,
    name: 'styled-component',
    stars: 4.5,
    icon: '/assets/styled.webp',
  },
  {
    id: 11,
    name: 'React Native',
    stars: 4,
    icon: '/assets/reactnative.webp',
  },
  {
    id: 12,
    name: 'ReAnimated',
    stars: 4,
    icon: '/assets/reanimated.webp',
  },
  {
    id: 13,
    name: 'Git',
    stars: 4,
    icon: '/assets/git.webp',
  },
  {
    id: 14,
    name: 'GitHub',
    stars: 3.5,
    icon: '/assets/github.webp',
  },
  {
    id: 15,
    name: 'NPM',
    stars: 3.5,
    icon: '/assets/npm.webp',
  },
  {
    id: 16,
    name: 'VS Code',
    stars: 4,
    icon: '/assets/vscode.webp',
  },
]

export const companiesData: CompanyRecord[] = [
  {
    id: 1,
    name: 'Housing.com',
    icon: '/assets/companies/housing.webp',
    startDate: 'June, 2021',
    endDate: 'Present',
    location: 'Gurgaon, Haryana',
    isRemote: true,
    skills: ['React', 'Redux', 'React Native', 'emotion-ui', 'CSS'],
    position: 'Senior Software Development Engineer',
    achievement:
      'Received 2 Spot Light awards for Ownership and Excellence. Also got promoted to Senior position.',
    workAndRes: [
      'Integrated Razorpay Custom UI sdk in React Native app with custom housing UI for credit card and wallet method.',
      'Implemented pre commit and pre push hooks for validating test cases and linting rules also added cashing in these so it would run 70-90% faster',
      'Implemented complex user interactive referral animation and Instagram story like feature in RN app.',
      'Implemented Github Actions on raising PR with main branch to run test cases and create test coverage.',
      'Implemented many large production feature from scratch in React web app and React Native app.',
    ],
  },
  {
    id: 2,
    name: 'Jellyfish Technologies',
    icon: '/assets/companies/jellyfish.webp',
    startDate: 'Oct, 2020',
    endDate: 'June, 2021',
    location: 'Noida, UP',
    isRemote: true,
    skills: ['React', 'Redux', 'CSS', 'ant-design'],
    position: 'Software Developer',
    workAndRes: [
      'Worked on legacy codebase optimization, improved web app load time from ~3sec to ~500ms.',
      "Upgraded app's React 15 to 17 and resolving coding issues and optimizations.",
      'Collaborated with cross-functional and international teams to ensure seamless integration and implementation of new features',
    ],
  },
  {
    id: 3,
    name: 'Montaigne Smart Business Solutions',
    icon: '/assets/companies/montaigne.webp',
    startDate: 'Nov, 2019',
    endDate: 'June, 2020',
    location: 'Hyderabad, Telangana',
    isRemote: false,
    skills: ['React', 'Redux', 'Gatsby', 'SASS/SCSS', 'styled-component'],
    achievement: 'Received `Employee Of The Month` Award.',
    position: 'Associate Software Developer',
    workAndRes: [
      "Learned React and it's eco system and Created Employee management portal from scratch.",
      'Transform design into React component and implement new features and bug fixes in Dashboard.',
      'Worked on Gatsby blog site which is connected with wordpress CMS.',
    ],
  },
]
