import styles from "../styles/sidebar.module.css"
import SidebarButton from '../components/SidebarButton';
import SidebarLogo from '../components/SidebarLogo';

export default function Sidebar({
    onClick,
}) {
    return (
        <div className={styles.sidebarContainer}>
            <SidebarLogo />
            <SidebarButton label="HOME" link="/Home" />
            <SidebarButton label="REVIEW" link="/Home" />
            <SidebarButton label="PROFILE" link="/Profile" />
            <SidebarButton label="SETTINGS" link="/Settings"/>
            <SidebarButton label="LOG OUT" />
        </div>
    )
}