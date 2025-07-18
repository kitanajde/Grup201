// Not: Sadece ssdMobilenetv1 modeliyle çalışan sade örnek
import React, { useRef, useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';

const MODEL_URL = '/models';

const StudentPanel = () => {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [focusScore, setFocusScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Sadece ssdMobilenetv1 modelini yükle
  useEffect(() => {
    faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
      .then(() => setLoading(false))
      .catch(() => setError('Model yüklenemedi.'));
  }, []);

  const handleStartCamera = async () => {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setCameraOn(true);
      setTimeout(runFaceDetection, 1000);
    } catch (err) {
      setError('Kamera erişimi reddedildi');
    }
  };

  const handleStopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraOn(false);
    setFocusScore(0);
  };

  const runFaceDetection = async () => {
    if (!videoRef.current || !cameraOn) return;
    const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.SsdMobilenetv1Options());
    if (detections.length > 0) {
      setFocusScore(90 + Math.floor(Math.random() * 10));
    } else {
      setFocusScore(Math.floor(Math.random() * 10));
    }
    setTimeout(runFaceDetection, 1000);
  };

  return (
    <div style={{ maxWidth: 800, margin: '3rem auto', background: '#232526cc', borderRadius: 24, boxShadow: '0 2px 12px #7f5fff22', padding: '3rem 2.5rem', textAlign: 'center', minHeight: 600 }}>
      <h2 style={{ color: '#7f5fff', marginBottom: 18 }}>👩‍🎓 Öğrenci Paneli</h2>
      <p>Hoş geldin! Burada odaklanma süreni takip edebilir, Pomodoro zamanlayıcısını kullanabilir ve motivasyonunu artıracak içeriklere ulaşabilirsin.</p>
      <div style={{ margin: '2rem 0' }}>
        {!cameraOn ? (
          <button onClick={handleStartCamera} style={btnStyle} disabled={loading}>Kamerayı Aç</button>
        ) : (
          <button onClick={handleStopCamera} style={btnStyle}>Kamerayı Kapat</button>
        )}
        <div style={{ margin: '1.2rem 0' }}>
          {/* Not: Kamera ekranını büyüttüm */}
          <video ref={videoRef} autoPlay playsInline width={640} height={480} style={{ borderRadius: 16, background: '#111', boxShadow: '0 2px 12px #7f5fff22' }} />
        </div>
        <div style={{ color: focusScore > 50 ? '#7f5fff' : '#ff6b6b', fontWeight: 600, fontSize: 18 }}>
          Odak Puanı: {focusScore}
        </div>
        {loading && <div style={{ color: '#b3e0ff', marginTop: 8 }}>Modeller yükleniyor...</div>}
        {error && <div style={{ color: '#ff6b6b', marginTop: 8 }}>{error}</div>}
      </div>
    </div>
  );
};

const btnStyle = {
  background: 'linear-gradient(90deg, #7f5fff 0%, #00c6ff 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: 10,
  padding: '0.7rem 1.2rem',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
  marginBottom: 12
};

export default StudentPanel;
