import React from "react";

import { Link } from "react-router-dom";

const Drawer = ({ open, setOpen }) => {
    const menus = [
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
    ];

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(!open)
    };


    return (
        <section className="flex gap-6 z-40">
            <div
                className={`bg-darkBlue min-h-screen ${open ? "w-72" : "w-20"
                    } ${!open && "bg-transparent"} duration-500 text-gray-100 `}
            >
                <div className="flex items-center justify-between ">
                    <h1 className=' text-[26px] font-normal text-white flex mt-4 ml-4'>
                        <span className=' font-semibold text-[26px] mr-2'>KKS</span> Capitals
                    </h1>
                    <button onClick={handleClose} className="flex mr-3 w-3.5 h-3.5 font-semibold">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3337 24.3346L1.66699 1.66797M24.3337 1.66797L1.66699 24.3346" stroke="#F8F8F8" stroke-width="2.83333" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>


                <div className="mt-4 flex flex-col gap-2 relative ">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            // onClick={handleClose}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  font-medium p-3 hover:bg-gray-[100] transition ease-in-out duration-150 w-full pl-5 py-4`}
                        >
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Drawer;
