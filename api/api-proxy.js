import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://your-shopify-api-endpoint', {
      headers: {
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
