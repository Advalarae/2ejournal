import React from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';

function SidebarButton({setCollapsed, collapsed}) {
    return (
        <button className='relative h-12 w-12 border rounded-3xl border-slate-700 hover:bg-slate-500 hover:rounded-xl transition-all duration-150 ease-linear'
                onClick={() => setCollapsed(!collapsed)}>
                {/* <FaBars className='text-white inline-block' size={'25px'} /> */}
                <Image priority src="/2ejlogo.svg" alt="uwu" layout='fill' objectFit='contain' />
        </button>
        
    );
}

export default function Sidebar(props) {
    let [collapsed, setCollapsed] = React.useState(true);

    return (
    <div className={`fixed top-0 left-0 h-screen bg-gray-900 shadow ${collapsed ? 'w-16' : 'w-64'} ease-in-out duration-300`}>
        <div className='justify-center w-full text-center py-2'>
            <SidebarButton setCollapsed={setCollapsed} collapsed={collapsed}/>
        </div>
      </div>
    );
}