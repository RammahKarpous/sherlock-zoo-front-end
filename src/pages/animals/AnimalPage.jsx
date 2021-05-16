import info from "../../components/animals/information.json"

const AnimalPage = ({match}) => {

    return (
        <div>
            <h1>{match.params.slug ? data.slug : (
                info.slug
            )}</h1>
        </div>
    )

}

export default AnimalPage
