import './style.css'

export default function Genre({name}: {name: string}) {
    return (
        <div className="genre">
            {name}
        </div>
    )
}