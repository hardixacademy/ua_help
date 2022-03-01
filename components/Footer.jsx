import styles from '../styles/Home.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p style={{ margin: 0 }} className={styles.code}>
				© 2022 Copyright{' '}
				<a target='_blank' href='https://noxu.solutions/' rel='noreferrer'>
					NOXU Solutions
				</a>
			</p>
		</footer>
	);
};

export default Footer;
