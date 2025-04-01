import React from 'react';

export interface SkillProps {
  name: string;
  icon: string;
  proficiency: number;
}

export interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CareerProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface TimelineItemProps {
  title: string;
  company?: string;
  date: string;
  description: string;
  icon?: React.ReactNode;
}

export interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}