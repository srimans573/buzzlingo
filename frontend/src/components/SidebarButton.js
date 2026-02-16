import styles from "../styles/Sidebar.css"

export default function SidebarButton({
    label,
    icon,
    onClick,
    variant = "primary",
    link,
}) {
    return (
        <div
            onClick={onClick}
            style={{
                cursor: "pointer"
            }}>
            <a href={link}><h3>{label}</h3></a>
        </div>
    )
}