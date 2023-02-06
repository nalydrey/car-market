import MassageCard from "../massageCard/MassageCard";


const Messages = (props) => {
    console.log('render messages')

   const {OwnerId, massages=[] } = props
    return (
        !!massages.length &&
        massages.map((massage, i)=>{
                return <MassageCard {...massage} OwnerId={OwnerId} index={i} key={i}/>
            })
    );
};

export default Messages;

// deleteMessage={deleteMessage}