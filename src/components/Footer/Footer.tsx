import React from 'react';

export function Footer() {
	return (
		<footer
			style={{
				backgroundColor: '#161616',
				color: '#f1f1f1',
				padding: '1.5rem 1rem'
			}}>
			<div
				style={{
					maxWidth: '1200px',
					margin: '0 auto',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between'
				}}>
				<div style={{ flex: '1 0 160px', marginRight: '1rem', marginBottom: '1rem' }}>
					<h4
						style={{
							fontSize: '0.875rem',
							marginBottom: '0.5rem',
							fontWeight: 600
						}}>
						Developers
					</h4>
					<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
						<li>
							<a href='https://www.she.io/developers' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Developer Hub
							</a>
						</li>
						<li>
							<a
								href='https://she-foundation.notion.site/SHE-Ecosystem-Builders-Toolkit-836deaebca204452909d0bf9365d8116'
								style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Developer Toolkit
							</a>
						</li>
						<li>
							<a href='https://github.com/she-protocol' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								GitHub
							</a>
						</li>
						<li>
							<a href='https://t.me/+-KTScIwnnJFmYTQ1' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								SHE Builder&apos;s Chat
							</a>
						</li>
					</ul>
				</div>

				<div style={{ flex: '1 0 160px', marginRight: '1rem', marginBottom: '1rem' }}>
					<h4
						style={{
							fontSize: '0.875rem',
							marginBottom: '0.5rem',
							fontWeight: 600
						}}>
						Ecosystem
					</h4>
					<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
						<li>
							<a href='https://www.she.io/ecosystem' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Ecosystem Hub
							</a>
						</li>
						<li>
							<a
								href='https://she-forms.typeform.com/join-ecosystem?typeform-source=p12rt1ecint.typeform.com'
								style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Join the Eco
							</a>
						</li>
						<li>
							<a href='https://app.she.io/bridge' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Bridge
							</a>
						</li>
						<li>
							<a href='https://shetrace.com/' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Explorer
							</a>
						</li>
						<li>
							<a href='https://app.she.io/stake' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Stake
							</a>
						</li>
					</ul>
				</div>

				<div style={{ flex: '1 0 160px', marginRight: '1rem', marginBottom: '1rem' }}>
					<h4
						style={{
							fontSize: '0.875rem',
							marginBottom: '0.5rem',
							fontWeight: 600
						}}>
						Community
					</h4>
					<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
						<li>
							<a href='https://x.com/SheNetwork' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								X
							</a>
						</li>
						<li>
							<a href='https://discord.com/invite/she' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Discord
							</a>
						</li>
						<li>
							<a href='https://t.me/shenetwork' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Telegram
							</a>
						</li>
						<li>
							<a href='https://blog.she.io/' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Blog
							</a>
						</li>
						<li>
							<a href='/learn/general-brand-kit' style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8125rem' }}>
								Brand Kit
							</a>
						</li>
					</ul>
				</div>

				<div
					style={{
						width: '100%',
						textAlign: 'center',
						marginTop: '1rem',
						fontSize: '0.75rem',
						opacity: 0.8
					}}>
					SHE Docs © 2025
				</div>
			</div>
		</footer>
	);
}
