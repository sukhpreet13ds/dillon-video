import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useVideoThumbnail from '../hooks/useVideoThumbnail';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import spotlightThumb from '../assets/thump.webp';
import horseThumb from '../assets/vserv1.jpg';
import liveThumb from '../assets/vserv4.jpg';
import aerialThumb from '../assets/vserv2.jpg';

// Work video items data
const WORK_ITEMS = [
    {
        id: 'work-1',
        category: 'equine',
        tag: "UNDER WATER",
        title: 'In the company of champions.',
        desc: 'The people, preparation and Ocean Journey',
        fallbackThumb: horseThumb,
        vimeoUrl: 'https://player.vimeo.com/video/729024737?autoplay=1&title=0&byline=0&portrait=0'
    },
    {
        id: 'work-2',
        category: 'live-broadcast',
        tag: 'PHILLIPS / MULTI-CAMERA',
        title: 'The energy. The moment.',
        desc: 'Bringing the experience beyond the room.',
        fallbackThumb: liveThumb,
        vimeoUrl: 'https://player.vimeo.com/video/761200924?autoplay=1&title=0&byline=0&portrait=0'
    },
    {
        id: 'work-3',
        category: 'aerial-tourism',
        tag: 'GRECO HOTEL & RESORTS / TOURISM',
        title: 'A place worth discovering.',
        desc: 'Fresh perspectives on destinations and experiences.',
        fallbackThumb: aerialThumb,
        vimeoUrl: 'https://player.vimeo.com/video/686751977?autoplay=1&title=0&byline=0&portrait=0'
    },
    {
        id: 'work-4',
        category: 'brand-commercial',
        tag: 'H & H / BRAND & COMMERCIAL',
        title: 'Made for the open road.',
        desc: 'Brand imagery with a personality of its own.',
        fallbackThumb: 'https://i.vimeocdn.com/video/1823765479-a4e104c5b7958dfe311a067d8377ba1e0e0db42e2d59ebc086c4c397ead4cc97-d_640',
        vimeoUrl: 'https://player.vimeo.com/video/928393679?autoplay=1&title=0&byline=0&portrait=0'
    }
];

// Single Work Card Component with dynamic thumbnail and inline playback
const WorkCard = ({ item, isPlaying, onPlay }) => {
    const thumbnail = useVideoThumbnail(item.vimeoUrl, item.fallbackThumb);

    return (
        <div className="ourwork-card animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="ourwork-card-media-box">
                {!isPlaying ? (
                    <div
                        className="ourwork-card-poster"
                        onClick={onPlay}
                        role="button"
                        tabIndex={0}
                        aria-label={`Play ${item.title}`}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onPlay();
                            }
                        }}
                    >
                        <img
                            src={thumbnail}
                            alt={item.title}
                            className="ourwork-card-img"
                            loading="lazy"
                            decoding="async"
                        />
                        <button
                            type="button"
                            className="ourwork-card-play-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onPlay();
                            }}
                            aria-label={`Play ${item.title}`}
                        >
                            <FaPlay className="ourwork-card-play-icon" aria-hidden="true" />
                        </button>
                    </div>
                ) : (
                    <iframe
                        className="ourwork-card-iframe"
                        src={item.vimeoUrl}
                        title={item.title}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>

            <div className="ourwork-card-info">
                <span className="ourwork-card-tag">{item.tag}</span>
                <h3 className="ourwork-card-title">{item.title}</h3>
                <p className="ourwork-card-desc">{item.desc}</p>
            </div>
        </div>
    );
};

