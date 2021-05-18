import Event from "../components/Event"
import baloo from '../assets/images/news/baloo.png'
import newMembers from '../assets/images/news/new-members.png'
import openingZoo from '../assets/images/news/zoo-opening.png'
import covid19 from '../assets/images/news/covid-19.png'

const Events = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">

            <Event 
                headLine="Baby Baloo is back on the feet!" 
                excerpt="The lovely baby Baloo was ill for the past 3 days, but now he is feeling better again and playing with all his friends in the zoo." date="18/05/2021" bgImage={baloo} />

            <Event 
                headLine="New members" 
                excerpt="Just moments ago, we have welcomed new members to our zoo. Come to the zoo to meet our new members and become friends with them." date="13/05/2021" bgImage={newMembers} />

            <Event 
                headLine="Re-opening the zoo after a long time" 
                excerpt="After waiting for almost 3 months! We are pleased to announce that we are finally opining op again. Ticket bookings are now online again! So book your tickets, and visit our lovely animals." date="10/05/2021" bgImage={openingZoo} />

            <Event 
                headLine="Latest COVID-19 news" 
                excerpt="As you might already know, the Corona Virus Desease (COVID-19) has been around for a couple of months now. Click here to read more about our latest news on COVID-19." date="01/04/2021" bgImage={covid19} />
        </div>
    )
}

export default Events
