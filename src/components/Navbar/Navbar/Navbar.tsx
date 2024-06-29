import './Navbar.css';
import { NavbarProps } from './Navbar.props';

import cn from 'classnames';

function Navbar({children, isOpen}: NavbarProps) {
  return (
    <div className={cn(
      'w-full md:block md:w-auto',
      { 'hidden': !isOpen }

    )} id="navbar-default">
      <ul className={cn(
        'font-medium flex flex-col p-4 items-center justify-center',
        'md:p-0 mt-4',
        'md:flex-row md:space-x-8 rtl:space-x-reverse',
        'md:mt-0 md:border-0 md:bg-white dark:bg-transparent',
        'md:dark:bg-transparent dark:border-orange-100',
        { 'pt-10' : isOpen}
      )}>
        {children}
      </ul>
    </div>
  );
}

export default Navbar;