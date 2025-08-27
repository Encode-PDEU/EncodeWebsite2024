import React, { useEffect, useState } from 'react'
import { Dock, DockIcon } from "../components/magicui/dock";
import { Link, useNavigate, useParams } from "react-router-dom"
import { DBService } from "../services/appwrite.config.js"
import Event from '../components/Dashboard/Event.jsx';
import Team from '../components/Dashboard/Team.jsx';
import { scale } from 'motion/react';

const Dashboard = () => {

  const params = useParams()
  const navigate = useNavigate()
  let activeSection = params.id
  if(!activeSection || (activeSection != 'team' && activeSection != 'event')){
    navigate('/')
  }

  return (
    <div className='relative sm:min-h-[70vh] min-h-screen w-full pt-[72px] flex'>

        <div className="dock-div fixed bottom-0 left-1/2 right-1/2  flex-1 flex justify-center items-center pb-10 z-10">
          <Dock direction="middle" className='bg-black flex gap-16 px-16 mt-0 border-2 border-success/40'>
            <Link to="/dashboard/event">
              <DockIcon className={`hover:scale-125 rounded-none ${activeSection == 'event' ? 'scale-125 text-success' : ''}`}>
                Event
              </DockIcon>
            </Link>
            <Link to="/dashboard/team">
            <DockIcon className={`hover:scale-125 rounded-none ${activeSection == 'team' ? 'scale-125 text-success' : ''}`}>
                Team
              </DockIcon>
            </Link>
          </Dock>
        </div>

        <div className='flex-1 flex'>
          {(activeSection == "event") && <Event/> }
          {(activeSection == "team") && <Team/> }
        </div>

    </div>
  )
}

export default Dashboard