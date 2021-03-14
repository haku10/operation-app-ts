import * as React from 'react'

type UserLikedProps = {
    title: string;
    isLiked: boolean;
    toggle: any;
}

const UserLiked: React.FC<UserLikedProps> = ({
    title,
    isLiked,
    toggle,
}) => {
    return (
        <div>
            <h2>{title}</h2>
            <label htmlFor="check">いいね</label>
            <input type="checkbox" checked={isLiked} id="check" onChange={() => {}} onClick={() => toggle()}/>
        </div>
    )
}

export default UserLiked;
