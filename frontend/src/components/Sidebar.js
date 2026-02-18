import styles from "../styles/sidebar.module.css"
import SidebarButton from '../components/SidebarButton';
import SidebarLogo from '../components/SidebarLogo';
import { ReactComponent as HomeIcon } from "../assets/home_icon.svg"
import { ReactComponent as StarIcon } from "../assets/star_icon.svg"
import { ReactComponent as ProfileIcon } from "../assets/user_icon.svg"
import { ReactComponent as SettingsIcon } from "../assets/settings_icon.svg"
import { ReactComponent as LogoutIcon } from "../assets/logout_icon.svg"

export default function Sidebar({
    onClick,
    theme, 
}) {
    return (
        <div className={styles.sidebarContainer}>
            <SidebarLogo />
            <SidebarButton label="HOME" link='/home' icon = <HomeIcon /> />
            <SidebarButton label="REVIEW" link="/home" icon = <StarIcon /> />
            <SidebarButton label="PROFILE" link='/profile' icon = <ProfileIcon /> />
            <SidebarButton label="SETTINGS" link='/settings' icon = <SettingsIcon /> />
            <SidebarButton label="LOG OUT" link='/home' icon = <LogoutIcon/> />
        </div>
    )
}
