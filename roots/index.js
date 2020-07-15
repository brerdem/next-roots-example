import Head from 'next/head';

import Layout from "../components/global/layout";
import {baseUrl, mediaUrl} from "../components/global/config";

function Home({ content }) {
	return (
		<Layout>

			<Head>
				<title>Home</title> 
			</Head>

			<section>
				<div className="uk-slideshow uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: push">
					<ul className="uk-slideshow-items" uk-height-viewport="offset-top: true;">

						{content.content.Slider.map((e, index) => (
							<li key={index}>
								<img src={mediaUrl + e.Gorsel.Url} alt="e.imageAlt" className="uk-cover" uk-cover="" />
								<div className="uk-position-bottom uk-background-gradient"></div>
								<div className="uk-position-center uk-position-small uk-text-center">
								<h2 className="uk-h1" uk-slideshow-parallax="x: 100,-100">{e.Title}</h2>
									<a href={e.ButtonLink} className="uk-button uk-button-primary" uk-slideshow-parallax="x: 200,-200">{e.ButonYazisi}</a>
								</div>
							</li>
						))}

					</ul>
				</div>
			</section>
		
			<section className="uk-section uk-section-large uk-padding-remove-top uk-background-gradient-primary section-home-products">
				<div className="uk-section">
					<div className="uk-container">
						<div className="uk-width-2-3@m uk-margin-auto uk-text-center uk-text-large uk-text-light">
							<p>{content.content.SliderAltiYazi}</p>
						</div>
					</div>
				</div>

				<div className="uk-container uk-container-large">
					<div className="uk-grid uk-grid-medium uk-child-width-1-3@m uk-light" data-uk-grid>

						{content.content.BannerAlani.map((e, index) => (
							<div key={index}>
								<a href={e.Link} className="uk-inline-clip uk-transition-toggle uk-width-1-1" tabIndex="0">
									<img className="uk-transition-scale-up uk-transition-opaque uk-width-1-1" src={mediaUrl + e.Gorsel.Url} alt="" />
									<div className="uk-position-bottom uk-background-gradient"></div>
						<span className="uk-position-bottom uk-position-small uk-text-large uk-text-light">{e.Baslik}</span>
								</a>
							</div>
						))}

					</div>
				</div>
			</section>
		
			<section className="uk-position-relative">
				<img src={mediaUrl + content.content.FullWidthBannerGorsel.Url} alt="" className="uk-width-1-1" />
				<div className="uk-position-cover uk-background-gradient-left"></div>
				<div className="uk-position-cover uk-flex uk-flex-middle">
					<div className="uk-container uk-light">
						<div className="uk-width-4-5@m uk-margin-auto uk-margin-remove-last-child uk-text-center">
							<h3>{content.content.FullWidthBannerYazi}</h3>
						</div>
					</div>
				</div>
			</section>

			<section className="uk-section uk-section-large uk-background-gradient-default">
				<div className="uk-container uk-container-large">
					<div className="uk-grid uk-grid-medium uk-child-width-auto uk-flex-between uk-flex-bottom">
						<div>
							<h2 className="uk-margin-medium">Haberler</h2>
						</div>

						<div>
							<a href="#" className="uk-button uk-button-link">Tümünü Gör</a>
						</div>
					</div>

					<div className="uk-grid uk-grid-match uk-child-width-1-3@m" uk-grid="">
						<div>
							<a href="#" className="uk-card uk-card-hover uk-link-reset uk-display-block">
								<div className="uk-card-media-top">
									<img src="images/card/card-4.jpg" alt="" className="uk-width1-1" />
								</div>
								<div className="uk-card-body uk-text-light">
									<h3 className="uk-card-title uk-text-normal">LC Waikiki’ye İki Ödül Birden</h3>
									<p>Alışveriş Merkezleri ve Yatırımcılar Derneği (AYD) ile Akademetre Research Company tarafından bu yıl 10. kez gerçekleştirilen “Türkiye’nin 1 Numaralı Mark layık görüldük.</p>
								</div>
							</a>
						</div>

						<div>
							<a href="#" className="uk-card uk-card-hover uk-link-reset">
								<div className="uk-card-media-top">
									<img src="images/card/card-5.jpg" alt="" className="uk-width1-1" />
								</div>
								<div className="uk-card-body uk-text-light">
									<h3 className="uk-card-title uk-text-normal">Yeni Yıl Koleksiyonumuzu Tanıttık!</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, nisl magna felis nascetur libero, sed et vulputate. Ornare nullam sit sit hendrerit. Viverra tincidunt vitae integer elit. Eu et commodo vitae nec aliquam.</p>
								</div>
							</a>
						</div>

						<div>
							<a href="#" className="uk-card uk-card-hover uk-link-reset">
								<div className="uk-card-media-top">
									<img src="images/card/card-6.jpg" alt="" className="uk-width1-1" />
								</div>
								<div className="uk-card-body uk-text-light">
									<h3 className="uk-card-title uk-text-normal">1000. Mağazamızı Kiev’de Açtık</h3>
									<p>Alışveriş Merkezleri ve Yatırımcılar Derneği (AYD) ile Akademetre Research Company tarafından bu yıl 10. kez gerçekleştirilen “Türkiye’nin 1 Numaralı Mark layık görüldük.</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="uk-position-relative">
				<img src={mediaUrl + content.content.AltBannerGorsel.Url} alt="" className="uk-width-1-1" />
				<div className="uk-position-cover uk-background-gradient-secondary"></div>
				<div className="uk-position-cover uk-flex uk-flex-middle">
					<div className="uk-container uk-light uk-flex-1">
						<div className="uk-width-1-2@m uk-margin-auto uk-margin-remove-last-child uk-text-center">
							<h3>{content.content.AltBannerYazi}</h3>
							<a href={content.content.AltBannerButtonLink} className="uk-button uk-button-primary">{content.content.AltBannerButtonYazi}</a>
						</div>
					</div>
				</div>
			</section>

		</Layout>
	);
}

export async function getStaticProps() {

    const response = await fetch(baseUrl);
	const content = await response.json();

    return {
        props: {
            content
        }
    }
    
}

export default Home;
