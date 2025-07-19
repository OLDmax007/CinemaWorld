import {cva} from "class-variance-authority";

export const genreNameStyles = cva(
    'genreIcon', {
        variants: {
            variant: {
                default: ['text-rgb(248, 250, 252)'],
                filter: ['text-rgb(225, 29, 72)']
            },
            size: {
                small: ['text-base'],
                medium: ['text-lg'],
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium'
        }
    },
)