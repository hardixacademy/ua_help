import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.scss';
import cx from 'classnames';
import useInView from 'react-cool-inview';
import Image from 'next/image';

const Hero = dynamic(() => import('../components/Hero'));
const Text_one = dynamic(() => import('../components/Text_one'));
const Text_two = dynamic(() => import('../components/Text_two'));
const Videos = dynamic(() => import('../components/Videos'));
const Money = dynamic(() => import('../components/Money'));
const Footer = dynamic(() => import('../components/Footer'));

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const images2 = [11, 19, 20, 21, 22, 23, 24, 25, 27, 29, 30, 31];

const Home = () => {
	const [img, setImg] = useState(null);
	const router = useRouter();

	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => {
			unobserve();
		},
	});

	useEffect(() => {
		router.replace('/');
	}, []); // eslint-disable-line

	return (
		<div className={styles.container}>
			<Head>
				<title>Help people arriving in Poland from Ukraine</title>
				<meta
					name='description'
					content='The morning in the Ukrainian cities on February 24 began with massive missile attacks on all strategic facilities in all major cities of the country. Families and children woke up from explosions! It’s hard to describe in words.The attack has been going on for more than 3 days and it doesn’t seem to end anytime soon. The population is trying to escape, people are hiding in basements, someone is leaving, leaving their homes and their history, someone does not know what to do…'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Hero />

				<div className={styles.before}>
					<h2 className={styles.title}>A month ago Kyiv looked like this:</h2>
					<Image src='/kyiv_before-min.jpg' alt='kyiv_before' width='800' height='300' layout='responsive' />
				</div>

				<div className={styles.after}>
					<h2 className={styles.title}>
						<span>Now the capital of Ukraine looks like this:</span>
					</h2>
					<div className={styles.row}>
						{images.map((key) => (
							<div key={key} onClick={() => setImg(key)} className={styles.cover}>
								{/* eslint-disable-next-line */}
								<img src={`/${key}-min.jpg`} alt={`kyiv_in_war_${key}`} />
							</div>
						))}
					</div>
				</div>

				<Text_one />

				<div className={styles.after}>
					<div className={styles.row}>
						{images2.slice(0, 6).map((key) => (
							<div key={key} onClick={() => setImg(key)} className={styles.cover}>
								{/* eslint-disable-next-line */}
								<img src={`/${key}-min.jpg`} alt={`kyiv_in_war_${key}`} />
							</div>
						))}

						<div onClick={() => setImg(26)} className={cx([styles.cover, styles.big])}>
							{/* eslint-disable-next-line */}
							<img src={`/26-min.jpg`} alt={`kyiv_in_war_26`} />
						</div>

						{images2.slice(6, 12).map((key) => (
							<div key={key} onClick={() => setImg(key)} className={styles.cover}>
								{/* eslint-disable-next-line */}
								<img src={`/${key}-min.jpg`} alt={`kyiv_in_war_${key}`} />
							</div>
						))}

						<div onClick={() => setImg(17)} className={cx([styles.cover, styles.big])}>
							{/* eslint-disable-next-line */}
							<img src={`/17-min.jpg`} alt={`kyiv_in_war_17`} />
						</div>
					</div>
				</div>

				{img && (
					<div className={styles.popup} onClick={() => setImg(null)}>
						<div className={styles.popup__content}>
							<div className={styles.popup__close} onClick={() => setImg(null)}>
								<span>X</span>
							</div>
							{/* eslint-disable-next-line */}
							<img src={`/${img}-min.jpg`} alt={`kyiv_in_war_${img}`} />
						</div>
					</div>
				)}

				<Text_two />

				<div ref={observe}>{inView && <Videos />}</div>

				<Money />
			</main>

			<Footer />
		</div>
	);
};

export default Home;
