import { baseUrl, mediaUrl } from 'components/global/config';
import Layout from 'components/global/layout';
import PageHead from 'components/global/page-head';
import Head from 'next/head';

function About({ content }) {
  return (
    <Layout>
      <Head>
        <title>Hakkımızda</title>
      </Head>

      <PageHead
        image={mediaUrl + content.content.UstBanner[0].Gorsel.Url}
        imageMobile={mediaUrl + content.content.UstBanner[0].MobilGorsel.Url}
        title={content.content.UstBanner[0].Baslik}
        content={content.content.UstBanner[0].AltYazi}
      />

      <section className='uk-section uk-section-small uk-background-gradient-primary section-about-count-text'>
        <div className='uk-container'>
          <div className='uk-width-5-6@m uk-margin-auto'>
            <div
              className='uk-grid uk-grid-medium uk-flex-between uk-flex-bottom'
              data-uk-grid
            >
              <div className='uk-width-1-2@m'>
                <h2>{content.content.IcerikBaslik}</h2>

                <div
                  dangerouslySetInnerHTML={{ __html: content.content.Icerik }}
                ></div>
              </div>

              <div className='uk-width-auto@m'>
                <img
                  src={mediaUrl + content.content.IcerikSagGorsel.Url}
                  alt=''
                  className='uk-border-rounded'
                  width='400'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='uk-section uk-section-large section-about-count-card'>
        <div className='uk-container'>
          <div
            className='uk-grid uk-grid-medium uk-light uk-text-center'
            data-uk-grid
          >
            {content.content.BilgiKartlari.map((e, index) => (
              <div
                key={index}
                className='uk-width-4-5 uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l'
              >
                <div className='uk-position-relative overlay-secondary'>
                  <img
                    src={mediaUrl + e.Arkaplan.Url}
                    alt=''
                    className='uk-border-rounded'
                  />

                  <div className='uk-position-center'>
                    <h3 className='uk-margin-remove'>{e.Sayi}</h3>
                    <span className='uk-text-large'>{e.Yazi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className='uk-section uk-background-tertiary uk-light'
        data-src='/images/section/about-stories.svg'
        uk-img=''
      >
        <div className='uk-container'>
          <h2 className='uk-margin-medium uk-text-center'>
            {content.content.UlkelerBaslik}
          </h2>
          <div className='uk-width-2-3@m uk-margin-auto'>
            <ul className='uk-list uk-column-1-2 uk-column-1-3@s uk-column-1-4@m uk-column-1-5@l uk-margin-medium'>
              {content.content.HizmetVerilenUlkeler.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>

            <div className='uk-text-center'>
              <a
                href={content.content.UlkelerButtonLink}
                className='uk-button uk-button-primary'
              >
                {content.content.UlkelerButtonYazi}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='uk-section uk-section-large'>
        <div className='uk-container'>
          <div className='uk-width-2-3@m uk-margin-auto'>
            <div className='uk-text-center'>
              <h2>{content.content.OrtaklikYapisiBaslik}</h2>
              <p>{content.content.OrtaklikAltyazi}</p>
            </div>

            <div className='uk-margin-medium-top'>
              <ul className='uk-accordion uk-margin-remove' data-uk-accordion>
                {content.content.Listeler.map((e, index) => (
                  <li key={index} className={index === 0 ? 'uk-open' : ''}>
                    <a className='uk-accordion-title' href='#'>
                      {e.Baslik}
                    </a>
                    <div className='uk-accordion-content'>
                      <table className='uk-width-1-1'>
                        <tbody>
                          {e.Degerler.map((e, index) => (
                            <tr key={index}>
                              <td>{e.Baslik}</td>
                              <td className='uk-text-right@m'>{e.Deger}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className='uk-section uk-background-cover uk-height-xlarge uk-position-relative'
        data-src={mediaUrl + content.content.AltBanner[0].Gorsel.Url}
        uk-img=''
      >
        <div className='uk-position-cover uk-flex uk-flex-middle'>
          <div className='uk-container uk-light'>
            <div className='uk-width-5-6@m uk-margin-auto uk-margin-remove-last-child uk-text-center'>
              <h3>{content.content.AltBanner[0].Baslik}</h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(baseUrl + 'hakkimizda/');
  const content = await response.json();

  return {
    props: {
      content,
    },
  };
}

export default About;
