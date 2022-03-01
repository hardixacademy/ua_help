import styles from '../styles/Home.module.scss';
import cx from 'classnames';

const Text_two = () => {
	return (
		<div className={styles.text}>
			<h1 className={styles.title}>Don’t stay aside! Help us to save one’s life in Ukraine!</h1>

			<div className={styles.row__quote}>
				{/* eslint-disable-next-line */}
				<img src='/quote.svg' alt='quote' />
				<p className={cx([styles.paragraph, styles.quote])}>
					The invasion of Putin’s army into Ukraine and direct attack on its sovereignty keeps on bringing suffering to peaceful people, devastation in
					Ukrainian cities and death of children and civilians. The 24th of February will never be forgotten, and all heroes of Ukraine will remain in our
					hearts forever!
				</p>
			</div>

			<p className={styles.paragraph}>
				We know that you feel our pain because you know Ukrainians, who are your friends, colleagues, neighbours or even part of your family. We as Ukrainians
				have no words to describe how grateful we are for your support! We rely on each one of you!
				<br />
				<br />
				We are collecting donations from all over the world to support the Ukrainian army and refugees, who bravely fight for Ukraine and for peace in the
				European Union. The war that Putin started in Ukraine is a threat for the whole world, his regime is based on aggression, devastation, and death.
				<br />
				<br />
				Right now, Ukrainians do their best to stand up against 2 enemies right now in many regions simultaneously - military forces with heavy ammunition led
				by Putin and Lukashenko. Our defenders of Ukraine are in constant need of more equipment, vests, knee pads, food, hygiene necessities. Meanwhile, women
				are giving birth to the babies in the Kyiv underground, where hygienical agents and medical equipment is not an abundance anymore. During war there are
				always shortages. Our goal is to collect funds and provide these necessities for Ukrainian refugees and the Ukrainian Army.
				<br />
				<br />
				We are your neighbours, we share the same values, we have a common history. We count on your support! Every piece of support matters! Stand with
				Ukraine!
				<br />
				<br />
				Slava Ukraini!
			</p>
		</div>
	);
};

export default Text_two;
