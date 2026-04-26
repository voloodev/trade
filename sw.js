// Service Worker for Notifications
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Push Notification එකක් ආවම පෙන්වන විදිහ
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: "New Signal", body: "Check Voloo ! for updates" };
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1990/1990263.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1990/1990263.png',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
