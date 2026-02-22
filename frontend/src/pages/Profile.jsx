import styles from '../styles/sidebar.module.css';
import profileStyles from '../styles/profile.module.css';

import Sidebar from '../components/Sidebar';

export default function Profile() {
    return (
        <div className={styles.splitView}>
            <Sidebar profileButtonSelected={true} />
            <div className={styles.splitSpacer}>
            </div>
            <div className={profileStyles.content}>
                <h1>Profile</h1>
                <p>This is the profile page, it is very cool imo</p>
            </div>
        </div>
    );
}
