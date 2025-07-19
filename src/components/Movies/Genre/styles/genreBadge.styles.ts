import {cva} from "class-variance-authority";

export const genreBadgeStyles = cva("inline-flex items-center gap-2 px-3 py-1 rounded text-sm", {
    variants: {
        variant: {
            default: ["bg-gray-500"],
            filter: ["h-100 w-200", "border-red-300", "text-blue-700",
                    "border border-blue-300", "active:bg-pink-500"],
        },
        size: {
            small: ['w-50 h-50'],
            medium: ['w-100 h-100'],
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'medium'
    }
})