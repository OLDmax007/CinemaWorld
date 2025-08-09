import {getGenreIcon} from "../../../helpers/getGenreIcon.tsx";
import {type FC} from "react";
import {type GenreBadgeProps} from "./GenreBadge.tsx";

type GenreIconProps = {
    className: string
}  & Pick<GenreBadgeProps, 'genre'>

const GenreIcon: FC<GenreIconProps> = ({ genre, className }) => {
    const Icon = getGenreIcon(genre);
    return <Icon className={className} />;
};

export default GenreIcon