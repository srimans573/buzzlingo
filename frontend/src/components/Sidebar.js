import styles from "../styles/sidebar.module.css"
import SidebarButton from '../components/SidebarButton';
import SidebarLogo from '../components/SidebarLogo';

export default function Sidebar({
    onClick,
}) {
    return (
        <div className={styles.sidebarContainer}>
            <SidebarLogo />
            <SidebarButton label="HOME" link='./home' />
            <SidebarButton label="REVIEW" link="./home" />
            <SidebarButton label="PROFILE" link='/profile' />
            <SidebarButton label="SETTINGS" link='/settings'/>
            <SidebarButton label="LOG OUT" />
        </div>
    )
}
