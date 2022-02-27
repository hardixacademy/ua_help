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
					content='Citizens of Europe, the leadership of the Russian Federation, represented by President Putin, launched a full-scale war against Ukraine on February 24, 2022 at 5:00 am.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div className={styles.hero}>
					<h1 className={styles.title}>
						<span>
							Citizens of Europe, the leadership of the Russian Federation, represented by President Putin, launched a full-scale war against Ukraine on
							February 24, 2022 at 5:00 am.{' '}
						</span>
					</h1>
					<p className={styles.paragraph}>
						The morning in the Ukrainian cities on February 24 began with massive missile attacks on all strategic facilities in all major cities of the
						country. <span>Families and children woke up from explosions!</span> It’s hard to describe in words.The attack has been going on for more than 3
						days and it doesn’t seem to end anytime soon. The population is trying to escape, people are hiding in basements, someone is leaving, leaving their
						homes and their history, <span>someone does not know what to do…</span>
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

				<div className={styles.before}>
					<h1 className={styles.title}>A month ago Kyiv looked like this:</h1>
					{/* eslint-disable-next-line */}
					<img src='/kyiv_before.jpg' alt='kyiv_before' />
				</div>

				<div className={styles.after}>
					<h1 className={styles.title}>
						<span>Now the capital of Ukraine looks like this:</span>
						<div className={styles.row}>
							{images.map((key) => (
								<div key={key} onClick={() => setImg(key)} className={styles.cover}>
									{/* eslint-disable-next-line */}
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
							{/* eslint-disable-next-line */}
							<img src={`/${img}.jpg`} alt={`kyiv_in_war_${img}`} />
						</div>
					</div>
				)}

				<div className={styles.text}>
					<h1 className={styles.title}>
						<span>THIS IS WAR!</span> <br />
						We, Ukrainians, we defend OUR land!
					</h1>
					<div className={styles.row__quote}>
						{/* eslint-disable-next-line */}
						<img src='/quote.svg' alt='quote' />
						<p className={cx([styles.paragraph, styles.quote])}>
							Russian soldiers came to our land, we didn’t come to them. Our soldiers are determined to fight to the last, but the Russians do not share our
							mood. We want to stop this senseless and insane slaughter.
						</p>
					</div>
				</div>

				<div className={styles.after}>
					<div className={styles.row}>
						{images2.slice(0, 6).map((key) => (
							<div key={key} onClick={() => setImg2(key)} className={styles.cover}>
								{/* eslint-disable-next-line */}
								<img src={`/${key}.webp`} alt={`kyiv_in_war_${key}`} />
							</div>
						))}

						<div onClick={() => setImg2(26)} className={cx([styles.cover, styles.big])}>
							{/* eslint-disable-next-line */}
							<img src={`/26.webp`} alt={`kyiv_in_war_26`} />
						</div>

						{images2.slice(6, 12).map((key) => (
							<div key={key} onClick={() => setImg2(key)} className={styles.cover}>
								{/* eslint-disable-next-line */}
								<img src={`/${key}.webp`} alt={`kyiv_in_war_${key}`} />
							</div>
						))}

						<div onClick={() => setImg2(17)} className={cx([styles.cover, styles.big])}>
							{/* eslint-disable-next-line */}
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
							{/* eslint-disable-next-line */}
							<img src={`/${img2}.webp`} alt={`kyiv_in_war_${img2}`} />
						</div>
					</div>
				)}

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
						We know that you feel our pain because you know Ukrainians, who are your friends, colleagues, neighbours or even part of your family. We as
						Ukrainians have no words to describe how grateful we are for your support! We rely on each one of you!
						<br />
						<br />
						We are collecting donations from all over the world to support the Ukrainian army and refugees, who bravely fight for Ukraine and for peace in the
						European Union. The war that Putin started in Ukraine is a threat for the whole world, his regime is based on aggression, devastation, and death.
						<br />
						<br />
						Right now, Ukrainians do their best to stand up against 2 enemies right now in many regions simultaneously - military forces with heavy ammunition
						led by Putin and Lukashenko. Our defenders of Ukraine are in constant need of more equipment, vests, knee pads, food, hygiene necessities.
						Meanwhile, women are giving birth to the babies in the Kyiv underground, where hygienical agents and medical equipment is not an abundance anymore.
						During war there are always shortages. Our goal is to collect funds and provide these necessities for Ukrainian refugees and the Ukrainian Army.
						<br />
						<br />
						We are your neighbours, we share the same values, we have a common history. We count on your support! Every piece of support matters! Stand with
						Ukraine!
						<br />
						<br />
						Slava Ukraini!
					</p>

					<a href='#money' className={styles.button}>
						Help Ukrainians!
					</a>
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
					<h1 className={styles.title}>Requisites for help</h1>

					<h1 style={{ maxWidth: 550 }} className={styles.proof}>
						If you have additional questions or would like to see proof of our work, please write{' '}
						<a target='_blank' href='https://instagram.com/fenix_fundacja?utm_medium=copy_link' rel='noreferrer'>
							here!
						</a>
					</h1>

					<span>Support the Ukrainian Army:</span>
					<p>
						<span>
							<a
								target='blank'
								href='https://www.portmone.com.ua/r3/uk/terminal/index/index/id/118103?item_name=Підтримуємо%20Українську%20Армію!%20(єПідтримка)&item_id=118103&item_category=Податки%2C%20платежі%20до%20бюджету&item_category2=1100&item_list_name=Catalog&index=3'>
								Transfer via card
							</a>
						</span>
						<br /> <br />
						<span>UAH:</span>
						<br />
						Bank: National Bank of Ukraine
						<br />
						MFI 300001
						<br />
						Account № UA843000010000000047330992708
						<br />
						USREOU code 00032106
						<br />
						Recipient: National Bank of Ukraine
						<br />
						<br />
						<span>USD:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						JP MORGAN CHASE BANK, New York
						<br />
						SWIFT Code: CHASUS33
						<br />
						Account: 400807238
						<br />
						383 Madison Avenue, New York, NY 10179, USA
						<br />
						Crediting to the account UA843000010000000047330992708
						<br />
						<br />
						<span>GBP:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						Bank of England, London
						<br />
						SWIFT Code: BKENGB2L
						<br />
						Account: 40000982
						<br />
						Threadneedle Street, London EC2R 8AH, UK
						<br />
						Crediting to the account UA843000010000000047330992708
						<br />
						<br />
						<span>EUR:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						DEUTSCHE BUNDESBANK, Frankfurt
						<br />
						SWIFT Code: MARKDEFF
						<br />
						Account: 5040040066
						<br />
						IBAN DE05504000005040040066
						<br />
						Wilhelm-Epsteinn-Strabe 14, 60431 Frankfurt Am Main, Germany
						<br />
						Crediting to the account UA843000010000000047330992708
						<br />
						<br />
						<span>CHF:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						ZURCHER KANTONALBANK, ZURICH
						<br />
						SWIFT Code: ZKBKCHZZ80A
						<br />
						Account: 0700-01227572
						<br />
						IBAN CH32 0070 0070 0012 2757 2<br />
						Josefstrasse 222, 8005 Zurich, Switzerland
						<br />
						Crediting to the account UA843000010000000047330992708
						<br />
						<br />
						<span>AUD:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						RESERVE BANK OF AUSTRALIA, Sydney
						<br />
						SWIFT Code: RSBKAU2S
						<br />
						Account: 81753-2
						<br />
						GPO Box 3947, Sydney NSW 2000, Australia
						<br />
						Crediting to the account UA843000010000000047330992708
						<br />
						<br />
						<span>CNY:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						STANDARD CHARTERED BANK, Hong Kong
						<br />
						SWIFT Code: SCBLHKHH
						<br />
						Account: 447-0-946243-6
						<br />
						GPO Box 21, Hong Kong
						<br />
						Crediting to the account UA843000010000000047330992708
						<br />
						<br />
						<span>CAD:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						BANK OF MONTREAL, Toronto
						<br />
						SWIFT Code: BOFMCAM2
						<br />
						Account: 3144-1044-166
						<br />
						100 King Street West, 24th Floor, Toronto, Ontario, M5X 1A1, CanadaCrediting to the account UA843000010000000047330992708
						<br />
						<br />
						<span>JPY:</span>
						<br />
						SWIFT Code NBU: NBUA UA UX
						<br />
						MUFG BANK LTD, Tokyo
						<br />
						SWIFT Code: BOTK JP JT
						<br />
						Account: 653-0430048
						<br />
						1-2-3, Nihombashi HONGOKU-CHO, Chuo-ku, Tokyo 1003 -0021 Japan
						<br />
						Crediting to the account UA843000010000000047330992708
						<br />
					</p>

					<span>Refugee Aid Accounts (Crypto):</span>
					<p>
						<span>1. ETH ERC20: </span> <br />
						0x1508ddb152ef0fbe2a97e39dae61b45ed82c0b64
						<br />
						<br />
						<span>2. BTC:</span>
						<br />
						333qoEF11PBd9pV52c9ubWAkZHQLoaub9U
						<br />
						<br />
						<span>3. USDT ERC20:</span>
						<br />
						0x1508ddb152ef0fbe2a97e39dae61b45ed82c0b64
						<br />
						<br />
						<span>4. USDT TRC:</span>
						<br />
						TC4EsXgyPJVBsaRMErXMXVRBEfg96Xym4R
						<br />
						<br />
						<span>5. USDT OMNI:</span>
						<br />
						3FVt6XZHaCtAGyZWXpUw1jGg3G9J8Gbd2k
					</p>
					<span>Bank Accounts:</span>
					<p>
						<span>1. EUR account:</span>
						<br />
						PL35 1090 1014 0000 0001 4982 1914
						<br />
						<br />
						<span>2. PLN account:</span>
						<br />
						PL02 1090 1014 0000 0001 4982 1926
						<br />
						<br />
						<span>3. PLN account:</span>
						<br />
						PL66 1090 1014 0000 0001 4982 1065
						<br />
						<br />
						<span>4. EUR account:</span>
						<br />
						PL11 1090 1014 0000 0001 4982 1085
						<br />
						<br />
						<span>5. SWIFT: WBK PP LPP</span>
						<br />
						<br />
						<span>6. ADRES:</span> Al.Jana Pawła ll 17, Warsaw , Poland ,00-195
					</p>
					<span>Fund data:</span>
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
