import React, { useEffect } from 'react';
import Image from 'next/image';
import matchBookingCardBg from "../../../public/matchBookingCardBg.png";
import redKit from "../../../public/red-kit.png";
import blueKit from "../../../public/blue-kit.png";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { LuClock3 } from "react-icons/lu";


function MatchBookingCard({data:match}) {


useEffect(() => {
  console.log("This runs only once on mount");
  console.log(match);
}, []);

    return (
        <>
                <div className='w-[392px] h-[375px] bg-blue-900 flex flex-col relative rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden font-poppins'>
                    <div className='bg-image relative w-full h-[200px]'>
                        <Image src={matchBookingCardBg} alt="Background" fill className="object-cover" />
                    </div>

                    <div className='vs-teams flex flex-row items-center gap-[10px] absolute top-[67px] pl-[20px]'>
                        <Image src={redKit} alt="Red Kit" />
                        <p className='text-white'>vs</p>
                        <Image src={blueKit} alt="Blue Kit" />
                    </div>

                    <div className='content-area flex flex-col justify-between items-start bg-white w-full h-full p-[20px] pt-[40px]'>
                        <span className="bg-[#4267B31A] text-[#4267B3] text-xs font-medium px-4 py-1 rounded-full inline-block">
                            {match.league}
                        </span>
                        <div className='team-names '>
                            <h3 className='font-semibold text-[20px] leading-[30px]'>{match.team1} vs {match.team2}</h3>
                        </div>
                        <div className="stadium-name flex flex-row items-center h-[18px]">
                            <IoLocationOutline className="text-[#4267B3]" />
                            <h4 className='ml-2 font-normal text-[12px] color-[#201E1ECC]'>{match.stadium}</h4>
                        </div>
                        <div className="date-time flex flex-row items-center ">
                            <div className="date flex flex-row items-center mr-[10px]">
                                <SlCalender className="text-[#4267B3]" />
                                <h4 className='ml-2 font-normal text-[12px] color-[#201E1ECC]'>{match.date}</h4>
                            </div>
                            <div className="date-time-border text-[#4267B366]">|</div>
                            <div className="time flex flex-row items-center ml-[10px]">
                                <LuClock3 className="text-[#4267B3]" />
                                <h4 className='ml-2 font-normal text-[12px] color-[#201E1ECC]'>{match.time}</h4>
                            </div>
                        </div>
                        <div className="price-booking flex flex-row items-center justify-between w-full">
                            <h3 className='font-semibold text-[20px] leading-[30px]'>${match.price}</h3>
                            <button className='w-[98px] h-[38px] rounded-[70px] p-[10px] bg-[#E82F24] flex justify-center items-center text-white'>Book</button>
                        </div>
                    </div>
                </div>
        </>


        // <div className='max-w-[30%] w-full text-black'>
        //     <div className='flex flex-col'>
        //         <div className='bg-blue-900 relative h-[190px]'>
        //             <div className='pl-3 flex absolute items-center gap-3 bottom-[40px]'>
        //                 <div className='w-[100px] h-[100px] bg-purple-900 rounded-[50%]'>

        //                 </div>
        //             </div>
        //         </div>
        //         <div className='flex flex-col'>
        //             <span className='bg-blue-300 rounded-2xl py-[2px] px-[10px] text-[14px]'>Premier League</span>
        //             <h3>Liverpool vs Manchester City</h3>
        //             <div class></div>
        //         </div>

        //     </div>
        // </div>
    );
}

export default MatchBookingCard;