import styles from '../styles/Home.module.scss';
import cx from 'classnames';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<h1 className={styles.title}>
				<span>
					Citizens of Europe, the leadership of the Russian Federation, represented by President Putin, launched a full-scale war against Ukraine on February
					24, 2022 at 5:00 am.{' '}
				</span>
			</h1>
			<p className={styles.paragraph}>
				The morning in the Ukrainian cities on February 24 began with massive missile attacks on all strategic facilities in all major cities of the country.{' '}
				<span>Families and children woke up from explosions!</span> It’s hard to describe in words.The attack has been going on for more than 3 days and it
				doesn’t seem to end anytime soon. The population is trying to escape, people are hiding in basements, someone is leaving, leaving their homes and their
				history, <span>someone does not know what to do…</span>
			</p>

			<div className={styles.row__quote}>
				{/* eslint-disable-next-line */}
				<img src='/quote.svg' alt='quote' />
				<p className={cx([styles.paragraph, styles.quote])}>
					For 30 years now, Ukraine has been an independent country, and we are a happy and honest people who, if necessary, will fight for their rights, we
					don’t need the help of someone’s “peaceful army”, we DO NOT NEED to be saved by them!
				</p>
			</div>
			<a href='#money' className={styles.button}>
				Help Ukrainians!
			</a>
			{/* eslint-disable-next-line */}
			<img className={styles.hero__arrow} src='https://img.icons8.com/dotty/80/000000/double-down.png' />
		</div>
	);
};

export default Hero;
