import MassageCard from "../../../Templates/massageCard/MassageCard";
import letter from '../../../../assets/images/letter.png'


const Messages = (props) => {
    // console.log('render messages')

   const {OwnerId, massages=[] } = props
    return (

    !!massages.length ?
        massages.map((massage, i) => {
            return <MassageCard {...massage} OwnerId={OwnerId} index={i} key={i}/>
        })
        :
        <div>
            <h2>No message</h2>
            <img src={letter} alt=""/>
        </div>
    );
};

export default Messages;

// deleteMessage={deleteMessage}