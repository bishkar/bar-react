import './NavItem.css';
import { NavItemProps } from './NavItem.props';

import cn from 'classnames';

function NavItem({text, isOpen}: NavItemProps) {
  return(
    <li>
      <a
        href='#'
        className={cn(
          'block py-2 mx-7',
        )}
        
      >
        <h5 className={cn(
          'md:text-xs text-xl font-helveticaThin font-thin',
          'sm:hover:text-yellow-600 sm:text-white',
          'text-yellow-600',
          { 'pt-7' : isOpen}
        )}>{text}</h5>
      </a>
    </li>
  );
}

export default NavItem;