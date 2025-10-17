import Link from 'next/link';
import React from 'react';
import GradientText from './GradientText';

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-center h-30'>
            <div className="fixed flex justify-between items-center rounded-full border border-white/10 bg-white/[3%] backdrop-blur-md text-white z-50 w-[90%] lg:w-5xl lg:py-4 lg:px-16">
                <div className="px-8 py-4 lg:px-0 lg:py-0 lg:text-xl lg:font-bold">
                    <Link href={"/"}>
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={5}
                            showBorder={false}
                            className=""
                        >
                            Aaditya
                        </GradientText>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-6">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
