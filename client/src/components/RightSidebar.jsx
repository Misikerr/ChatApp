import React, { useContext, useEffect, useState } from 'react'
import assets, { imagesDummyData } from '../assets/assets'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'

export const RightSidebar = ({ show = false, onClose }) => {
    const {selectedUser, messages} = useContext(ChatContext)
    const { logout, onlineUsers } = useContext(AuthContext)
    const [msgImages, setMsgImages] = useState([])

    // Get all the images from the messages and set them to state
    useEffect(()=>{
        setMsgImages(
            messages.filter(msg => msg.image).map(msg=>msg.image)
        )
    },[messages])

    if (!selectedUser) return null;

    // Mobile overlay logic
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const sidebarClass = isMobile
        ? `fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#8185B2]/95 z-50 transition-transform duration-300 ${show ? 'translate-x-0' : 'translate-x-full'} text-white overflow-y-scroll` 
        : `bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? 'max-md:hidden' : ''}`;

    return (
        <div className={sidebarClass} style={isMobile ? {boxShadow: '0 0 0 9999px rgba(0,0,0,0.3)'} : {}}>
            {/* Close button for mobile */}
            {isMobile && (
                <button onClick={onClose} className='absolute top-3 right-3 text-2xl font-bold text-white bg-black/30 rounded-full w-8 h-8 flex items-center justify-center z-50'>×</button>
            )}
            <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto'>
                <img src={selectedUser?.profilePic || assets.avatar_icon} alt=""
                className='w-20 aspect-[1/1] rounded-full'/>
                <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
                    {onlineUsers.includes(selectedUser._id) && <p className='w-2 h-2 rounded-full bg-green-500'></p> }
                    {selectedUser.fullName}
                </h1>
                <p className='px-10 mx-auto'>{selectedUser.bio}</p>
            </div>
            <hr className='border-[#ffffff50] my-4'/>
            <div className='px-5 text-xs'>
                <p>Media</p>
                <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
                    {msgImages.map((url, index)=>(
                        <div key={index} onClick={()=> window.open(url)} 
                        className='cursor-pointer rounded'>
                            <img src={url} alt="" className='h-full rounded-md'/>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile: Only Logout button at the bottom */}
            {isMobile && (
                <button onClick={logout} className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-10 rounded-full cursor-pointer'>Logout</button>
            )}
            {/* Desktop: Logout button */}
            {!isMobile && (
                <button onClick={logout} className='absolute bottom-5 left-1/2 transform -translate-x-1/2 
                bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm 
                font-light py-2 px-20 rounded-full cursor-pointer'>
                    Logout
                </button>
            )}
        </div>
    )
}
