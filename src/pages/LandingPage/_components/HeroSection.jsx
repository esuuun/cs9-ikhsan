import { motion } from "motion/react";
import { Button } from "../../../components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function HeroSection() {
  const floatingAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="bg-background relative w-full overflow-hidden bg-background">
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="mb-4 md:mb-6 text-4xl md:text-6xl font-bold text-gray-900"
        >
          Shop the Best Deals Online
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="mx-auto mb-6 md:mb-10 max-w-2xl text-lg md:text-xl text-gray-600"
        >
          Discover top-rated products at unbeatable prices. Shop now and grab
          the best deals before they're gone!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2,
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <a href="/products">
            <Button className="rounded-full bg-primary px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-medium text-white hover:bg-background hover:text-primary">
              Shop Now <ShoppingBag />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Product imgs - Only visible on medium screens and up */}
      <div className="relative mx-auto max-w-6xl hidden md:block">
        {/* Laptop - Top Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute right-20 top-0 h-48 w-48 lg:h-64 lg:w-64 rounded-full bg-slate-300"
        >
          <div className="absolute -bottom-4 left-0 rounded-lg bg-white p-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div>
                <p className="font-medium">Premium Laptop</p>
                <p className="text-xs text-gray-500">Ultra-thin Design</p>
              </div>
            </div>
          </div>
          <motion.img
            variants={floatingAnimation}
            animate="animate"
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/gray/non-touch/notebook-laptop-xps-16-9640-nt-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1344&qlt=100,1&resMode=sharp2&size=1344,804&chrss=full"
            alt="Premium Laptop"
            className="w-full h-full object-contain"
          />
        </motion.div>
        {/* Smartphone - Bottom Right  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute bottom-0 right-0 h-40 w-40 lg:h-56 lg:w-56 rounded-full bg-blue-300"
        >
          <motion.img
            variants={floatingAnimation}
            animate="animate"
            src="https://images.samsung.com/is/image/samsung/p6pim/id/2501/gallery/id-galaxy-s25-s931-sm-s931blbqxid-thumb-544655663?$264_264_PNG$"
            alt="Smart Phone"
            className="w-full h-full object-contain"
          />
          <div className="absolute -left-4 top-10 rounded-lg bg-white p-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div>
                <p className="text-sm lg:font-medium">Smart Phone</p>
                <p className="text-xs text-gray-500">Latest Model</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Headphones - Bottom Center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.1,
          }}
          className="absolute left-1/2 h-48 w-48 lg:h-60 lg:w-60 -translate-x-1/2 rounded-full bg-gray-200"
        >
          <motion.img
            variants={floatingAnimation}
            animate="animate"
            src="https://mondobydefunc.com/nitropack_static/wuyEnGyyRDOqmYfbIcHbioVdGXdGjXng/assets/images/optimized/rev-e5bf10e/mondobydefunc.com/wp-content/uploads/2024/04/mondo-over-ear-bluetooth-headphones-transparent-product.png"
            alt="Wireless Headphones"
            className="w-full h-full object-contain"
          />
          <div className="absolute -top-4 left-10 rounded-lg bg-white p-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div>
                <p className="text-sm lg:font-medium">Wireless Headphones</p>
                <p className="text-xs text-gray-500">Noise Cancelling</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Bag - Left Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.4,
          }}
          className="absolute left-0 top-20 h-48 w-48 lg:h-64 lg:w-64 rounded-full bg-green-200"
        >
          <motion.img
            variants={floatingAnimation}
            animate="animate"
            src="https://www.freeiconspng.com/thumbs/bag-png/clothing-bag-png-1.png"
            alt="Designer Bag"
            className="w-full h-full object-contain"
          />
          <div className="absolute -right-4 top-10 rounded-lg bg-white p-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div>
                <p className="text-sm lg:font-medium">Designer Bag</p>
                <p className="text-xs text-gray-500">Limited Edition</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Smartwatch - Bottom Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.7,
          }}
          className="absolute bottom-0 left-0 h-40 w-40 lg:h-56 lg:w-56 rounded-full bg-yellow-200"
        >
          <div className="flex h-full items-center justify-center">
            <motion.img
              variants={floatingAnimation}
              animate="animate"
              src="https://static.vecteezy.com/system/resources/previews/050/177/034/non_2x/smart-watch-isolated-on-transparent-background-png.png"
              alt="Smart Watch"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -right-4 bottom-10 rounded-lg bg-white p-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div>
                <p className="text-sm lg:font-medium">Smart Watch</p>
                <p className="text-xs text-gray-500">Fitness Tracker</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Product Grid - Only visible on smaller screens */}
      <div className="md:hidden px-4 py-8 grid grid-cols-2 gap-6">
        <div className="aspect-square rounded-xl bg-slate-300 flex items-center justify-center relative p-4">
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/gray/non-touch/notebook-laptop-xps-16-9640-nt-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1344&qlt=100,1&resMode=sharp2&size=1344,804&chrss=full"
            alt="Premium Laptop"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white p-2 rounded-lg shadow">
            <p className="font-medium text-sm">Premium Laptop</p>
          </div>
        </div>
        <div className="aspect-square rounded-xl bg-blue-300 flex items-center justify-center relative p-4">
          <img
            src="https://images.samsung.com/is/image/samsung/p6pim/id/2501/gallery/id-galaxy-s25-s931-sm-s931blbqxid-thumb-544655663?$264_264_PNG$"
            alt="Smart Phone"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white p-2 rounded-lg shadow">
            <p className="font-medium text-sm">Smart Phone</p>
          </div>
        </div>
        <div className="aspect-square rounded-xl bg-gray-200 flex items-center justify-center relative p-4">
          <img
            src="https://mondobydefunc.com/nitropack_static/wuyEnGyyRDOqmYfbIcHbioVdGXdGjXng/assets/images/optimized/rev-e5bf10e/mondobydefunc.com/wp-content/uploads/2024/04/mondo-over-ear-bluetooth-headphones-transparent-product.png"
            alt="Wireless Headphones"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white p-2 rounded-lg shadow">
            <p className="font-medium text-sm">Wireless Headphones</p>
          </div>
        </div>
        <div className="aspect-square rounded-xl bg-yellow-200 flex items-center justify-center relative p-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/050/177/034/non_2x/smart-watch-isolated-on-transparent-background-png.png"
            alt="Smart Watch"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white p-2 rounded-lg shadow">
            <p className="font-medium text-sm">Smart Watch</p>
          </div>
        </div>
      </div>

      {/* Spacer for the floating elements */}
      <div className="hidden md:block h-[400px] lg:h-[500px]"></div>
    </div>
  );
}
