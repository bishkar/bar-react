import './Button.css';
import { ButtonProps } from './Button.props';

function Button({ text }: ButtonProps) {
  return(
    <button className='border border-solid border-white
                     hover:bg-white hover:text-black px-6 py-2' 
    >
      <span className='font-helveticaThin font-normal'>
        {text}
      </span>
    </button>
  );
}

export default Button;