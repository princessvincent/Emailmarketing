import {FaCodiepie} from "react-icons/fa"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const SubscriberStat =()=>{
    const spam = useSelector(
        state => state.SpamReported
    )
    const subsriber = useSelector(
        state => state.subscriber
    )
    const unsub = useSelector(
        state => state.unsubscriber
    )
    const blacklist = useSelector(
        state => state.blacklist
    )
    
    const navigate = useNavigate();
    const statDetails=[
        {
            name:"Subscribers",
            amount: subsriber.subscribers?.length,
            route:"/Lists/Subscribers"

        },
        {
            name:"UnSubscribe",
            amount:unsub.unsubscribers?.length,
            route:"/Lists/Unsubscribe"
        },
        {
            name:"Spam Reported",
            amount:spam.SpamReported.length,
            route:"/Lists/Spam Report"
        },
        {
            name:"Blacklisted",
            amount:blacklist.blacklist.length,
            route:"/Sending/Blacklist"
        }
    ]
    return(
        <div className="d-flex justify-content-between overflow-x mb-5 w-89">
            {
                statDetails?.map((stat,index)=>{
                    const{
                        name,
                        amount,
                        route
                    }=stat
                    return(
                        <div 
                            key={index}
                            className="bg-azur rounded">
                            <div 
                                className="m-2 rounded shadow p-2 border w-15 bg-white">
                                <p className="fw-bold">
                                    {name}
                                </p>
                                <p className="fw-bold display-6">
                                    {amount}
                                </p>
                                <div className="d-flex align-items-center justify-content-between wrap">
                                    <span 
                                        className="text-success fw-bold"
                                        onClick={
                                            ()=>navigate(route)
                                        }>
                                        see all {name}
                                    </span>
                                    <span className="p-1 rounded bg-lightblue">
                                       <FaCodiepie
                                            color="goldenrod"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )

                })
            }

        </div>
    )
}