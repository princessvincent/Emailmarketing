import { FaCircleNotch } from "react-icons/fa"

export const CreditWrapper=()=>{
    const cred =[
        {
            name:"Sending credits",
            amount:"10%",
        },{
            name:"List",
            amount:"20%",
        },{
            name:"Campaign",
            amount:"40%",
        },{
            name:"Subscriber",
            amount:"80%",
        }

    ]
    return(
        <>
            <div className="d-flex align-items-center mt-5 mb-3">
                <span className="me-3">
                   <FaCircleNotch
                        size="1.5rem"
                        color="grey"
                    />
                </span>
                <h2 
                    className="fs-4 w-100 mb-0"
                >
                    Credits used
                </h2>
            </div>
            <p className="fs-6">
                Below is the summary of how you spend your credits
            </p>
            <div className="row">
                {
                    cred?.map((credit,index)=>{
                        const{
                            name,
                            amount
                        }=credit
                        return(
                            <div 
                                key={index}
                                className="col-md-6 mb-2"
                            >
                                <div className="pde-2">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-bold">
                                            {name}
                                        </span>
                                        <span>
                                            {amount}
                                        </span>
                                    </div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar bg-progress-success" 
                                            role="progressbar" 
                                            aria-label="Basic example" 
                                            aria-valuenow={amount} 
                                            style={{width:amount}}
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}