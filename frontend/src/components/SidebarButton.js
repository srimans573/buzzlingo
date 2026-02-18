import styles from "../styles/sidebar.module.css"
import { NavLink, Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";

export default function SidebarButton({
    label,
    icon,
    onClick,
    variant = "primary",
    link,
}) {
    let navigate = useNavigate({ link });
    return (
        <Link to={ link }>
        <div className = {styles.sidebarButton}>
            <button onClick={() => navigate}>
                <span>{icon}</span>
                <span>{label}</span>
            </button>
        </div>
        </Link>
    );
}