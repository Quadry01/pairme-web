export const Payment = ()=>{
    return (
    <div className="bg-white md:bg-blue-foundation w-full  text-blue">
        <div className="z-40 fixed hidden bg-white md:flex items-center h-32 pl-28 font-extrabold text-2xl shadow-md w-full"><span>PairMe</span></div>
        <div className="md:hidden font-bold text-xl w-full text-center mt-14 mb-8"> PairMe</div>
        <div className="md:pt-80">
        <div className=" bg-white text-xxs flex flex-col gap-y-3 mx-auto w-[80%] md:w-[40%] shadow-md rounded-xl md:rounded-3xl px-9 md:px-24 py-12 md:py-24">
            <span className="hidden md:block ">PairMe</span>
            <div className="w-full">
                <span className="text-xs font-bold">Card Number</span><br />
                <span>Enter the 16-digit card number on the card</span><br />
                <input className="w-full rounded-md h-8 ring-1 ring-blue" type="number" />
            </div>
            <div className="flex  gap-x-2">
                <di className="w-full">
                    <span className="text-xs">CVV</span><br />
                    <input className="w-full rounded-md h-8 ring-1 ring-blue" type="number" />
                </di>
                <div className="w-full">
                    <span className="text-xs">Exp. date</span><br />
                    <input className="w-full rounded-md h-8 ring-1 ring-blue" type="date" />
                </div>
            </div>
            <div>
                <span className="text-xs">Password</span><br />
                <span>Enter the 4-digit card pin</span><br />
                <input className="w-full rounded-md h-8 ring-1 ring-blue" type="password" />
            </div>
            <div>
                <span className="text-xs">OTP</span><br />
                <span>Enter the 6-digit OTP sent to your mail</span><br />
                <input className="w-full rounded-md h-8 ring-1 ring-blue" type="number" />
            </div>
            <div className="w-full mt-2">
                <input type="radio" /> <span>I agree to the Terms and Conditions</span> <br />
                <div className="text-center mt-6"><button className=" w-28 h-8 bg-blue text-white text-center rounded-full mx-auto">Make payment</button></div>
            </div>
       </div>
       </div>
    </div>
    )
}