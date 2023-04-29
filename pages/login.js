import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Login() {

	const router = useRouter();

	const [show, setShow] = useState(false);

	async function handleSignIn(type) {
		signIn(type, {
			callbackUrl: process.env.baseUrl
		})
	}

	const { data: session } = useSession();

	if (session) {
		router.push("/");
	}

	return (
		<Layout>

			<Head>
				<title>Login</title>
			</Head>

			<section className='w-3/4 mx-auto flex flex-col gap-10'>
				<div className="title">
					<h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
					<p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
				</div>

				{/* form */}
				<form className='flex flex-col gap-5'>
					<div className={styles.input_group}>
						<input
							type="email"
							name='email'
							placeholder='Email'
							className={styles.input_text}
						/>
						<span className='icon flex items-center px-4'>
							<HiAtSymbol size={25} />
						</span>
					</div>
					<div className={styles.input_group}>
						<input
							type={`${show ? "text" : "password"}`}
							name='password'
							placeholder='password'
							className={styles.input_text}
						/>
						<span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
							<HiFingerPrint size={25} />
						</span>
					</div>

					{/* login buttons */}
					<div className="input-button">
						<button type='submit' className={styles.button}>
							Login
						</button>
					</div>
					<div className="input-button">
						<button onClick={() => handleSignIn('google')} type='button' className={styles.button_custom}>
							Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} alt=""></Image>
						</button>
					</div>
					<div className="input-button">
						<button onClick={() => handleSignIn('github')} type='button' className={styles.button_custom}>
							Sign In with Github <Image src={'/assets/github.svg'} width={25} height={25} alt=""></Image>
						</button>
					</div>
				</form>

				{/* bottom */}
				<p className='text-center text-gray-400 '>
					don&apos;t have an account yet? <Link legacyBehavior href={'/register'}><a className='text-blue-700'>Sign Up</a></Link>
				</p>
			</section>

		</Layout>
	)
}