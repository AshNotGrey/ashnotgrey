import { HakiAttribution, nameBrand, socials } from "../constants";

const Footer = () => {
  const socialIcons = [
    { name: "Github", icon: "github.svg" },
    { name: "X", icon: "x.svg" },
    { name: "Instagram", icon: "instagram.svg" },
    { name: "LinkedIn", icon: "linkedin.svg" },
    { name: "Linktree", icon: "linktree.svg" },
  ];

  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex flex-wrap md:flex-row-reverse justify-between items-center gap-5'>
      <div className='flex gap-3'>
        {socialIcons.map(({ name, icon }) => (
          <a key={name} target='_blank' rel='noreferrer' href={socials[name]} title={name}>
            <div className='social-icon'>
              <img src={`/assets/${icon}`} alt={name} className='w-1/2 h-1/2' />
            </div>
          </a>
        ))}
      </div>
      {/* Replace with actual HAKI logo and link */}
      <a
        href={HakiAttribution.link}
        target='_blank'
        rel='noreferrer'
        className='flex gap-1'
        title='HakiAttribution'>
        <p className='text-white-500'>{HakiAttribution.text}</p>
        <img src='/assets/Sigil.svg' alt='Haki' className='w-5 h-5' />
      </a>
      <p className='text-white-500'>{`© ${new Date().getFullYear()} ${nameBrand}. All rights reserved.`}</p>
    </section>
  );
};

export default Footer;
