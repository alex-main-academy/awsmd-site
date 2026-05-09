import Image from 'next/image';

import './contact.scss';

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className='title contact__title'>
          We would love to hear <span className='title--decorative'>from you.</span>
        </h2>
        <p className='contact__text'>
          Feel free to reach our if you want to collaborate with us, or simply have a chat
        </p>
        <button className="button button--dark">
          Become a client
          <Image
            className="button__icon"
            src="/icons/arrow-right-top-white.svg"
            width="8"
            height="8"
            alt=""
          />
        </button>
      </div>
    </section>
  )
}