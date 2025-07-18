// Not: Öğretmen paneli. Sınıf listesi, istatistik, özet ve duyuru alanı ekledim.
import React, { useState } from 'react';

// Not: Örnek öğrenci verileri
const students = [
  { name: 'Ayşe Yılmaz', focus: 82 },
  { name: 'Mehmet Demir', focus: 74 },
  { name: 'Elif Kaya', focus: 91 },
  { name: 'Can Aksoy', focus: 67 },
  { name: 'Zeynep Uçar', focus: 88 },
];

const TeacherPanel = () => {
  // Not: Duyuru state'i
  const [announcement, setAnnouncement] = useState('');
  const [sentAnnouncements, setSentAnnouncements] = useState([]);

  // Not: Duyuru gönderme fonksiyonu
  const sendAnnouncement = () => {
    if (announcement.trim()) {
      setSentAnnouncements(msgs => [...msgs, announcement]);
      setAnnouncement('');
    }
  };

  // Not: Ortalama odak puanı
  const avgFocus = Math.round(students.reduce((sum, s) => sum + s.focus, 0) / students.length);

  return (
    <div style={{ maxWidth: 700, margin: '3rem auto', background: '#232526cc', borderRadius: 24, boxShadow: '0 2px 12px #7f5fff22', padding: '2.5rem 2rem' }}>
      <h2 style={{ color: '#7f5fff', marginBottom: 18, textAlign: 'center' }}>👨‍🏫 Öğretmen Paneli</h2>
      {/* Not: Sınıf istatistikleri ve bar chart */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ color: '#b3e0ff', marginBottom: 8 }}>Sınıf Odak İstatistikleri</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 120, marginBottom: 8 }}>
          {students.map((s, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ background: '#7f5fff', height: `${s.focus}px`, width: 32, borderRadius: 8, margin: '0 auto', transition: 'height 0.5s' }}></div>
              <div style={{ color: '#e0e0e0', fontSize: 13, marginTop: 4 }}>{s.name.split(' ')[0]}</div>
              <div style={{ color: '#b3e0ff', fontSize: 12 }}>{s.focus}</div>
            </div>
          ))}
        </div>
        <div style={{ color: '#e0e0e0', fontSize: 15 }}>Ortalama Odak Puanı: <b>{avgFocus}</b></div>
      </div>
      {/* Not: Sınıf öğrenci listesi */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ color: '#b3e0ff', marginBottom: 8 }}>Sınıf Listesi</h3>
        <table style={{ width: '100%', background: '#23252677', borderRadius: 12, color: '#fff', fontSize: 15 }}>
          <thead>
            <tr style={{ color: '#7f5fff' }}>
              <th style={{ padding: 8, textAlign: 'left' }}>Ad Soyad</th>
              <th style={{ padding: 8 }}>Odak Puanı</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td style={{ padding: 8 }}>{s.name}</td>
                <td style={{ padding: 8, textAlign: 'center' }}>{s.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Not: Duyuru gönderme alanı */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ color: '#b3e0ff', marginBottom: 8 }}>Duyuru Gönder</h3>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <input
            type="text"
            value={announcement}
            onChange={e => setAnnouncement(e.target.value)}
            placeholder="Duyuru yaz..."
            style={{ flex: 1, borderRadius: 8, border: 'none', padding: '0.5rem 1rem', fontSize: 15 }}
          />
          <button onClick={sendAnnouncement} style={{ background: 'linear-gradient(90deg, #7f5fff 0%, #00c6ff 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.2rem', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Gönder</button>
        </div>
        <ul style={{ color: '#e0e0e0', fontSize: 14, paddingLeft: 18 }}>
          {sentAnnouncements.map((msg, i) => <li key={i}>{msg}</li>)}
        </ul>
      </div>
      {/* Not: Otomatik özet ve kısa notlar alanı */}
      <div style={{ background: '#7f5fff22', borderRadius: 12, padding: '1rem 1.2rem', color: '#e0e0e0', fontSize: 15 }}>
        <b>Haftalık Özet:</b> Sınıfın ortalama odak puanı bu hafta %5 arttı. En çok gelişen öğrenci: <b>Elif Kaya</b> 🎉
        <br />
        <b>Notlar:</b> Öğrencilerle birebir ilgilenmek verimi artırıyor. Haftaya mini bir yarışma planlanabilir.
      </div>
    </div>
  );
};

export default TeacherPanel; 