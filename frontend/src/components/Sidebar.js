import styles from "../styles/sidebar.css"
import SidebarButton from '../components/SidebarButton';
import SidebarLogo from '../components/SidebarLogo';

export default function Sidebar({
    //
}) {
    return (
        <div>
            <SidebarLogo />
            <SidebarButton label="Home" />
            <SidebarButton label="Review" />
            <SidebarButton label="Profile" />
            <SidebarButton label="Settings" />
        </div>
    )
}