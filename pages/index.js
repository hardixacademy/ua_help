import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import cx from 'classnames';
import { useState } from 'react';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const images2 = [11, 19, 20, 21, 22, 23, 24, 25, 27, 29, 30, 31];

const Home = () => {
	const [img, setImg] = useState(null);
	const [img2, setImg2] = useState(null);

	return (
		<div className={styles.container}>
			<Head>
				<title>Help people arriving in Poland from Ukraine</title>
				<meta
					name='description'
					content='Мы знаем, что жители России в какой-то мере не понимают, что тут происходит, и обращаемся к вам с данной информацией. Ваша пропаганда не знает
							границ в искажении фактов, подмене фактов и понятий во имя каких-то непонятных имперских целей и настроений руководства вашей страны.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div className={styles.hero}>
					<h1 className={styles.title}>
						<span>
							Россияне, руководство вашей страны в лице президента Путина начало полномасштабную Войну против Украины 24 февраля 2022 года в 5:00 утра.
						</span>
					</h1>
					<p className={styles.paragraph}>
						Мы, украинцы, не хотим с вами воевать, <span>мы защищаем СВОЮ землю!</span> Уже 30 лет Украина — это независимая страна, а мы — счастливый и честный
						народ, который сам, если нужно, борется за свои права, нам не нужна помощь вашей «мирной армии», <span>нас НЕ НУЖНО спасать!</span>
					</p>

					<div className={styles.row__quote}>
						<img src='/quote.svg' alt='quote' />
						<p className={cx([styles.paragraph, styles.quote])}>
							Мы знаем, что жители России в какой-то мере не понимают, что тут происходит, и обращаемся к вам с данной информацией. Ваша пропаганда не знает
							границ в искажении фактов, подмене фактов и понятий во имя каких-то непонятных имперских целей и настроений руководства вашей страны.
						</p>
					</div>
					<a href='#money' className={styles.button}>
						Помочь украинцам!
					</a>

					<img className={styles.hero__arrow} src='https://img.icons8.com/dotty/80/000000/double-down.png' />
				</div>

				<div className={styles.before}>
					<h1 className={styles.title}>Киев до нападения выглядел так:</h1>
					<img src='/kyiv_before.jpg' alt='kyiv_before' />
				</div>

				<div className={styles.after}>
					<h1 className={styles.title}>
						<span>Теперь столица Украины выглядит так:</span>
						<div className={styles.row}>
							{images.map((key) => (
								<div key={key} onClick={() => setImg(key)} className={styles.cover}>
									<img src={`/${key}.jpg`} alt={`kyiv_in_war_${key}`} />
								</div>
							))}
						</div>
					</h1>
				</div>

				{img && (
					<div className={styles.popup} onClick={() => setImg(null)}>
						<div className={styles.popup__content}>
							<div className={styles.popup__close} onClick={() => setImg(null)}>
								<span>X</span>
							</div>
							<img src={`/${img}.jpg`} alt={`kyiv_in_war_${img}`} />
						</div>
					</div>
				)}

				<div className={styles.text}>
					<h1 className={styles.title}>
						<span>ЭТО ВОЙНА!</span> <br />
						Война Российской власти против украинского мирного населения! <br />
						Мы, украинцы, не хотим с вами воевать, мы защищаем СВОЮ землю!
					</h1>
					<p className={styles.paragraph}>
						Уже 30 лет Украина — это независимая страна, а мы — счастливый и честный народ, который сам, если нужно, борется за свои права, нам не нужна помощь
						вашей «мирной армии», <span>нас НЕ НУЖНО спасать!</span>
					</p>
				</div>

				<div className={styles.after}>
					<div className={styles.row}>
						{images2.slice(0, 6).map((key) => (
							<div key={key} onClick={() => setImg2(key)} className={styles.cover}>
								<img src={`/${key}.webp`} alt={`kyiv_in_war_${key}`} />
							</div>
						))}

						<div onClick={() => setImg2(26)} className={cx([styles.cover, styles.big])}>
							<img src={`/26.webp`} alt={`kyiv_in_war_26`} />
						</div>

						{images2.slice(6, 12).map((key) => (
							<div key={key} onClick={() => setImg2(key)} className={styles.cover}>
								<img src={`/${key}.webp`} alt={`kyiv_in_war_${key}`} />
							</div>
						))}

						<div onClick={() => setImg2(17)} className={cx([styles.cover, styles.big])}>
							<img src={`/17.webp`} alt={`kyiv_in_war_17`} />
						</div>
					</div>
				</div>

				{img2 && (
					<div className={styles.popup} onClick={() => setImg2(null)}>
						<div className={styles.popup__content}>
							<div className={styles.popup__close} onClick={() => setImg2(null)}>
								<span>X</span>
							</div>
							<img src={`/${img2}.webp`} alt={`kyiv_in_war_${img2}`} />
						</div>
					</div>
				)}

				<div
				// className={styles.invasion}
				>
					<h1 className={styles.title}>
						Мы с вами соседи и имеем общую историю в прошлом и настоящем. Мы хотим, чтобы вы знали, что мы защищаемся от агрессии ваших войск, а не наоборот!
					</h1>

					<div className={styles.row__quote}>
						<img src='/quote.svg' alt='quote' />
						<p className={cx([styles.paragraph, styles.quote])}>
							Ваши солдаты пришли на нашу землю, а не мы к вам. Наши воины настроены бороться до последнего, а у ваших такого настроения нет. Мы хотим
							прекратить эту бессмысленную и безумную мясорубку.
						</p>
					</div>

					<p className={styles.paragraph}>
						Утро в наших городах 24 февраля началось с массовых ракетных ударов по всем стратегическим объектам во всех больших городах страны. Семьи и дети
						проснулись от взрывов! Это сложно описать словами. Атака продолжается уже больше суток, и нам кажется это надолго. Наше население пытается
						спасаться, люди прячутся в подвалах, кто-то уезжает, оставляя свои дома и свою историю, кто-то не знает, что делать…
					</p>
				</div>

				<div className={styles.videos}>
					<div className={styles.col}>
						<iframe
							id='youtubeiframe418293238'
							width='100%'
							height='540px'
							src='//youtube.com/embed/4XA60pQ53Rs?rel=0&fmt=18&html5=1&showinfo=0'
							frameBorder='0'
							allowFullScreen=''></iframe>

						<div className={styles.row}>
							<iframe
								id='youtubeiframe_1_418293831'
								width='100%'
								height='315'
								src='//youtube.com/embed/O6Mt629O6Kg?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>

							<iframe
								id='youtubeiframe_2_418293831'
								width='100%'
								height='315'
								src='//youtube.com/embed/Zk_b0CtGQYc?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>
						</div>

						<div className={styles.row}>
							<iframe
								id='youtubeiframe_1_418294228'
								width='100%'
								height='315'
								src='//youtube.com/embed/yhdtFnl2VJo?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>

							<iframe
								id='youtubeiframe_2_418294228'
								width='100%'
								height='315'
								src='//youtube.com/embed/pzF2Gx4VJo4?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>
						</div>

						<div className={styles.row}>
							<iframe
								id='youtubeiframe_1_418294338'
								width='100%'
								height='315'
								src='//youtube.com/embed/IFmgzuyHXYQ?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>

							<iframe
								id='youtubeiframe_2_418294338'
								width='100%'
								height='315'
								src='//youtube.com/embed/pLq5Gh_JKYc?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>
						</div>

						<div className={styles.row}>
							<iframe
								id='youtubeiframe_1_418295358'
								width='100%'
								height='315'
								src='//youtube.com/embed/vyWxrgdYDsc?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>

							<iframe
								id='youtubeiframe_2_418295358'
								width='100%'
								height='315'
								src='//youtube.com/embed/dEoRUrfLSBo?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>
						</div>

						<div className={styles.row}>
							<iframe
								id='youtubeiframe_1_418590546'
								width='100%'
								height='315'
								src='//youtube.com/embed/p9eOZKauR7U?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>

							<iframe
								id='youtubeiframe_2_418590546'
								width='100%'
								height='315'
								src='//youtube.com/embed/fvGg8ghH75w?rel=0&;fmt=18&;html5=1&;showinfo=0'
								frameBorder='0'
								allowFullScreen=''></iframe>
						</div>

						<iframe
							id='youtubeiframe418336616'
							width='100%'
							height='540px'
							src='//youtube.com/embed/G8I24KY74Pg?rel=0&;fmt=18&;html5=1&;showinfo=0'
							frameBorder='0'
							allowFullScreen=''></iframe>
					</div>
				</div>

				<div id='money' className={styles.money}>
					<h1 className={styles.title}>Реквизиты для помощи</h1>

					<h1 className={styles.proof}>
						Подтверждения нашей работы можно увидеть{' '}
						<a target='_blank' href='https://instagram.com/fenix_fundacja?utm_medium=copy_link' rel='noreferrer'>
							здесь!
						</a>
					</h1>

					<span>Криптовалютные счета:</span>
					<p>
						1. ETH ERC20: <br />
						0x1508ddb152ef0fbe2a97e39dae61b45ed82c0b64
						<br />
						<br />
						2. BTC:
						<br />
						333qoEF11PBd9pV52c9ubWAkZHQLoaub9U
						<br />
						<br />
						3. USDT ERC20:
						<br />
						0x1508ddb152ef0fbe2a97e39dae61b45ed82c0b64
						<br />
						<br />
						4. USDT TRC:
						<br />
						TC4EsXgyPJVBsaRMErXMXVRBEfg96Xym4R
						<br />
						<br />
						5. USDT OMNI:
						<br />
						3FVt6XZHaCtAGyZWXpUw1jGg3G9J8Gbd2k
					</p>
					<span>Банковские счета:</span>
					<p>
						1. EUR счёт:
						<br />
						PL35 1090 1014 0000 0001 4982 1914
						<br />
						<br />
						2. PLN счет:
						<br />
						PL02 1090 1014 0000 0001 4982 1926
						<br />
						<br />
						3. PLN счёт:
						<br />
						PL66 1090 1014 0000 0001 4982 1065
						<br />
						<br />
						4. EUR счет:
						<br />
						PL11 1090 1014 0000 0001 4982 1085
						<br />
						<br />
						5. SWIFT: WBK PP LPP
						<br />
						<br />
						6. ADRES: Al.Jana Pawła ll 17, Warsaw , Poland ,00-195
					</p>
					<span>Данные фонда:</span>
					<p>
						Fundacja FENIX
						<br />
						<br />
						Ul. Kościuszki 33/303,
						<br />
						05-500 Piaseczno, Polska
						<br />
						<br />
						KRS: 0000795318
						<br />
						NIP: 1231444743
						<br />
						REGON: 383907810
					</p>
				</div>
			</main>

			<footer className={styles.footer}>
				<p style={{ margin: 0 }} className={styles.code}>
					© 2022 Copyright{' '}
					<a target='_blank' href='https://noxu.solutions/' rel='noreferrer'>
						NOXU Solutions
					</a>
				</p>
			</footer>
		</div>
	);
};

export default Home;
