import { useParams, useRouter } from "next/navigation"
import database from '../../../helpers/products.json'
import { useEffect, useState } from "react";
import Image from "next/image";
import { fCurrency } from "@/app/utils/formatNumber";
import { CircleArrowLeft } from "lucide-react";

export default function ProductDetailComponent() {

    const params = useParams();
    const [product, setProduct] = useState<any>({})
    const [ indexImage, setIndexImage ] = useState(0)
    const router = useRouter()
    
    
    const handleIndex = ( index: number ) => {
        setIndexImage(index)
    }
    
    useEffect(() => {
        if (database.length > 0 && params.id !== undefined) {
            let name = params.id as any;
            name = name.replaceAll("%20", " ").replace("%C3%91","Ñ")
            const filter = database.filter((x: any) => x.name === name)
            if (filter.length > 0) {
                setProduct(filter[0])
            }
            else {
                setProduct({})
            }
        }
    }, [params.id])

    return (
        <>
            <div
                className="
                    px-6
                    pt-6
                    cursor-pointer
                "
                onClick={()=> router.push('/')}
            >
                <CircleArrowLeft/>
            </div>
            {
                product.name !== undefined ?
                    <div
                        className="
                            flex
                            flex-row
                            px-6
                            pt-6
                            gap-2
                        "
                    >
                        <div
                            className="
                                flex-1
                                flex
                                flex-col
                                gap-2
                                "
                                >
                            <div
                                className="
                                    relative
                                    h-[450px]
                                    border
                                "
                            >
                                <Image
                                    src={product.images[indexImage].url}
                                    alt=""
                                    fill
                                    sizes="100%"
                                    style={{
                                        width: "100%",
                                        objectFit: "contain"
                                    }}
                                    priority
                                />
                            </div>
                            <div
                                className="
                                    relative
                                    h-[150px]
                                    flex
                                    justify-start
                                    gap-2
                                "
                            >
                                {
                                    product.images.length > 0 &&
                                    product.images.map((x: any, index: number) => (
                                        <div
                                            key={index}
                                            className="
                                                w-[150px]
                                                relative
                                                h-[150px]
                                                cursor-pointer
                                            "
                                            onClick={()=> handleIndex(index)}
                                        >
                                            <Image
                                                src={x.url}
                                                alt=""
                                                fill
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                                priority
                                                sizes="100%"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div
                            className="
                                flex-1
                                flex
                                flex-col
                                gap-2
                                relative
                                px-2
                            "
                        >
                            <span
                                className="
                                    font-semibold
                                "
                            >
                                {
                                    product.name
                                }
                            </span>
                            <span
                                className="
                                    font-normal
                                    text-gray-500
                                "
                            >
                                {
                                    fCurrency(product.price)
                                }
                            </span>
                        </div>
                    </div>
                    :
                    <div
                        className="
                        p-6
                    "
                    >
                        <span
                            className="
                            text-2xl
                            font-normal
                        "
                        >
                            Product not found
                        </span>
                    </div>
            }
        </>
    )
}