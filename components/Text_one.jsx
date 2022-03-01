import styles from '../styles/Home.module.scss';
import cx from 'classnames';

const Text_one = () => {
	return (
		<div className={styles.text}>
			<h1 className={styles.title}>
				<span>THIS IS WAR!</span> <br />
				We, Ukrainians, we defend OUR land!
			</h1>
			<div className={styles.row__quote}>
				{/* eslint-disable-next-line */}
				<img src='/quote.svg' alt='quote' />
				<p className={cx([styles.paragraph, styles.quote])}>
					Russian soldiers came to our land, we didn’t come to them. Our soldiers are determined to fight to the last, but the Russians do not share our mood.
					We want to stop this senseless and insane slaughter.
				</p>
			</div>

			<a href='#money' className={styles.button}>
				Help Ukrainians!
			</a>
		</div>
	);
};

export default Text_one;
