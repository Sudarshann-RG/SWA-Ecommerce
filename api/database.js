import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);

const database = client.database('swa-ecommerce');
const container = database.container('Items');

export async function createItem(id, title, price)
{
    const item = {
        'id': id,
        'title': title,
        'price': price
    };
    
    let response = await container.items.upsert(item);
    console.log("From index.js: ", response);
}
