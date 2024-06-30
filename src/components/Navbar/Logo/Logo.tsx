import './Logo.css';

import { LogoProps } from './Logo.props';

function Logo({ isOpen, onClick }: LogoProps) {
  return(!isOpen &&
    <div className='flex flex-row cursor-pointer fixed top-10 left-10 z-50' onClick={onClick}>
      <img src="logo.svg" alt="" />
      <h1 className='header-logo font-helvetica'>BAR</h1>
      <h5 className='number-logo font-helvetica'>121</h5>
    </div>   
  );
}

export default Logo;