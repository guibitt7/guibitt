'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/Send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className='backdrop-blur hue-rotate-15 p-8 rounded-lg col-span-12 font-mclaren'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base text-violet-100 glow'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Your name'
          className='w-full rounded-md border bg-violet-100/10 py-3 px-6 text-base text-white outline-none focus:border-white focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base text-violet-100 glow'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border bg-violet-100/10 py-3 px-6 text-base text-white outline-none focus:border-white focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base text-violet-100 glow'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Hi I’m Guilherme, how are you doing?'
          className='w-full resize-none rounded-md border bg-violet-100/10 py-3 px-6 text-base text-white outline-none focus:border-white focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className='text-right'>
        <button className='hover:shadow-form rounded-md bg-violet-100/30 glow-icon py-3 px-8 text-base text-white outline-none'>
          Send
        </button>
      </div>
      </form>
    </div>
  );
  
  
};

export default ContactForm;