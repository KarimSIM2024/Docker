const redis = require('redis');
const REDIS_URL = process.env.REDIS_URL || 'redis://kimo-db:6379';
const client = redis.createClient({ url: REDIS_URL });

async function connectDB() {
    if (!client.isOpen) {
        await client.connect();
        await client.set('flag', 'CTF{Kimo_Clean_Arch_Master_2026}');
        await client.set('hint', 'The secret key is "flag"');
        console.log("✅ Redis Connected & Secrets Loaded");
    }
    return client;
}
module.exports = { connectDB };