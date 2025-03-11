import { Link } from "react-router-dom";

function BadgeItems({ link, text}){
    return (
        <Link to={link} className="text-decoration-none badge bg-secondary">
            {text}
        </Link>
    );
}

export default BadgeItems;