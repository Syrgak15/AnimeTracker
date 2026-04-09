import "./style.css"
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

export default function NotFound({target} : {target: string}) {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <div className="not-found__icon">
                    <HeartBrokenIcon fontSize="large" sx={{color: "#fff"}}/>
                </div>
                <div className="not-found__title">
                    <span>No {target} found</span>
                </div>
                <div className="not-found__subtitle">
                    <span>No data available for this section</span>
                </div>
            </div>
        </div>
    )
}