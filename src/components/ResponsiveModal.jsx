import { React } from "react";
import { Dialog } from '@headlessui/react';



import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";

import Table from "../assets/Table.png"



const ResponsiveModal = ({ open, setOpen, image }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0">
                <div className="flex min-h-full items-center justify-center overflow-y-auto p-4">
                    <Dialog.Panel className={`mx-auto max-w-sm rounded-xl bg-white shadow-2xl ${image && "md:min-w-[80%]"}`}>
                        <Dialog.Title className={`flex flex-col justify-center items-center text-center ${image ? "p-1 md:p-3" : "p-5"}`}>
                            {
                                !image ?
                                    <>
                                        <div className="w-[90%] flex justify-end">
                                            <button className="w-fit h-fit p-2 rounded-full bg-gray-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                <AiOutlineClose className="w-5 h-5" />
                                            </button>

                                        </div>
                                        <AiFillCheckCircle className="text-green-700 w-20 h-20 mb-10" />
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 font-main">
                                            <span className="font-semibold">
                                                Email send successfully..
                                            </span>
                                            <br />
                                            <span className="text-base">
                                                Our Support team will contact you soon..
                                            </span>
                                        </h3>
                                        <div className="flex justify-center gap-4">
                                            <button className="px-3 py-2 rounded-2xl border border-black hover:bg-gray-200 hover:scale-105"
                                                onClick={() => setOpen(false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </>
                                    :
                                    <div className="w-full h-full relative">
                                        <div className="w-full flex absolute right-auto justify-end">
                                            <button className="p-2 rounded-full bg-gray-200 m-1 md:m-3 lg:m-4"
                                                onClick={() => setOpen(false)}
                                            >
                                                <AiOutlineClose className="w-2.5 h-2.5 md:h-4 md:w-4 lg:w-5 lg:h-5" />
                                            </button>
                                        </div>
                                        <img src={Table} alt="graph"
                                            className=" w-full h-full"
                                        />
                                    </div>
                            }
                        </Dialog.Title>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>

    )
};

export default ResponsiveModal;

//                 // <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                // <div className="flex min-h-screen items-center justify-center p-4">

                // </div>
                // <div />