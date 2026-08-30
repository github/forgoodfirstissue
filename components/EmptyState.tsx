import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 w-full text-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-magnifying-glass" />
            <h2 className="text-xl font-semibold mb-2" >No results found</h2>
            <p className="text-gray-500" >Try changing your search term or filters.</p>
        </div>
    )
}