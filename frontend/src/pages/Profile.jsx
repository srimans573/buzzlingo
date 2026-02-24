import styles from '../styles/sidebar.module.css';
import profileStyles from '../styles/profile.module.css';

import Sidebar from '../components/Sidebar';
import UnderConstruction from '../components/UnderConstruction';

export default function Profile() {

    let usersName = "username";

    return (
        <div className={styles.splitView}>
            <Sidebar profileButtonSelected={true} />
            <div className={styles.splitSpacer}>
            </div>

            <div className={profileStyles.content}>
                {/* Profile Picture */}
                <h1>{ usersName }</h1>
                <p>Learning Spanish</p>
                {/* Statistics */}
                <UnderConstruction pageName="Profile Page" />
            </div>
        </div>
    );
}
