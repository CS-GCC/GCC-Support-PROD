export interface ITab {
  id: number;
  title: string;
}

export interface QuestionStats {
  Question: number;
  Value: number;
}

export interface RegionStats {
  Region: string;
  Value: number;
}

export interface LanguageStats {
  Language: string;
  Value: number;
}

export interface WeeklyStats {
  Week: number;
  Value: number;
}

export interface GradYearStats {
  GradYear: number;
  Value: number;
}

export interface UniversityStats {
  University: string;
  Region: string;
  Value: number;
}