import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function data(...data: any[]) {

  console.log('sync with strapi')
  
  return { data: data }
  
}
