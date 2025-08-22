import {cva} from "class-variance-authority";

export const genreIconStyles = cva(
    '', {
        variants: {
            size: {
                small: ['w-5 h-5'],
                medium: ['w-8 h-8'],
            },
        },
        defaultVariants: {
            size: 'medium'
        }
    },
)