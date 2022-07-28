import React from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';

function SidebarToggle({setCollapsed, collapsed}) {
    return (
        <button className='relative h-12 w-12 border rounded-3xl border-slate-700 hover:bg-slate-500 hover:rounded-xl transition-all duration-150 ease-linear'
                onClick={() => setCollapsed(!collapsed)}>
                {/* <FaBars className='text-white inline-block' size={'25px'} /> */}
                <Image priority src="/2ejlogo.svg" alt="uwu" layout='fill' objectFit='contain' />
        </button>
        
    );
}

function SidebarOption({ collapsed }) {
    return (
        <button className=''>
            <FaBars className='text-white inline-block' size={'25px'} />
            {!collapsed ? <span className='overflow-hidden'>text example</span> : null}
        </button>
    );
}

export default function Sidebar(props) {
    let [collapsed, setCollapsed] = React.useState(true);

    return (
    <div className={`fixed flex flex-col top-0 left-0 h-screen bg-gray-900 shadow ${collapsed ? 'w-16' : 'w-64'} ease-in-out duration-300`}>
        <div className='justify-center w-full text-center py-2'>
            <SidebarToggle setCollapsed={setCollapsed} collapsed={collapsed}/>
        </div>
        <SidebarOption collapsed={collapsed}/>
        <SidebarOption collapsed={collapsed}/>
      </div>
    );
}