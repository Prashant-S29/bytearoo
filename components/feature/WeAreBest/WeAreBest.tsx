'use client';
import { circle_dice } from '~/public';

import React, { useLayoutEffect, useRef } from 'react';

// gsap and framer motion utils
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import { motion } from 'framer-motion';
import Image from 'next/image';

// export const WorkSlider = () => {
export const WeAreBest: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const circleImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: slider.current,
        scrub: 1,
        start: 'top top',
        end: () => '+=' + slider.current?.offsetWidth,
      },
    });

    timeline.fromTo(
      circleImageRef.current,
      {
        // path
        rotate: 0,
      },
      {
        rotate: 360,
      },
      0,
    );

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * panels.length,
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + slider.current?.offsetWidth,
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={container} className="relative hidden min-h-screen w-full overflow-hidden lg:block">
        <div ref={slider} className="flex w-[200vw] xl:w-[150vw]">
          <div className="panel relative flex h-screen w-[200vw] flex-col xl:w-[150vw]">
            <div className="absolute top-[50%] left-[200px] flex -translate-y-[50%] gap-2 p-5 sm:left-[300px] lg:left-[10%]">
              <div className="flex h-screen w-full items-center gap-[70px] overflow-hidden p-[150px]">
                {/* <Image src={logo} alt="logo" width={162} height={108} className="min-w-[162px]" /> */}
                <svg
                  width="223"
                  height="172"
                  viewBox="0 0 223 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-[162px]"
                >
                  <path
                    d="M90.4029 152.126C99.7572 138.455 161.576 28.1373 166.581 19.2009C166.82 18.7745 166.973 18.3805 167.089 17.9059C170.188 5.26896 161.815 1.11682 157.153 0.62603H99.4027C86.8161 0.0787867 88.2466 5.72902 91.0614 9.38243C91.5853 10.0625 92.329 10.5221 93.0682 10.9586C99.1583 14.5549 99.5142 24.2253 96.4027 30.626C93.1035 37.413 46.9027 116.126 46.9027 116.126C46.9027 116.126 26.6529 150.626 8.65289 160.376C-5.74711 168.176 2.65289 171.126 8.65289 171.626H41.6529C72.2529 172.826 80.6527 166.376 90.4029 152.126Z"
                    fill="#F25533"
                  />
                  <path
                    d="M149.36 72.5891C152.824 66.5891 161.484 66.5891 164.948 72.5891L197.424 128.839C208.394 147.839 194.682 171.589 172.742 171.589H107.79C100.862 171.589 96.532 164.089 99.9961 158.089L149.36 72.5891Z"
                    fill="#F25533"
                  />
                </svg>

                <p className="text-[257px] leading-0 font-bold">We</p>
                <motion.svg
                  width="296"
                  height="150"
                  viewBox="0 0 305 146"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    // className={}
                    d="M73.3566 72.8454L78.1151 73.0371L73.3566 72.8454ZM101.534 5.37908L100.436 10.0132L101.534 5.37908ZM120.186 72.8454L115.431 73.1002L115.431 73.1041L120.186 72.8454ZM164.5 83.5L167.438 87.2478L164.5 83.5ZM247.101 76C247.101 90.0275 258.472 101.399 272.5 101.399C286.528 101.399 297.899 90.0275 297.899 76C297.899 61.9725 286.528 50.6009 272.5 50.6009C258.472 50.6009 247.101 61.9725 247.101 76ZM0.643401 129.572C12.885 130.824 31.4308 129.633 47.372 121.74C63.6365 113.687 77.0838 98.6474 78.1151 73.0371L68.5981 72.6538C67.7245 94.3492 56.6987 106.494 43.1458 113.205C29.2694 120.075 12.6534 121.226 1.61246 120.097L0.643401 129.572ZM78.1151 73.0371C79.3037 43.5195 82.6697 26.6784 87.0948 17.7467C89.2543 13.3878 91.4553 11.3486 93.3634 10.4128C95.2337 9.49552 97.4837 9.31395 100.436 10.0132L102.631 0.744943C98.2363 -0.29594 93.588 -0.305821 89.1694 1.86117C84.7887 4.00961 81.3103 7.96722 78.5601 13.5184C73.1657 24.4068 69.7907 43.0391 68.5981 72.6538L78.1151 73.0371ZM100.436 10.0132C102.123 10.4126 104.228 12.0931 106.378 16.4209C108.46 20.613 110.11 26.3651 111.392 33.0188C113.95 46.2883 114.833 61.9372 115.431 73.1002L124.942 72.5907C124.349 61.5295 123.446 45.231 120.745 31.2163C119.398 24.2279 117.551 17.5036 114.908 12.1836C112.333 6.99906 108.485 2.13135 102.631 0.744943L100.436 10.0132ZM115.431 73.1041C115.856 80.9112 115.959 88.9153 116.141 96.6832C116.32 104.373 116.576 111.852 117.331 118.307C118.07 124.625 119.349 130.636 121.975 134.99C123.338 137.25 125.182 139.266 127.685 140.549C130.226 141.853 133.048 142.196 135.978 141.753L134.556 132.335C133.279 132.528 132.528 132.329 132.032 132.074C131.496 131.8 130.837 131.241 130.132 130.072C128.621 127.567 127.504 123.298 126.791 117.2C126.094 111.24 125.843 104.169 125.663 96.4608C125.485 88.8303 125.377 80.588 124.942 72.5868L115.431 73.1041ZM135.978 141.753C142.247 140.807 145.969 136.707 148.307 131.989C150.523 127.518 151.84 121.809 153.111 116.472C155.811 105.138 158.663 94.1282 167.438 87.2478L161.562 79.7522C149.764 89.0019 146.412 103.494 143.846 114.265C142.484 119.98 141.402 124.474 139.773 127.76C138.267 130.8 136.701 132.012 134.556 132.335L135.978 141.753ZM167.438 87.2478C169.983 85.2529 174.713 83.5499 181.867 82.3547C188.855 81.187 197.488 80.6027 207.246 80.3591C226.9 79.8687 249.958 80.7623 272.5 80.7623V71.2377C250.594 71.2377 226.712 70.3457 207.008 70.8375C197.087 71.085 187.937 71.6837 180.297 72.9602C172.822 74.2092 166.078 76.2115 161.562 79.7522L167.438 87.2478Z"
                    stroke="#F25533"
                    strokeWidth={2}
                    initial={{ pathLength: 0 }}
                    whileInView={{
                      pathLength: 1,
                      transition: {
                        duration: 2,
                        ease: 'easeInOut',
                      },
                    }}
                    viewport={{ once: true }}
                  />
                </motion.svg>

                <p className="text-[257px] leading-0 font-bold">are</p>
                <motion.svg
                  width="181"
                  height="180"
                  viewBox="0 0 181 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="90.5" cy="90" r="89.5" stroke="#71717A" />
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M153.779 89.5249C119.279 89.4959 91.3206 61.5192 91.3206 27.0125C91.3206 61.5247 63.3528 89.5048 28.8452 89.5249C63.3528 89.545 91.3205 117.525 91.3205 152.037L91.3206 152.037C91.3206 117.531 119.279 89.5539 153.779 89.5249Z"
                    fill="#F25533"
                    strokeWidth={5}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.svg>

                <p className="text-[257px] leading-0 font-bold">best</p>
                <Image
                  ref={circleImageRef}
                  src={circle_dice}
                  alt="circle_dice"
                  width={180}
                  height={180}
                  className="min-w-[180px]"
                />
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-[55px] left-[55px] z-50 flex h-2 w-[calc(100vw-110px)] items-center justify-center gap-2">
            <div className="relative flex w-[200px] items-center">
              <div className="absolute h-[2px] w-full rounded-full bg-gray-300 dark:bg-[#808080]" />
              <motion.div ref={circleImageRef} className="absolute h-[2px] w-full rounded-full bg-black dark:bg-white" />
            </div>
          </div> */}
        </div>
      </div>

      {/* mobile */}

      <div className="flex min-h-screen w-full flex-col -space-y-[70px] p-[30px] max-[450px]:hidden max-[450px]:-space-y-0 lg:hidden">
        <section className="flex items-center gap-8">
          <p className="text-[150px] leading-none font-bold max-[450px]:text-[100px] sm:text-[180px] md:text-[200px]">
            We
          </p>
          <motion.svg
            width="200"
            height="150"
            viewBox="0 0 305 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-[450px]:hidden max-[450px]:w-[150px]"
          >
            <motion.path
              // className={}
              d="M73.3566 72.8454L78.1151 73.0371L73.3566 72.8454ZM101.534 5.37908L100.436 10.0132L101.534 5.37908ZM120.186 72.8454L115.431 73.1002L115.431 73.1041L120.186 72.8454ZM164.5 83.5L167.438 87.2478L164.5 83.5ZM247.101 76C247.101 90.0275 258.472 101.399 272.5 101.399C286.528 101.399 297.899 90.0275 297.899 76C297.899 61.9725 286.528 50.6009 272.5 50.6009C258.472 50.6009 247.101 61.9725 247.101 76ZM0.643401 129.572C12.885 130.824 31.4308 129.633 47.372 121.74C63.6365 113.687 77.0838 98.6474 78.1151 73.0371L68.5981 72.6538C67.7245 94.3492 56.6987 106.494 43.1458 113.205C29.2694 120.075 12.6534 121.226 1.61246 120.097L0.643401 129.572ZM78.1151 73.0371C79.3037 43.5195 82.6697 26.6784 87.0948 17.7467C89.2543 13.3878 91.4553 11.3486 93.3634 10.4128C95.2337 9.49552 97.4837 9.31395 100.436 10.0132L102.631 0.744943C98.2363 -0.29594 93.588 -0.305821 89.1694 1.86117C84.7887 4.00961 81.3103 7.96722 78.5601 13.5184C73.1657 24.4068 69.7907 43.0391 68.5981 72.6538L78.1151 73.0371ZM100.436 10.0132C102.123 10.4126 104.228 12.0931 106.378 16.4209C108.46 20.613 110.11 26.3651 111.392 33.0188C113.95 46.2883 114.833 61.9372 115.431 73.1002L124.942 72.5907C124.349 61.5295 123.446 45.231 120.745 31.2163C119.398 24.2279 117.551 17.5036 114.908 12.1836C112.333 6.99906 108.485 2.13135 102.631 0.744943L100.436 10.0132ZM115.431 73.1041C115.856 80.9112 115.959 88.9153 116.141 96.6832C116.32 104.373 116.576 111.852 117.331 118.307C118.07 124.625 119.349 130.636 121.975 134.99C123.338 137.25 125.182 139.266 127.685 140.549C130.226 141.853 133.048 142.196 135.978 141.753L134.556 132.335C133.279 132.528 132.528 132.329 132.032 132.074C131.496 131.8 130.837 131.241 130.132 130.072C128.621 127.567 127.504 123.298 126.791 117.2C126.094 111.24 125.843 104.169 125.663 96.4608C125.485 88.8303 125.377 80.588 124.942 72.5868L115.431 73.1041ZM135.978 141.753C142.247 140.807 145.969 136.707 148.307 131.989C150.523 127.518 151.84 121.809 153.111 116.472C155.811 105.138 158.663 94.1282 167.438 87.2478L161.562 79.7522C149.764 89.0019 146.412 103.494 143.846 114.265C142.484 119.98 141.402 124.474 139.773 127.76C138.267 130.8 136.701 132.012 134.556 132.335L135.978 141.753ZM167.438 87.2478C169.983 85.2529 174.713 83.5499 181.867 82.3547C188.855 81.187 197.488 80.6027 207.246 80.3591C226.9 79.8687 249.958 80.7623 272.5 80.7623V71.2377C250.594 71.2377 226.712 70.3457 207.008 70.8375C197.087 71.085 187.937 71.6837 180.297 72.9602C172.822 74.2092 166.078 76.2115 161.562 79.7522L167.438 87.2478Z"
              stroke="#F25533"
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              whileInView={{
                pathLength: 1,
                transition: {
                  duration: 2,
                  ease: 'easeInOut',
                },
              }}
              viewport={{ once: true }}
            />
          </motion.svg>
        </section>
        <section className="flex items-center justify-center gap-8 max-[450px]:-mt-3 max-[450px]:justify-normal">
          <p className="text-[150px] leading-none font-bold max-[450px]:text-[100px] max-[350px]:text-[80px] sm:text-[180px] md:text-[200px]">
            are
          </p>
          <motion.svg
            width="100"
            height="180"
            viewBox="0 0 181 180"
            fill="none"
            className="mt-12 max-[450px]:mt-0 max-[450px]:hidden max-[450px]:w-[60px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="90.5" cy="90" r="89.5" stroke="#71717A" />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M153.779 89.5249C119.279 89.4959 91.3206 61.5192 91.3206 27.0125C91.3206 61.5247 63.3528 89.5048 28.8452 89.5249C63.3528 89.545 91.3205 117.525 91.3205 152.037L91.3206 152.037C91.3206 117.531 119.279 89.5539 153.779 89.5249Z"
              fill="#F25533"
              strokeWidth={5}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </motion.svg>
        </section>

        <section className="flex items-center justify-end gap-8 max-[450px]:mt-0 max-[450px]:justify-normal">
          <p className="text-[180px] leading-none font-bold max-[450px]:text-[120px] max-[350px]:text-[80px] sm:text-[220px] md:text-[257px]">
            best
          </p>
          <Image
            ref={circleImageRef}
            src={circle_dice}
            alt="circle_dice"
            width={180}
            height={180}
            className="mt-8 w-[80px] max-[450px]:hidden max-[350px]:mt-0 max-[350px]:w-[80px] sm:w-[120px]"
          />
        </section>
      </div>
    </>
  );
};
