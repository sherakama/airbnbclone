export const ImagesStyles: {
  [key: string]: string[]
} = {
  root: [
    'relative', 
    'block', 
    'overflow-hidden', 
    'w-full', 
    'rounded-xl',
    'aspect-w-1',
    'aspect-h-1',
  ],
  litem: [
    'h-full',
    'w-full',
    'absolute',
  ],
  active: [
    'left-0',
    'z-10',
    'transition-all',
    'duration-500',
  ],
  left: [
    'z-5',
    'left-[-100%]',
    'transition-all',
    'duration-500',
  ],
  right: [
    'z-5',
    'left-[100%]',
    'transition-all',
    'duration-500',
  ],
  neutral: [
    'z-1',
    'left-0',
  ],
}