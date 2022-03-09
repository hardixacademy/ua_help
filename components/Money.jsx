import styles from '../styles/Home.module.scss';

const Money = () => {
	return (
		<div id='money' className={styles.money}>
			<h1 className={styles.title}>Requisites for help</h1>

			<h1 style={{ maxWidth: 550 }} className={styles.proof}>
				If you have additional questions or would like to see proof of our work, please write{' '}
				<a target='_blank' href='https://www.instagram.com/fenix_foundation_for_ukraine/?utm_medium=copy_link' rel='noreferrer'>
					here!
				</a>
			</h1>

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
	);
};

export default Money;
