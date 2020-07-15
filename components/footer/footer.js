import Link from 'next/link';

function Footer () {
    return <footer>
        <div className="uk-section uk-section-small">
            <div className="uk-container">
                <div className="uk-grid uk-grid-medium uk-child-width-auto@m uk-flex-between" data-uk-grid="">
                    <div>
                        <ul className="uk-nav uk-nav-default">
                            <li><Link href="/corporate/about"><a>Hakkımızda</a></Link></li>
                            <li><Link href="/corporate/history"><a>Tarihçe</a></Link></li>
                            <li><Link href="/corporate/about"><a>Başarılar</a></Link></li>
                            <li><Link href="/corporate/corporate-policies"><a>Kurumsal Politikalar</a></Link></li>
                            <li><Link href="/corporate/product-quality-tests"><a>Ürün Kalite Testleri</a></Link></li>
                            <li><Link href="/corporate/product-safety"><a>Ürün Güvenliği</a></Link></li>
                            <li><Link href="/corporate/about"><a>Aydınlatma Metni</a></Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="uk-nav uk-nav-default">
                            <li><Link href="#"><a>LC Waikiki’de Kariyer</a></Link></li>
                            <li><Link href="#"><a>Kariyer Fırsatları</a></Link></li>
                            <li><Link href="#"><a>Kurumsal Akademi</a></Link></li>
                            <li><Link href="#"><a>Bizden Haberler</a></Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="uk-nav uk-nav-default">
                            <li><Link href="#"><a>Haberler</a></Link></li>
                            <li><Link href="#"><a>Mağazalar</a></Link></li>
                            <li><Link href="/media/videos"><a>Videolar</a></Link></li>
                            <li><Link href="/media/magazines"><a>LCW Life Dergi</a></Link></li>
                            <li><Link href="/media/press-room"><a>Basın Kiti</a></Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="uk-nav uk-nav-default">
                            <li><Link href="/contact/contact-us"><a>Bize Ulaşın</a></Link></li>
                            <li><Link href="#"><a>Müşteri İlişkileri</a></Link></li>
                            <li><Link href="#"><a>Sponsorluk Başvurusu</a></Link></li>
                            <li><Link href="/contact/faq"><a>Sık Sorulan Sorular</a></Link></li>
                            <li><Link href="#"><a>Tedarikçi Portalı</a></Link></li>
                        </ul>
                    </div>

                    <div>
                        <span>Bizi Takip Edin</span>

                        <ul className="uk-iconnav uk-flex-middle uk-margin">
                            <li><a href="#"><img src="/icons/icn-facebook.svg" uk-svg="" /></a></li>
                            <li><a href="#"><img src="/icons/icn-twitter.svg" uk-svg="" /></a></li>
                            <li><a href="#"><img src="/icons/icn-vimeo.svg" uk-svg="" /></a></li>
                            <li><a href="#"><img src="/icons/icn-linkedin.svg" uk-svg="" /></a></li>
                            <li><a href="#"><img src="/icons/icn-instagram.svg" uk-svg="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="uk-section uk-section-xsmall uk-section-muted">
            <div className="uk-container">
                <div className="uk-grid uk-grid-medium uk-child-width-auto@m uk-flex-between" uk-grid="">
                    <div className="uk-text-muted">
                        <small>Copyright © 2020 LC WAIKIKI. Her hakkı saklıdır.</small>
                    </div>

                    <div>
                        <ul className="uk-subnav uk-subnav-dotnav">
                            <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
                            <li><a href="#">Gizlilik Sözleşmesi</a></li>
                        </ul>
                    </div>

                    <div>
                        <a href="https://www.clockwork.com.tr/" target="_blank">
                            <img src="/images/logos/clockwork.svg" alt="Clockwork Dijital Ajans" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer