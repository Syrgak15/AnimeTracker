import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./style.css"
import Link from 'next/link';

export default function EmptyState() {
    return (
        <div className="empty-state">
            <div className="empty-state__content">
                <div className="empty-content__icon">
                    <HeartBrokenIcon/>
                </div>
                <div className="empty-content__title">
                    <span>List is empty</span>
                </div>
                <div className="empty-content__subtitle">
                    <span>You can add anime to favorite list by clicking</span>
                    <FavoriteBorderIcon fontSize="small"/>
                </div>
                <div className="empty-content__link">
                    <Link
                        href="/"
                    >
                        Browse anime list
                    </Link>
                </div>
            </div>
        </div>
    )
}