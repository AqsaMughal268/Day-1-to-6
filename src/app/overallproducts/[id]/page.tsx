
import { BsCart } from 'react-icons/bs';
import { nikeProducts } from '@/app/components/card/data';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = nikeProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className='grid grid-cols-12 px-8 md:px-20 my-16 md:my-16 gap-0 md:gap-10'>
      <div className='col-span-12 md:col-span-6'>
        <Image
          src={product.imagesUrls}
          alt={product.title}
          width={500}
          height={500}
        />
      </div>
      <div className='col-span-12 md:col-span-6 pr-18 pt-10 md:pt-0'>
        <h2 className='text-3xl'>{product.title}</h2>
        <p className='py-10'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
        <h3>{product.price}</h3>
        <div className='flex mt-6'>
          <Link href='/cart'>
           <button className="flex items-center mt-1 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        <BsCart className="text-lg mr-2" />
                        Add to Cart
                      </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;