import './Reservation.css';

import { Formik, Field, Form } from 'formik';

import { ReservationProps } from './Reservation.props';
import { guestOptions, dateOptions, timeOptions } from '../helper';
import ReserveItem from '../ReserveItem/ReserveItem';
import Submit from '../../../Buttons/Submit/Submit';
import { forwardRef } from 'react';


const Reservation = forwardRef<HTMLDivElement, ReservationProps>(({ children }, ref) => {
  return (
    <div className='my-10' ref={ref}>
      <div className='flex justify-center'>
        {children}
      </div>
      <Formik
        initialValues={{
          numberOfPeople: 0,
          date: new Date(),
          time: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className='grid sm:grid-cols-5 grid-cols-1 gap-5 px-9'>
          <div className='sm:col-start-2'>
            <label htmlFor="numberOfPeople" className='block'>Party size</label>
            <Field as="select" name="numberOfPeople" id="numberOfPeople" className='option-border'>
              <ReserveItem data={guestOptions} /> {/* Ensure `guestOptions` is defined */}
            </Field>
          </div>

          <div>
            <label htmlFor="date" className='block'>Date</label>
            <Field as="select" name="date" id="date" className='option-border'>
              <ReserveItem data={dateOptions} /> {/* Ensure `dateOptions` is defined */}
            </Field>
          </div>
          
          <div>
            <label htmlFor="time" className='block'>Time</label>
            <Field as="select" name="time" id="time" className='option-border'>
              <ReserveItem data={timeOptions} /> {/* Ensure `timeOptions` is defined */}
            </Field>
          </div>

          <div className='mt-auto'><Submit text="Reserve a Table"/></div>
          
        </Form>
      </Formik>
      
    </div>
  );
});

export default Reservation;