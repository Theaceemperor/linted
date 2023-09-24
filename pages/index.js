
import MyCta from '@/components/Cta';
import { PromoLink } from '@/components/MyLinks';
import ProductPage from '@/components/ProductPage';
import Reviews from '@/components/reviews';
import WriteReviews from '@/components/writeReview';

export default function Home() {
  return (
    <main>
      <h1 className='text-center font-bold text-xl underline decoration-red-300/60'>Lint Removers</h1>
      <p className='text-center px-1'>We distribute Lint/Dust removers in sinister and large quantities. We help 
      <br/>you get rid of tiny particles on your fabrics, carpets, clothes, couches and much more. Experience lint removals at it's best!</p>

      <ProductPage />

      <PromoLink />

      <MyCta />

      <h1 className='text-center text-xl font-bold underline decoration-red-300/60 '>Reviews</h1>

      <Reviews />

      <WriteReviews />  
    
      {
        
      }
    </main>
  )
}
