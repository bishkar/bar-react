import './InfoContainer.css';

import { InfoContainerProps } from './InfoContainer.props';

function InfoContainer({ children }: InfoContainerProps) {
  return (
    <div className='bg-black-90 sm:px-36 px-5 py-12 sm:my-10'>
      {children}
    </div>
  );
}

export default InfoContainer;