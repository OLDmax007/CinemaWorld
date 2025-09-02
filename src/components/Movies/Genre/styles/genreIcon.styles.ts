import {cva} from "class-variance-authority";

export const genreIconStyles = cva(
    'fill-sky-400 stroke-gray-900 hover:fill-purple-400 hover:stroke-purple-900', {
        variants: {
            size: {
                small: ['w-5 h-5'],
                medium: ['w-10 h-10'],
            },
        },
        defaultVariants: {
            size: 'medium'
        }
    },
)