import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoSnapchat,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5';
import SocialItem from './SocialItem';
import styles from './styles.module.scss';

const Socials = () => {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>Stay Connected</h3>
        <ul>
          <SocialItem path={'/'}>
            <IoLogoFacebook />
          </SocialItem>
          <SocialItem path={'/'}>
            <IoLogoInstagram />
          </SocialItem>
          <SocialItem path={'/'}>
            <IoLogoTwitter />
          </SocialItem>
          <SocialItem path={'/'}>
            <IoLogoYoutube />
          </SocialItem>
          <SocialItem path={'/'}>
            <IoLogoPinterest />
          </SocialItem>
          <SocialItem path={'/'}>
            <IoLogoSnapchat />
          </SocialItem>
          <SocialItem path={'/'}>
            <IoLogoTiktok />
          </SocialItem>
        </ul>
      </section>
    </div>
  );
};

export default Socials;