const OurWork = () => {
    useScrollAnimation();
    const [activeFilter, setActiveFilter] = useState('all');
    const [isSpotlightPlaying, setIsSpotlightPlaying] = useState(false);
    const [playingCardId, setPlayingCardId] = useState(null);

    // Spotlight video configuration
    const SPOTLIGHT_VIDEO_URL = "https://player.vimeo.com/video/662073747?autoplay=1&title=0&byline=0&portrait=0";
    const spotlightVideoThumb = useVideoThumbnail(SPOTLIGHT_VIDEO_URL, spotlightThumb);

    const filters = [
        { key: 'all', label: 'All work' },
        { key: 'brand-commercial', label: 'Brand & commercial' },
        { key: 'live-broadcast', label: 'Live & broadcast' },
        { key: 'equine', label: 'Equine' },
        { key: 'aerial-tourism', label: 'Aerial & tourism' }
    ];

    const filteredItems = activeFilter === 'all'
        ? WORK_ITEMS
        : WORK_ITEMS.filter((item) => item.category === activeFilter);

    return (
        <main className="ourwork-page-main">
            {/* 1. HERO SECTION (Dark) */}
            <section className="ourwork-hero-section">
                <div className="ourwork-container">
                    {/* Breadcrumb */}
                    <nav className="ourwork-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/" className="ourwork-breadcrumb-link">HOME</Link>
                        <span className="ourwork-breadcrumb-sep">/</span>
                        <span className="ourwork-breadcrumb-active">OUR WORK</span>
                    </nav>

                    {/* Heading Row */}
                    <div className="ourwork-hero-row">
                        <div className="ourwork-hero-left">
                            <h1 className="ourwork-hero-title">
                                Stories told.
                                <span className="ourwork-hero-title-italic">Impressions made.</span>
                            </h1>
                            <span className="ourwork-hero-location">
                                OCALA, FLORIDA / WORKING WORLDWIDE
                            </span>
                        </div>

                        <div className="ourwork-hero-right">
                            <p className="ourwork-hero-intro">
                                From equine sales to national broadcasts.<br />

                                A closer look at the people, places and
                                brands we help bring into focus.
                            </p>
                            <a
                                href="#explore"
                                className="ourwork-hero-scroll-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.getElementById('explore');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <span>EXPLORE OUR WORK</span>
                                <span className="ourwork-scroll-arrow" aria-hidden="true">&darr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. EXPLORE BY FILTER BAR (Light / Cream) */}
            <section className="ourwork-filter-bar" id="explore">
                <div className="ourwork-container ourwork-filter-container">
                    <span className="ourwork-filter-label">EXPLORE BY</span>

                    <div className="ourwork-filter-pills" role="tablist" aria-label="Work category filters">
                        {filters.map((filter) => {
                            const isActive = activeFilter === filter.key;
                            return (
                                <button
                                    key={filter.key}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    className={`ourwork-filter-pill ${isActive ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveFilter(filter.key);
                                        setPlayingCardId(null);
                                    }}
                                >
                                    {filter.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. SECTION 01: IN THE SPOTLIGHT (Dark) */}
            <section className="ourwork-spotlight-section">
                <div className="ourwork-container">
                    {/* Top Tag & Category Metadata */}
                    <div className="ourwork-section-meta-row animate-on-scroll" data-animation="animate__fadeIn">
                        <span className="ourwork-section-tag">01 / IN THE SPOTLIGHT</span>
                        <span className="ourwork-meta-right">BRAND STORYTELLING / AUTOMOTIVE</span>
                    </div>

                    {/* Large Featured Video Container */}
                    <div className="ourwork-spotlight-video-box animate-on-scroll" data-animation="animate__fadeInUp">
                        {!isSpotlightPlaying ? (
                            <div
                                className="ourwork-spotlight-poster"
                                onClick={() => setIsSpotlightPlaying(true)}
                                role="button"
                                tabIndex={0}
                                aria-label="Play Built to move you film"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setIsSpotlightPlaying(true);
                                    }
                                }}
                            >
                                <img
                                    src={spotlightVideoThumb}
                                    alt="Built to move you - Featured film"
                                    className="ourwork-spotlight-img"
                                    loading="lazy"
                                    decoding="async"
                                />

                                {/* Bottom Right "View film" Red Capsule Button */}
                                <button
                                    type="button"
                                    className="ourwork-view-film-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsSpotlightPlaying(true);
                                    }}
                                    aria-label="View film"
                                >
                                    <FaPlay className="ourwork-view-film-icon" aria-hidden="true" />
                                    <span>View film</span>
                                </button>
                            </div>
                        ) : (
                            <iframe
                                className="ourwork-spotlight-iframe"
                                src={SPOTLIGHT_VIDEO_URL}
                                title="Built to move you"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                                allowFullScreen
                            />
                        )}
                    </div>

                    {/* Bottom Info Row */}
                    <div className="ourwork-spotlight-info-row animate-on-scroll" data-animation="animate__fadeInUp">
                        <div className="ourwork-spotlight-left">
                            <h2 className="ourwork-spotlight-title">Built to move you.</h2>
                            <span className="ourwork-spotlight-category">
                                VIDEO PRODUCTION / BRAND STORYTELLING
                            </span>
                        </div>

                        <div className="ourwork-spotlight-right">
                            <p className="ourwork-spotlight-desc">
                                Distinctive cars. Real character.<br />
                                A story that deserves to be seen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECTION 02: SELECTED WORK (Light / Cream) */}
            <section className="ourwork-selected-section">
                <div className="ourwork-container">
                    <span className="ourwork-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
                        02 / SELECTED WORK
                    </span>
                    <h2 className="ourwork-selected-heading animate-on-scroll" data-animation="animate__fadeInUp">
                        Every story. A new perspective.
                    </h2>

                    <div className="ourwork-grid">
                        {filteredItems.map((item) => (
                            <WorkCard
                                key={item.id}
                                item={item}
                                isPlaying={playingCardId === item.id}
                                onPlay={() => setPlayingCardId(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECTION 03: THE COMPANY WE KEEP (Dark) */}
            <section className="ourwork-clients-section">
                <div className="ourwork-container">
                    <span className="ourwork-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
                        03 / THE COMPANY WE KEEP
                    </span>

                    <div className="ourwork-clients-grid">
                        {/* Left Column */}
                        <div className="ourwork-clients-left animate-on-scroll" data-animation="animate__fadeInUp">
                            <h2 className="ourwork-clients-heading">
                                Good company.
                                <span className="ourwork-clients-heading-italic">Great stories.</span>
                            </h2>
                            <p className="ourwork-clients-desc">
                                From local businesses to global networks, we bring the same care to every production.
                            </p>
                        </div>

                        {/* Right Column: Clients Table */}
                        <div className="ourwork-clients-right animate-on-scroll" data-animation="animate__fadeInUp">
                            <span className="ourwork-clients-label">A SELECTION OF OUR CLIENTS</span>

                            <div className="ourwork-clients-table">
                                {/* Row 1 */}
                                <div className="ourwork-clients-row">
                                    <span className="ourwork-client-name">NBC</span>
                                    <span className="ourwork-client-name">CBS</span>
                                    <span className="ourwork-client-name">CNN</span>
                                </div>
                                {/* Row 2 */}
                                <div className="ourwork-clients-row">
                                    <span className="ourwork-client-name">Discovery Channel</span>
                                    <span className="ourwork-client-name">Animal Planet</span>
                                    <span className="ourwork-client-name">PBS</span>
                                </div>
                                {/* Row 3 */}
                                <div className="ourwork-clients-row">
                                    <span className="ourwork-client-name">General Motors</span>
                                    <span className="ourwork-client-name">Boston Scientific</span>
                                    <span className="ourwork-client-name">Ocala Breeders&apos; Sales Company</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Category Bar */}
                    <div className="ourwork-clients-footer-row animate-on-scroll" data-animation="animate__fadeIn">
                        <span className="ourwork-footer-tags">
                            EQUINE / MANUFACTURING / MEDICAL / TOURISM / BROADCAST
                        </span>
                        <span className="ourwork-footer-since">
                            INDEPENDENT PRODUCTION. SINCE 1985.
                        </span>
                    </div>
                </div>
            </section>

            {/* 6. CTA & FOOTER */}
            <CTA />
            <Footer />
        </main>
    );
};

export default OurWork;
