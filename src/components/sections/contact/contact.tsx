import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { z } from 'zod';

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
            render={({ field }: { field: ControllerRenderProps }) => (
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
            render={({ field }: { field: ControllerRenderProps }) => (
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
            render={({ field }: { field: ControllerRenderProps }) => (
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
            render={({ field }: { field: ControllerRenderProps }) => (
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
    </Wrapper>
  );
};

export default Contact;
