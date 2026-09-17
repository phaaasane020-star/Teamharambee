import React, { useState, useEffect } from 'react';

export default function AdminAds() {
    const [title, setTitle] = useState('');
    const [targetUrl, setTargetUrl] = useState('');
    const [position, setPosition] = useState('sidebar');
    const [imageFile, setImageFile] = useState(null);
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch existing live ads
    const fetchAds = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/ads');
            const data = await res.json();
            if (data.success) setAds(data.ads);
        } catch (err) {
            console.error('Failed to fetch ads', err);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    // Handle form submission to create a new ad
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!imageFile) return alert('Please select an image file!');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('targetUrl', targetUrl);
        formData.append('position', position);
        formData.append('image', imageFile);

        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/ads', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                alert('Ad published live successfully!');
                setTitle('');
                setTargetUrl('');
                setImageFile(null);
                fetchAds(); // Refresh list
            } else {
                alert('Error: ' + data.error);
            }
        } catch (err) {
            console.error('Upload failed', err);
            alert('Failed to connect to the backend server.');
        } finally {
            setLoading(false);
        }
    };

    // Handle deleting an ad
    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to take this ad down?')) return;
        try {
            const res = await fetch(`http://localhost:5000/api/ads/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                fetchAds();
            }
        } catch (err) {
            console.error('Delete failed', err);
        }
    };

    return (
        <div style={{ padding: '40px', backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh' }}>
            <h1 style={{ color: '#FFD700', marginBottom: '20px' }}>Team Harambee - Ad Management Panel</h1>

            {/* Ad Creation Form */}
            <form onSubmit={handleUpload} style={{ background: '#1a1a1a', padding: '20px', borderRadius: '8px', maxWidth: '500px', marginBottom: '40px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '15px' }}>Upload New Live Ad</h3>
                
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Ad Title / Sponsor</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="e.g., Tech Startup Promo" 
                        style={{ width: '100%', padding: '8px', background: '#262626', border: '1px solid #444', color: '#fff', borderRadius: '4px' }}
                        required 
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Target Link (URL)</label>
                    <input 
                        type="text" 
                        value={targetUrl} 
                        onChange={(e) => setTargetUrl(e.target.value)} 
                        placeholder="https://example.com" 
                        style={{ width: '100%', padding: '8px', background: '#262626', border: '1px solid #444', color: '#fff', borderRadius: '4px' }}
                        required 
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Placement Position</label>
                    <select 
                        value={position} 
                        onChange={(e) => setPosition(e.target.value)}
                        style={{ width: '100%', padding: '8px', background: '#262626', border: '1px solid #444', color: '#fff', borderRadius: '4px' }}
                    >
                        <option value="sidebar">Sidebar Banner</option>
                        <option value="hero">Hero / Top Banner</option>
                    </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Ad Banner Image</label>
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])} 
                        style={{ color: '#fff' }}
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ background: '#FFD700', color: '#0d0d0d', padding: '10px 20px', border: 'none', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
                >
                    {loading ? 'Publishing...' : 'Push Ad Live'}
                </button>
            </form>

            {/* Live Ads List */}
            <h2>Currently Active Ads</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {ads.map((ad) => (
                    <div key={ad.id} style={{ background: '#1a1a1a', border: '1px solid #333', padding: '15px', borderRadius: '8px' }}>
                        <img src={ad.imageUrl} alt={ad.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} />
                        <h4 style={{ color: '#FFD700', margin: '5px 0' }}>{ad.title}</h4>
                        <p style={{ fontSize: '12px', color: '#aaa', wordBreak: 'break-all' }}>Target: {ad.targetUrl}</p>
                        <p style={{ fontSize: '12px', color: '#888' }}>Position: {ad.position}</p>
                        <button 
                            onClick={() => handleDelete(ad.id)}
                            style={{ background: '#d9534f', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', width: '100%' }}
                        >
                            Take Down Ad
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}