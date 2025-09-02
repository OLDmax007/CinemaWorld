import {cva} from 'class-variance-authority';

export const genreBadgeStyles = cva(
    [
        'flex',
        'justify-center',
        'items-center',
        'text-center',
        'text-sm',
        'text-black',
        'cursor-pointer',
        'italic',
        'text-gray-800'
    ],
    {
        variants: {
            variant: {
                default: [
                    'flex-col-reverse',
                    'rounded-lg',
                ],
                filter: [
                    'h-7',
                    'flex-row-reverse',
                    'gap-2',
                    'rounded-full',
                ],
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);
