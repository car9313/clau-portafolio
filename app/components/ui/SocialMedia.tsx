import Image from "next/image"

const SocialMediaIcon = ({ urlImagen }: { urlImagen: string }) => {
  return (
    <div className="w-12 h-12  cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-primaryColor rounded-lg border border-black-300  text-primary text-xl  hover:bg-opacity-40 hover:-translate-y-1 transition-all duration-300"                >
      <Image src={urlImagen} alt="icons" width={25} height={25} />
    </div>

  )
}
export default SocialMediaIcon