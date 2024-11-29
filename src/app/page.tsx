'use client'

import Image from 'next/image';
import database from './helpers/products.json'
import { fCurrency } from "./utils/formatNumber";
import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div
      className="
        container
        mx-auto
        min-h-screen
        max-w-7xl
        border-x
      "
    >
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
        <div className="flex h-14 items-center px-6">
          <span
            className='
              font-semibold
              text-xl
            '
          >
            Tienda Online
          </span>
        </div>
      </header>
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
                    sizes="100vw"
                    style={{
                      width: "100%",
                      objectFit: "contain"
                    }}
                    className='
                      hover:scale-110
                      duration-500
                      transition-transform
                    '
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
    </div>
  );
}
