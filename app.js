import { analytics } from './config.js';

if (location.protocol === 'https:' && location.hostname === analytics.hostname &&
    /^[0-9a-f]{32}$/i.test(analytics.token) && !location.hash && !location.search) {
  const beacon = document.createElement('script');
  beacon.type = 'module';
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.dataset.cfBeacon = JSON.stringify({ token: analytics.token });
  document.body.append(beacon);
}
