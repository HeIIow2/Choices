/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Choice {
  id?: number;
  classList?: string[];
  customProperties?: Record<string, any>;
  disabled?: boolean;
  active?: boolean;
  elementId?: number;
  groupId?: number;
  keyCode?: number;
  label: string;
  placeholder?: boolean;
  selected?: boolean;
  value: any;
  score?: number;
  choices?: Choice[];
}
