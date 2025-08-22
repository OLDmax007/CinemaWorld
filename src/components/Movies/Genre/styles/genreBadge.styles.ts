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
                    'px-4!',
                    'py-1!',
                    'rounded-full',
                ],
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);
