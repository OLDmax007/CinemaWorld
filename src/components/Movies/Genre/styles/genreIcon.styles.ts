import {cva} from "class-variance-authority";

export const genreIconStyles = cva(
    'genreIcon', {
        variants: {
            variant: {
                default: ['text-rgb(248, 250, 252)'],
                filter: ['text-rgb(225, 29, 72)']
            },
            size: {
                small: ['w-30 h-20'],
                medium: ['w-24 h-50'],
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'small'
        }
    },
)