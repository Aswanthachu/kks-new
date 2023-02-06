import React from 'react'
import { Button } from '../../utils'
const StandardCard = ({ premium, standard }) => {
	return (
		<div className={`flex p-6 flex-col h-1/4 md:h-fit lg:min-w-[320px] min-w-[290px] md:min-w-[350px] border  rounded-xl shadow-2xl mb-6 mx-[10px] ${premium && "border-2 border-gray-300  shadow-2xl"}`} >
			{/* {standard || premium ? <div className='bg-[#edcc00] text-gray-900 w-[250px] items-center justify-center h-[35px] ml-14   rounded-lg   border-gray-50    ' >
				<span className=' font-bold text-center content-center'>40% discount on Early Users</span>
			</div> :''}	 */}
			<div className="space-y-2 ">
				
				<h4 className=" flex-start text-xl md:text-[28px] mb-3 md:mb-6 text-darkBlue font-sizeHundred font-main ">{`${premium ? "Premium" : (standard ? "Standard" : "Basic")}`}</h4>
			
			
				<span className={` mb-6   font-main  text-darkBlue ${premium ? 'text-5xl font-extrabold' :'text-4xl font-mainBold'} `}> {`${premium ? "₹ 14789" : (standard ? "₹ 8489" : "₹ 4589")}`}</span>
			</div>
			<ul className='flex flex-col' >
				<li className='flex mt-8 font-main font-sizeHundred text-lg  md:text-[21px]' >
					<svg className='mt-1' width="16" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0595703 9.18458C0.0595703 7.00664 0.924752 4.91791 2.46479 3.37787C4.00482 1.83784 6.09355 0.972656 8.27149 0.972656C10.4494 0.972656 12.5382 1.83784 14.0782 3.37787C15.6182 4.91791 16.4834 7.00664 16.4834 9.18458C16.4834 11.3625 15.6182 13.4512 14.0782 14.9913C12.5382 16.5313 10.4494 17.3965 8.27149 17.3965C6.09355 17.3965 4.00482 16.5313 2.46479 14.9913C0.924752 13.4512 0.0595703 11.3625 0.0595703 9.18458H0.0595703ZM7.80286 12.6993L12.5307 6.78889L11.6767 6.10565L7.6452 11.1434L4.78964 8.76413L4.08889 9.60503L7.80286 12.7004V12.6993Z" fill="#0055A4" />
					</svg>
					<span className='ml-3' >Portfolio Management</span>
				</li>
				<li className='flex mt-5 font-main font-sizeHundred text-lg md:text-[21px]' >
					<svg className='mt-1' width="16" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0595703 9.18458C0.0595703 7.00664 0.924752 4.91791 2.46479 3.37787C4.00482 1.83784 6.09355 0.972656 8.27149 0.972656C10.4494 0.972656 12.5382 1.83784 14.0782 3.37787C15.6182 4.91791 16.4834 7.00664 16.4834 9.18458C16.4834 11.3625 15.6182 13.4512 14.0782 14.9913C12.5382 16.5313 10.4494 17.3965 8.27149 17.3965C6.09355 17.3965 4.00482 16.5313 2.46479 14.9913C0.924752 13.4512 0.0595703 11.3625 0.0595703 9.18458H0.0595703ZM7.80286 12.6993L12.5307 6.78889L11.6767 6.10565L7.6452 11.1434L4.78964 8.76413L4.08889 9.60503L7.80286 12.7004V12.6993Z" fill="#0055A4" />
					</svg>
					<span className='ml-3' >Stock List</span>
				</li>
				<li className='flex mt-5 font-main font-sizeHundred text-lg md:text-[21px]' >
					<svg className='mt-1' width="16" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0595703 9.18458C0.0595703 7.00664 0.924752 4.91791 2.46479 3.37787C4.00482 1.83784 6.09355 0.972656 8.27149 0.972656C10.4494 0.972656 12.5382 1.83784 14.0782 3.37787C15.6182 4.91791 16.4834 7.00664 16.4834 9.18458C16.4834 11.3625 15.6182 13.4512 14.0782 14.9913C12.5382 16.5313 10.4494 17.3965 8.27149 17.3965C6.09355 17.3965 4.00482 16.5313 2.46479 14.9913C0.924752 13.4512 0.0595703 11.3625 0.0595703 9.18458H0.0595703ZM7.80286 12.6993L12.5307 6.78889L11.6767 6.10565L7.6452 11.1434L4.78964 8.76413L4.08889 9.60503L7.80286 12.7004V12.6993Z" fill="#0055A4" />
					</svg>
					<span className='ml-3' >24/7 Support</span>
				</li>
				<li className='flex mt-5 font-main font-sizeHundred text-lg md:text-[21px]' >
					<svg className='mt-1' width="16" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0595703 9.18458C0.0595703 7.00664 0.924752 4.91791 2.46479 3.37787C4.00482 1.83784 6.09355 0.972656 8.27149 0.972656C10.4494 0.972656 12.5382 1.83784 14.0782 3.37787C15.6182 4.91791 16.4834 7.00664 16.4834 9.18458C16.4834 11.3625 15.6182 13.4512 14.0782 14.9913C12.5382 16.5313 10.4494 17.3965 8.27149 17.3965C6.09355 17.3965 4.00482 16.5313 2.46479 14.9913C0.924752 13.4512 0.0595703 11.3625 0.0595703 9.18458H0.0595703ZM7.80286 12.6993L12.5307 6.78889L11.6767 6.10565L7.6452 11.1434L4.78964 8.76413L4.08889 9.60503L7.80286 12.7004V12.6993Z" fill="#0055A4" />
					</svg>
					<span className='ml-3' >{`${premium ? "12" : (standard ? "6" : "3")}`} Months</span>
				</li>
				<li className='flex mt-5 font-main font-sizeHundred text-lg md:text-[21px]' >
					{premium ?
						<svg className='mt-1' width="16" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0595703 9.18458C0.0595703 7.00664 0.924752 4.91791 2.46479 3.37787C4.00482 1.83784 6.09355 0.972656 8.27149 0.972656C10.4494 0.972656 12.5382 1.83784 14.0782 3.37787C15.6182 4.91791 16.4834 7.00664 16.4834 9.18458C16.4834 11.3625 15.6182 13.4512 14.0782 14.9913C12.5382 16.5313 10.4494 17.3965 8.27149 17.3965C6.09355 17.3965 4.00482 16.5313 2.46479 14.9913C0.924752 13.4512 0.0595703 11.3625 0.0595703 9.18458H0.0595703ZM7.80286 12.6993L12.5307 6.78889L11.6767 6.10565L7.6452 11.1434L4.78964 8.76413L4.08889 9.60503L7.80286 12.7004V12.6993Z" fill="#0055A4" />
						</svg> :
						<svg className='mt-1' width="16" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.1225 2.46058C10.9198 -0.742068 5.66421 -0.742068 2.46156 2.46058C-0.741092 5.66323 -0.741092 10.9189 2.46156 14.1215C5.66421 17.3242 10.8377 17.3242 14.0404 14.1215C17.243 10.9189 17.3251 5.66323 14.1225 2.46058ZM10.5914 11.7401L8.29202 9.44071L5.99268 11.7401L4.84301 10.5904L7.14235 8.29104L4.84301 5.99171L5.99268 4.84204L8.29202 7.14138L10.5914 4.84204L11.741 5.99171L9.44169 8.29104L11.741 10.5904L10.5914 11.7401Z" fill="#D02424" />
						</svg>
					}


					<span className='ml-3' >{premium ? "Additional 3 Month Offer" :"Additional Offer"} </span>
				</li>
				{premium &&
					<li className='flex mt-5 font-main font-sizeHundred text-lg md:text-[21px]' >
						<svg className='mt-1' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0595703 9.18458C0.0595703 7.00664 0.924752 4.91791 2.46479 3.37787C4.00482 1.83784 6.09355 0.972656 8.27149 0.972656C10.4494 0.972656 12.5382 1.83784 14.0782 3.37787C15.6182 4.91791 16.4834 7.00664 16.4834 9.18458C16.4834 11.3625 15.6182 13.4512 14.0782 14.9913C12.5382 16.5313 10.4494 17.3965 8.27149 17.3965C6.09355 17.3965 4.00482 16.5313 2.46479 14.9913C0.924752 13.4512 0.0595703 11.3625 0.0595703 9.18458H0.0595703ZM7.80286 12.6993L12.5307 6.78889L11.6767 6.10565L7.6452 11.1434L4.78964 8.76413L4.08889 9.60503L7.80286 12.7004V12.6993Z" fill="#0055A4" />
						</svg>

						<p className='ml-3' >Broader Strategic Plan
						
						</p>
					</li>
				}
				<li className='flex mt-5 font-main font-sizeHundred text-lg md:text-[21px]' >
					<svg className='mt-1' width="16" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0595703 9.18458C0.0595703 7.00664 0.924752 4.91791 2.46479 3.37787C4.00482 1.83784 6.09355 0.972656 8.27149 0.972656C10.4494 0.972656 12.5382 1.83784 14.0782 3.37787C15.6182 4.91791 16.4834 7.00664 16.4834 9.18458C16.4834 11.3625 15.6182 13.4512 14.0782 14.9913C12.5382 16.5313 10.4494 17.3965 8.27149 17.3965C6.09355 17.3965 4.00482 16.5313 2.46479 14.9913C0.924752 13.4512 0.0595703 11.3625 0.0595703 9.18458H0.0595703ZM7.80286 12.6993L12.5307 6.78889L11.6767 6.10565L7.6452 11.1434L4.78964 8.76413L4.08889 9.60503L7.80286 12.7004V12.6993Z" fill="#0055A4" />
					</svg>
					<span className='ml-3' >Advanced SIPs</span>
				</li>
			</ul>
			<div className='mt-9'>
				<Button path="/login" text={`Get ${premium ? "Premium" : (standard ? "Standard" : "Basic")} Plan`} className="btn2 rounded-xl shadow-lg" />
			</div>
		</div>
	)
}

export default StandardCard