'use client'

import Image from 'next/image';
import database from '../helpers/products.json'
import { fCurrency } from "./utils/formatNumber";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  return (
    <div
      className="
        grid
        grid-cols-3
        gap-4
        p-6
        max-md:grid-cols-2
        max-sm:grid-cols-1
      "
    >
      {
        database.map((x: any, indexP: number) => (
          <div
            className="
              flex
              flex-col
              rounded-md
              border
              overflow-hidden
              h-[450px]
              cursor-pointer
            "
            key = { indexP }
            onClick={()=> router.push(`/productDetail/${x.name}`)}
          >
            <div
              className="
                bg-gray-50
                flex-1
                flex
                overflow-hidden
                w-full
                justify-center
                relative
              "
            >
              {/* <img
                className="
                  max-h-full
                  object-contain
                  object-center
                "
                src = { x.images[0].url }
              /> */}
              <Image
                  src = { x.images[0].url }
                  alt = ""
                  fill
                  sizes="100%"
                  style={{
                    width: "100%",
                    objectFit: "contain"
                  }}
                  className='
                    hover:scale-110
                    duration-500
                    transition-transform
                  '
                  priority
              />
            </div>
            <div
              className="
                border-t
                p-4
                flex
                flex-col
              "
            >
              <span
                className="
                  text-gray-500
                "
              >{x.name}</span>
              <span
                className="
                  text-gray-600
                  font-semibold
                "
              >
                {fCurrency(x.price)}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  );
}
