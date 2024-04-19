import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const experiencesData = [
  {
    title: 'Graduated MSIT from the University of Massachusetts Lowell',
    location: 'Lowell, MA',
    description:
      'I graduated after studying of Information Technology. I immediately found a job as a help desk specialist then transform to a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2018'
  },
  {
    title: 'Junior Software Developer',
    location: 'Waltham MA',
    description:
      'I worked as a front-end React, React Native developer. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2020'
  },
  {
    title: 'Software Developer (Consultant)',
    location: 'Remote',
    description:
      "I'm now a full-stack developer working as a consultant for a financfial company. My stack includes Angular, TypeScript, CSS, Java and Oracle SQL.",
    icon: React.createElement(FaReact),
    date: '2021 - 2022 '
  },
  {
    title: 'Senior Content Modeler Developer (Consultant)',
    location: 'Remote',
    description:
      "I'm a CMS developer working as a consultant on e-commerce company. My stack includes CMS, React, TypeScript. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2022 - 2023 '
  }
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg
  }
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Java',
  'PHP',
  'Angular',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'SQL',
  'MySql',
  'Redux',
  'GraphQL',
  'PostgreSQL',
  'Python',
  'CMS',
  'WordPress',
  'AWS Cloud',
  'Microsoft Azure',
  'CI/CD',
  'Docker',
  'Framer Motion'
] as const;
