import { zodResolver } from '@hookform/resolvers/zod';
import {
  ControllerFieldState,
  ControllerRenderProps,
  useForm,
  UseFormStateReturn,
} from 'react-hook-form';
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

interface FormValues {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
}

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
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

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
      className='w-[40%] w-min-48 max-w-3xl'
    >
      <h1 className='text-5xl font-bold pb-8'>Contact</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='firstName'
            render={({
              field,
              fieldState,
              formState,
            }: {
              field: ControllerRenderProps<FormValues, 'firstName'>;
              fieldState: ControllerFieldState;
              formState: UseFormStateReturn<FormValues>;
            }) => (
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
            render={({
              field,
              fieldState,
              formState,
            }: {
              field: ControllerRenderProps<FormValues, 'lastName'>;
              fieldState: ControllerFieldState;
              formState: UseFormStateReturn<FormValues>;
            }) => (
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
            render={({
              field,
              fieldState,
              formState,
            }: {
              field: ControllerRenderProps<FormValues, 'email'>;
              fieldState: ControllerFieldState;
              formState: UseFormStateReturn<FormValues>;
            }) => (
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
            render={({
              field,
              fieldState,
              formState,
            }: {
              field: ControllerRenderProps<FormValues, 'message'>;
              fieldState: ControllerFieldState;
              formState: UseFormStateReturn<FormValues>;
            }) => (
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
          } mt-2 text-destructive`}
        >
          Failed to send message. Please try again.
        </p>
      </div>
    </Wrapper>
  );
};

export default Contact;
