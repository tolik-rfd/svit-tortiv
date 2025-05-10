import { CustomButton } from './../shared/ui/CustomButton';

export default function Home() {
  return (
    <div className='bg-custom-cofe min-h-screen'>
      <h2 className='text-white text-title-sm'>Hello World!</h2>
      <CustomButton variant='orange'>додати в кошик</CustomButton>
    </div>
  );
}
