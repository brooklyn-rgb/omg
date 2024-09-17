import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="WHO IS OMG?"
                paragraph="O.M.G is a proudly 100% black, female-owned powerhouse dedicated to shaping the future of media talent, both in South Africa and beyond. We’re here to nurture sharp, media-savvy minds who not only consume but also dissect, produce, and lead in the ever-evolving world of media."
                mb="44px"
              />
              <p className="py-8 text-gray-400">
              At O.M.G, we lead with purpose by partnering with institutions and communities to offer world-class, career-focused education and skills development. We aim to shape job-ready, innovative individuals who value diversity, uphold high ethical standards, and thrive in any environment. Our programs foster entrepreneurial thinking, nurturing both formal and informal sectors with a focus on ethical skills and leadership.
              </p>

              <p className="py-8 text-gray-400">
              We empower future media leaders with the skills to excel, champion creativity in all media forms, and explore how media influences society and culture. O.M.G leads media innovation, promotes the open exchange of knowledge and ideas, and knows how to captivate audiences with engaging, creative content.
              </p>

                <h2 className="py-8 text-2xl font-bold ">
                  O.M.G Mission
                </h2>
              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="#1 Intentionally Strategic: Through various institutions & communities, we will" />
                    <List text="v lead in providing top-quality, career-focused education and skills development programs." />
                    <List text="#2 Intentionally Impactful: O.M.G aims to produce learners/brands that are  " />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="v employable, have broad analytical and work readiness skills, value diversity, uphold high ethical standards, and are innovative and entrepreneurial." />
                    <List text="#3 Intentionally Entrepreneurial: O.M.G Programs will:" />
                    <List text="v   Offer programs applicable to our developing economy.                                     
                        " />

                  </div>
                        <p>
                        v   Instill an entrepreneurial and new media mindset within both formal and informal sectors.
                        v   Include experiential learning and apply skills ethically within communities.
                        v   Contribute to progressive leadership in Further Education & Training.
                        </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
