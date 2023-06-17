
import { FC } from 'react';
import styles from './UserProfile.module.css';
import { PhotoType } from '../../types/Photo';

type UserProfileProps = {
    user: PhotoType['user'];
}
const UserProfile: FC<UserProfileProps> = ({ user }) => {


    const { profile_image, username, name ,links} = user;
    console.log(profile_image);
    console.log(username);
    console.log(name);

    return (
        <>
            <div className={styles['profile-container']}>
                <img className={styles['profile-image']} src={profile_image.large} alt={name} />
                <div>
                    <div className={styles['profile-name']}>{name}</div>
                    <a className={styles['profile-username']} href={links.html}>
                        @{user.username}
                    </a>
                </div>
            </div>
        </>
    )
};

export default UserProfile;