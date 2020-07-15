import Link from 'next/link';

function Navigaiton() {
    return <nav className="uk-margin-auto uk-visible@l">
        <ul className="uk-navbar-nav">
            <li>
                <Link href="/about-us">
                    <a>Hakkımızda</a>
                </Link>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><Link href="/about-us/chairman-of-the-board"><a>Yönetim Kurulu Başkanı</a></Link></li>
                        <li><Link href="/about-us/ceo"><a>CEO</a></Link></li>
                        <li><Link href="/about-us/history"><a>Tarihçe</a></Link></li>
                        <li><Link href="/about-us/our-brands"><a>Markalarımız</a></Link></li>
                        <li><Link href="/about-us/corporate-policies"><a>Kurumsal Politikalar</a></Link></li>
                    </ul>
                </div>
            </li>
            <li>
                <Link href="/career">
                    <a>Kariyer</a>
                </Link>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><Link href="/career/career-at-lc-waikiki"><a>LC Waikikide Kariyer</a></Link></li>
                        <li><Link href="/career/career-opportunities"><a>Kariyer Fırsatları</a></Link></li>
                        <li><Link href="/career/irecruitment-processes"><a>İşe Alım Süreçleri</a></Link></li>
                        <li><Link href="/career/lcw-on-campus"><a>LCW Kampüste</a></Link></li>
                        <li><Link href="/career/life-at-lcw"><a>LCW'de Hayat</a></Link></li>
                        <li><Link href="/career/corporate-academy"><a>Kurumsal Akademi</a></Link></li>
                        <li><Link href="/career/stories-from-us"><a>Bizden Hikayeler</a></Link></li>
                        <li><Link href="/career/grow-global-staj"><a>Grow Global Staj</a></Link></li>
                        <li><Link href="/career/grow-global-staj"><a>Grow Global Staj</a></Link></li>
                        <li><Link href="/career/new-graduate-programs"><a>Yeni Mezun Programları</a></Link></li>
                    </ul>
                </div>
            </li>
            <li>
                <Link href="#">
                    <a>Kalite</a>
                </Link>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><Link href="/quality/product-safety"><a>Ürün Güvenliği</a></Link></li>
                        <li><Link href="/quality/ecology"><a>Ekoloji</a></Link></li>
                    </ul>
                </div>
            </li>
            <li>
                <Link href="/news">
                    <a>Haberler</a>
                </Link>
            </li>
            <li>
                <Link href="/magazalar">
                    <a>Mağazalar</a>
                </Link>
            </li>
            <li>
                <Link href="/kurumsal/satis">
                    <a>Kurumsal Satış</a>
                </Link>
            </li>
            <li>
                <Link href="/iletisim">
                    <a>İletişim</a>
                </Link>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><Link href="/iletisim/iletisim-bilgileri"><a>İletişim Bilgileri</a></Link></li>
                        <li><Link href="/iletisim/musteri-iliskileri-formu"><a>Müşteri İlişkileri Formu</a></Link></li>
                        <li><Link href="/iletisim/sponsorluk-basvurusu"><a>Sponsorluk Başvurusu</a></Link></li>
                        <li><Link href="/iletisim/sık-sorulan-sorular"><a>Sık Sorulan Sorular</a></Link></li>
                        <li><Link href="/iletisim/basin-iletisim"><a>Basın İletişim</a></Link></li>
                        <li><Link href="/iletisim/franchise-form"><a>Franchise Form</a></Link></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
}

export default Navigaiton