import ContactFrom from '@/components/Contact/contactFrom';
import { ContactInstagramIcon, ContactLinkedinIcon, ContactMailIcon, ContactTwitterIcon, SocialIcon } from '@/components/icons';
import React, { useState } from 'react';



const Contact = () => {

    return (
        <div className='pt-[4.5rem] md:px-4 pb-8'>
            <div className='w-full flex flex-col lg:flex-row justify-between'>
                {/* Left Part: Information */}
                <div className="w-full lg:w-1/2 pt-4 px-8 md:pt-6 md:px-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-500">
                        <span className="blinking-cursor">&gt; Contact</span>
                    </h1>
                    <p className="text-lg md:text-2xl leading-relaxed mb-4">
                        Connection established. Send a transmission to the Encode operatives. Whether it's a query, a proposal for a new project, or a request for alliance, your message will be securely routed to our command center.
                    </p>
                    <p className="text-lg md:text-2xl leading-relaxed">
                        We are a collective of programmers and tech enthusiasts at PDEU, dedicated to exploring the digital frontier. Let's build the future.
                    </p>
                    {/* left side social icons for desktop */}
                    <div className="hidden md:block mt-5 pt-6 border-t-2 border-dashed border-green-400/40">
                        <p className="font-semibold text-xl md:text-3xl mb-4 text-green-500">&gt; Also, find us on the web</p>
                        <div className="flex items-center space-x-6">
                            <SocialIcon href="https://www.instagram.com/encode_pdeu/"><ContactInstagramIcon /></SocialIcon>
                            <SocialIcon href="https://www.linkedin.com/company/encode-pdpu/posts/?feedView=all"><ContactLinkedinIcon /></SocialIcon>
                            <SocialIcon href="https://x.com/Encode_PDEU"><ContactTwitterIcon /></SocialIcon>
                        </div>
                    </div>
                    <div className='md:hidden mt-5 pt-6 border-t-2 border-dashed border-green-400/60'></div>
                </div>
                {/* Right Part: Form */}
                <div className='pt-4 px-8 lg:mt-0 md:pt-6 md:px-12w-full lg:w-1/2'>
                    <ContactFrom />
                </div>
                {/* social icons for mobile screens */}
                {/* <div className='md:hidden w-full lg:w-1/2 pt-4 px-8 md:pt-6 md:px-12'>
                    <div className="mt-5 pt-6 border-t-2 border-dashed border-green-400/60">
                        <p className="font-semibold text-xl md:text-3xl mb-4 text-green-500">&gt; Also, find us on the web</p>
                        <div className="flex items-center space-x-6">
                            <SocialIcon href="https://www.instagram.com/encode_pdeu/"><ContactInstagramIcon /></SocialIcon>
                            <SocialIcon href="https://www.linkedin.com/company/encode-pdpu/posts/?feedView=all"><ContactLinkedinIcon /></SocialIcon>
                            <SocialIcon href="https://x.com/Encode_PDEU"><ContactTwitterIcon /></SocialIcon>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default Contact
