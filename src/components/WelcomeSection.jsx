// Not: Hoşgeldiniz başlığı ve motivasyon sözü/emoji.
import React, { useMemo } from 'react';
import './WelcomeSection.css';

const MOTIVATIONS = [
  { text: 'Odaklan, başarabilirsin! 💪', emoji: '💪' },
  { text: 'Her gün bir adım daha ileri! 🚀', emoji: '🚀' },
  { text: 'Küçük adımlar büyük farklar yaratır. 🌱', emoji: '🌱' },
  { text: 'Bugün odaklan, yarın gurur duy! 🏆', emoji: '🏆' },
  { text: 'Senin zamanın, senin başarın! ⏳', emoji: '⏳' },
  { text: 'Dikkatini topla, hayallerine yaklaş! ✨', emoji: '✨' },
  { text: 'Bir mola, bir nefes, sonra tekrar! ☕', emoji: '☕' },
  { text: 'Başarı, odakla başlar! 🎯', emoji: '🎯' },
];

const WelcomeSection = () => {
  // Sayfa her yüklendiğinde rastgele bir motivasyon seç
  const motivation = useMemo(() => {
    return MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)];
  }, []);

  return (
    <section className="welcome-section" id="home">
      <div className="motivation-box">
        <span className="motivation-emoji" role="img" aria-label="Motivasyon">{motivation.emoji}</span>
        <span className="motivation-text">{motivation.text}</span>
      </div>
      <h1 className="welcome-title">🎯 Focus Tracker'a Hoşgeldiniz!</h1>
      <p className="welcome-desc">
        Focus Tracker, göz takibi teknolojisiyle odaklanma seviyenizi ölçer, gelişiminizi takip eder ve hem öğrenciler hem de öğretmenler için kişiselleştirilmiş paneller sunar. Odaklanma sürenizi artırmak ve verimliliğinizi en üst düzeye çıkarmak için tasarlandı!
      </p>
    </section>
  );
};

export default WelcomeSection; 