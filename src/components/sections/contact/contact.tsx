import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useState } from 'react';
import { Button } from '../../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import Wrapper from '../../wrapper';

const formSchema = z.object({
  firstName: z.string().min(3, {
    message: 'First name must be at least 3 characters.',
  }),
  lastName: z.string().min(3, {
    message: 'Last name must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(
        'https://tomaslajda.netlify.app/.netlify/functions/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      setStatus('success');
      form.reset();

      setTimeout(() => {
        setStatus('idle');
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Wrapper
      bgColor='bg-[hsl(var(--primary))]'
      textColor='white'
      className='w-10/12 w-min-48 max-w-3xl sm:w-[60%]'
      id='Contact'
    >
      <h1 className='pb-8 text-5xl text-center sm:text-left font-bold'>
        Contact
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='John' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='Smith' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='john.smith@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Details' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' variant='outline'>
            Submit
          </Button>
        </form>
      </Form>

      <div className='h-6'>
        <p
          className={`transition-opacity duration-500 ease-in-out ${
            status === 'success' ? 'opacity-100' : 'opacity-0'
          } mt-2 text-green-500`}
        >
          Message sent successfully!
        </p>
        <p
          className={`transition-opacity duration-500 ease-in-out ${
            status === 'error' ? 'opacity-100' : 'opacity-0'
          } mt-2 text-red-500`}
        >
          Failed to send message. Please try again.
        </p>
      </div>
    </Wrapper>
  );
};

export default Contact;
