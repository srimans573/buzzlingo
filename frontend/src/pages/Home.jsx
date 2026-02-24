import sidebarStyles from '../styles/sidebar.module.css';
import Sidebar from "../components/Sidebar";
import UnderConstruction from '../components/UnderConstruction';

export default function Home() {
    return (
        <div className={sidebarStyles.splitView}>
            <Sidebar homeButtonSelected={true} />
            <div className={sidebarStyles.splitSpacer}></div>
            <UnderConstruction pageName="Home" />
        </div>
    );
}
